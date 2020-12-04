require("dotenv").config();
const db = require("./firebase");
const express = require("express");
const app = express();
const port = 5000;
db;
app.get("/", (req, res) => {
    res.json("Hello World!");
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map