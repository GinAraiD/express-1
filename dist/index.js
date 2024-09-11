"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./routes");
const app = express();
// applying the routes to the basepath '/api'
app.use('/api', routes_1.default);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('what up bro World!');
});
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
