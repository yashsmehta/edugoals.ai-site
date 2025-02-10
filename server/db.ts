import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../shared/schema";

neonConfig.webSocketConstructor = ws;

// Add fallback for development
const DATABASE_URL = process.env.DATABASE_URL || (process.env.NODE_ENV === 'development' 
  ? 'postgresql://localhost:5432/your_local_db'
  : undefined);

if (!DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?"
  );
}

const pool = new Pool({ connectionString: DATABASE_URL });
export const db = drizzle({ client: pool, schema });
