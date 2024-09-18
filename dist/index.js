"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
// get the port from the environment variable or use 3000
const port = 3000;
app_1.default.listen(port, () => console.log(`App is listening on http://localhost:${port}`));
