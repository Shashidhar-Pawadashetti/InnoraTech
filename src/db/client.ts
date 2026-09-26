import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

export function getDb() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    return null;
  }
  try {
    const sql = neon(connectionString);
    return drizzle(sql, { schema });
  } catch (err) {
    console.warn("[DB_INIT_WARNING] Could not initialize database client:", err);
    return null;
  }
}
