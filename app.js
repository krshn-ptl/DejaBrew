const express = require("express");
const app = express();
const indexRouter = require("./routes/index");
const menuRouter = require("./routes/menu");
const contactRouter = require("./routes/contact");
const teamRouter = require("./routes/team");
const evnetRouter = require("./routes/events")
const path = require("path");
const PORT = process.env.PORT || 4000;


app.use("/", indexRouter);
app.use("/menu", menuRouter);
app.use("/contact", contactRouter);
app.use("/team", teamRouter);
app.use("/event", evnetRouter);

app.get("/logoNobg2.png", (req, res) => {
    res.sendFile(path.join(__dirname, "static/logoNobg2.png"));
})


app.listen(PORT);   