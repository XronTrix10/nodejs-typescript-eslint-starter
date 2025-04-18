import path from "path";

import { config } from "dotenv";
import { z } from "zod";

import logger from "./logger";

// Load environment variables from .env file
config({ path: path.resolve(process.cwd(), ".env") });

// Define the environment schema
const envSchema = z.object({
  // Required variables
  NODE_ENV: z.enum(["DEVELOPMENT", "PRODUCTION"]),
  PORT: z.string().transform((val) => parseInt(val, 10)),
});

// Parse and validate environment variables
const envParse = envSchema.safeParse(process.env);

if (!envParse.success) {
  logger.error("❌ Invalid environment variables:");
  logger.error(envParse.error.format());
  throw new Error("Invalid environment variables");
}

// Export validated environment variables
export const env = envParse.data;
