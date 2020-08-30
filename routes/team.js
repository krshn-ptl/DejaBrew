const express = require("express");
const router = express.Router();
const path = require('path');


router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../templetes/join_team.htm'));
});
router.get("/events_team.css", (req, res) => {
    res.sendFile(path.join(__dirname, '../static/teamevents/events_team.css'));
})
router.get("/Coverphoto1.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/teamevents/Coverphoto1.jpg"))
})
router.get("/Coverphoto2.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/teamevents/Coverphoto2.jpg"))
})

module.exports = router;