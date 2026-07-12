import "server-only";
import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaLibSql } from "@prisma/adapter-libsql";

// Local dev uses a plain SQLite file (fast, no network, no account needed).
// Production points DATABASE_URL at a hosted libSQL database (e.g. Turso)
// instead, since Vercel's serverless functions have no persistent filesystem
// a local .db file would silently lose data between invocations.
const databaseUrl = process.env.DATABASE_URL ?? "file:./dev.db";
const adapter = databaseUrl.startsWith("libsql:")
  ? new PrismaLibSql({ url: databaseUrl, authToken: process.env.TURSO_AUTH_TOKEN })
  : new PrismaBetterSqlite3({ url: databaseUrl });

// Reuse a single client across hot reloads in dev - each reload would
// otherwise open a new connection and eventually exhaust SQLite's file locks.
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
