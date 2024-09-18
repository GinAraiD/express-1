"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import needed libraries
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./routes");
// get express application
const app = express();
// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// applying the routes to the basepath '/api'
app.use("/api", routes_1.default);
// Error handling middleware (optional)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({
        message: "Internal Server Error",
        error: err.message || "Unknown error",
    });
});
exports.default = app;
