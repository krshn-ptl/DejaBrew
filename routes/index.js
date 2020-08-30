const express = require("express");
const router = express.Router();
const path = require('path');

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../templetes/home.html'));
});
router.get("/stylesheet.css", (req, res) => {
    res.sendFile(path.join(__dirname, '../static/homepg/stylesheet.css'));
})
router.get("/Cover2.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/homepg/img/Cover2.jpg"))
})
router.get("/Coverphoto1.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/homepg/img/Coverphoto1.jpg"))
})
router.get("/Coverphoto2.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/homepg/img/Coverphoto2.jpg"))
})
router.get("/quality-badge.png", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/homepg/img/quality-badge.png"))
})
router.get("/biryani.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/homepg/img/biryani.jpg"))
})
router.get("/Brownie.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/homepg/img/Brownie.jpg"))
})
router.get("/tea.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/homepg/img/tea.jpg"))
})
router.get("/Cover1.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/homepg/img/Cover1.jpg"))
})

module.exports = router;