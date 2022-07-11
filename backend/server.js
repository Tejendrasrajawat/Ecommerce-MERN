const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "backend/config/config.env" });
const connectDatabase = require("./database/database");

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to unhandled uncaught Exception.");
});

// connecting to db
connectDatabase();

const server = app.listen(process.env.PORT || 4000, () => {
  console.log("server is running in", process.env.PORT);
});

// unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to unhandled promise rejection.");
  server.close(() => {
    process.exit(1);
  });
});
