const express = require("express");
const app = express();
const errorMiddleWare = require("./middleware/error");
// parses json
app.use(express.json());
// route imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
// api address and callback function which coming from routes
app.use("/api/v1", product);
app.use("/api/v1", user);

// middleware for error
app.use(errorMiddleWare);

module.exports = app;
