import { createLogger, format, transports } from "winston";

const logger = createLogger({
  level: "info", // Set the default log level (e.g., 'error', 'warn', 'info', 'debug')
  format: format.combine(
    format.timestamp(),
    format.printf(({ level, message, timestamp }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    })
  ),
  transports: [
    new transports.Console(), // Log to console
    new transports.File({ filename: "combined.log" }),
    new transports.File({ filename: "error.log", level: "error" }),
  ],
});

export default logger;
