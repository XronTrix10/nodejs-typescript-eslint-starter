import "module-alias/register"; // Register alias for @/ directory
import logger from "@/lib/logger";

import { env } from "./lib/env.config";

logger.info(`Hello TypeScript From Port ${env.PORT}!`);