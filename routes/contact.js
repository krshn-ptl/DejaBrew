const express = require("express");
const router = express.Router();
const path = require("path");

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../templetes/contact-us1.html'));
})
router.get("/style.css", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/ContactUS/css/style.css"))
})
router.get("/responsive.css", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/ContactUS/css/responsive.css"))
})
router.get("/bootstrap.min.css", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/ContactUS/css/bootstrap.min.css"))
})
router.get("/all.css", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/ContactUS/css/all.css"))
})
router.get("/owl.carousel.min.css", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/ContactUS/css/owl.carousel.min.css"))
})
router.get("/baguetteBox.min.css", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/ContactUS/css/baguetteBox.min.css"))
})
router.get("/rest1.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/ContactUS/images/rest1.jpg"))
})
router.get("/rest2.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/ContactUS/images/rest2.jpg"))
})
router.get("/rest3.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/ContactUS/images/rest3.jpg"))
})
router.get("/rest4.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/ContactUS/images/rest4.jpg"))
})
router.get("/rest5.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/ContactUS/images/rest5.jpg"))
})
router.get("/rest6.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/ContactUS/images/rest6.jpg"))
})
router.get("/rest7.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/ContactUS/images/rest7.jpg"))
})
router.get("/rest8.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/ContactUS/images/rest8.jpg"))
})
router.get("/all-bg-title.jpg", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/ContactUS/images/all-bg-title.jpg"))
})
router.get("/jquery.superslides.min.js", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/ContactUS/js/jquery.superslides.min.js"))
})
router.get("/images-loded.min.js", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/ContactUS/js/images-loded.min.js"))
})
router.get("/inewsticker.js", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/ContactUS/js/inewsticker.js"))
})
router.get("/custom.js", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/ContactUS/js/custom.js"))
})
router.get("/owl.carousel.min.js", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/ContactUS/js/owl.carousel.min.js"))
})
router.get("/baguetteBox.min.js", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/ContactUS/js/baguetteBox.min.js"))
})
router.get("/jquery-3.2.1.min.js", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/ContactUS/js/jquery-3.2.1.min.js"))
})
module.exports = router;