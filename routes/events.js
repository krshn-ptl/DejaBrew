const express = require("express");
const router = express.Router();
const path = require("path");

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../templetes/events.html'));
})
router.get("/events_css.css", (req, res) => {
    res.sendFile(path.join(__dirname, '../static/teamevents/events_css.css'));
})
router.get("/Coverphoto3.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/teamevents/Coverphoto3.jpg"))
})
router.get("/Coverphoto4.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/teamevents/Coverphoto4.jpg"))
})
router.get("/Coverphoto5.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/teamevents/Coverphoto5.jpg"))
})
router.get("/Coverphoto6.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/teamevents/Coverphoto6.jpg"))
})
module.exports = router;