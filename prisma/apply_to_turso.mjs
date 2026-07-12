// One-off: Prisma's migrate CLI can't speak Turso's remote libsql protocol
// directly (only the query engine, via our driver adapter, understands it) -
// so the init migration's SQL is applied here directly instead.
import { createClient } from "@libsql/client";
import { readFileSync } from "node:fs";

const url = process.env.DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;
if (!url || !authToken) {
  throw new Error("DATABASE_URL and TURSO_AUTH_TOKEN must be set.");
}

const client = createClient({ url, authToken });

const rawSql = readFileSync("prisma/migrations/20260712153823_init/migration.sql", "utf-8");
const withoutComments = rawSql
  .split("\n")
  .filter((line) => !line.trim().startsWith("--"))
  .join("\n");
const statements = withoutComments
  .split(";")
  .map((s) => s.trim())
  .filter((s) => s.length > 0);

for (const statement of statements) {
  await client.execute(statement);
}

console.log(`Applied ${statements.length} statements to Turso.`);
client.close();
