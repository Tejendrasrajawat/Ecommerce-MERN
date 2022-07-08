const express = require("express");
const app = express();
// parses json
app.use(express.json());
// route imports
const product = require("./routes/productRoute");

// api address and callback function which coming from routes
app.use("/api/v1", product);

module.exports = app;
