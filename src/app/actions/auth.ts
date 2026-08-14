"use server";

import bcrypt from "bcryptjs";
import crypto from "crypto";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { createSession, deleteSession } from "@/lib/session";
import { sendPasswordResetEmail } from "@/lib/email";
import { SITE_URL } from "@/lib/site";
import {
  SignupFormSchema,
  LoginFormSchema,
  ForgotPasswordFormSchema,
  ResetPasswordFormSchema,
  type SignupFormState,
  type LoginFormState,
  type ForgotPasswordFormState,
  type ResetPasswordFormState,
} from "@/lib/definitions";

const RESET_TOKEN_TTL_MS = 60 * 60 * 1000; // 1 hour

function hashToken(token: string) {
  return crypto.createHash("sha256").update(token).digest("hex");
}

export async function signup(state: SignupFormState, formData: FormData): Promise<SignupFormState> {
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  const { name, email, password } = validatedFields.data;

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return { errors: { email: ["An account with this email already exists."] } };
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { name, email, passwordHash },
    select: { id: true },
  });

  await createSession(user.id);
  redirect("/");
}

export async function login(state: LoginFormState, formData: FormData): Promise<LoginFormState> {
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  const { email, password } = validatedFields.data;

  const user = await prisma.user.findUnique({ where: { email } });
  // Deliberately the same generic message for "no such user" and "wrong
  // password" - distinguishing them lets an attacker enumerate valid emails.
  const invalidMessage = { message: "Invalid email or password." };
  if (!user) {
    return invalidMessage;
  }

  const passwordMatches = await bcrypt.compare(password, user.passwordHash);
  if (!passwordMatches) {
    return invalidMessage;
  }

  await createSession(user.id);
  redirect("/");
}

export async function requestPasswordReset(
  state: ForgotPasswordFormState,
  formData: FormData,
): Promise<ForgotPasswordFormState> {
  const validatedFields = ForgotPasswordFormSchema.safeParse({
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  const { email } = validatedFields.data;
  // Same message whether or not the account exists - otherwise this form
  // becomes a way to check which emails are registered.
  const confirmation = { message: "If an account exists for that email, a reset link is on its way." };

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return confirmation;
  }

  // Clear out any earlier unused tokens for this user so only the most
  // recent reset link is valid.
  await prisma.passwordResetToken.deleteMany({ where: { userId: user.id } });

  const token = crypto.randomBytes(32).toString("hex");
  await prisma.passwordResetToken.create({
    data: {
      tokenHash: hashToken(token),
      userId: user.id,
      expiresAt: new Date(Date.now() + RESET_TOKEN_TTL_MS),
    },
  });

  await sendPasswordResetEmail(email, `${SITE_URL}/reset-password?token=${token}`);

  return confirmation;
}

export async function resetPassword(
  state: ResetPasswordFormState,
  formData: FormData,
): Promise<ResetPasswordFormState> {
  const validatedFields = ResetPasswordFormSchema.safeParse({
    token: formData.get("token"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  const { token, password } = validatedFields.data;

  const resetToken = await prisma.passwordResetToken.findUnique({
    where: { tokenHash: hashToken(token) },
  });

  if (!resetToken || resetToken.expiresAt < new Date()) {
    return { message: "This reset link is invalid or has expired. Please request a new one." };
  }

  const passwordHash = await bcrypt.hash(password, 10);
  await prisma.user.update({
    where: { id: resetToken.userId },
    data: { passwordHash },
  });
  await prisma.passwordResetToken.delete({ where: { id: resetToken.id } });

  await createSession(resetToken.userId);
  redirect("/");
}

export async function logout() {
  await deleteSession();
  redirect("/");
}
