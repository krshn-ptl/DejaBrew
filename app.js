const express = require("express");
const app = express();
const indexRouter = require("./routes/index");
const menuRouter = require("./routes/menu");
const contact = require("./routes/contact");
const path = require("path");
app.use("/", indexRouter);
app.use("/menu", menuRouter);
app.use("/contact", contact);
app.get("/logoNobg2.png", (req, res) => {
    res.sendFile(path.join(__dirname, "static/logoNobg2.png"));
})
app.listen(8000); 