import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://contentdb_owner:hDw3yeGkQ6BT@ep-winter-night-a5oo775i.us-east-2.aws.neon.tech/waste_managment?sslmode=require"
);
export const db = drizzle(sql, { schema });
