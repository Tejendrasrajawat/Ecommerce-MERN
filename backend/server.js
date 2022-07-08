const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "backend/config/config.env" });
const connectDatabase = require("./database/database");

connectDatabase();

app.listen(process.env.PORT || 4000, () => {
  console.log("server is running in", process.env.PORT);
});
