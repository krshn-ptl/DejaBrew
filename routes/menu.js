const express = require("express");
const router = express.Router();
const path = require("path");


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../templetes/menu.html'));
})
router.get('/menucss.css', (req, res) => {
    res.sendFile(path.join(__dirname, "../static/menu/menucss.css"));
})
router.get('/1.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, "../static/menu/1.jpg"));
})
router.get('/2.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, "../static/menu/2.jpg"));
})
router.get('/3.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, "../static/menu/3.jpg"));
})
router.get('/4.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, "../static/menu/4.jpg"));
})
router.get('/5.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, "../static/menu/5.jpg"));
})
router.get('/6.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, "../static/menu/6.jpg"));
})
router.get('/7.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, "../static/menu/7.jpg"));
})
router.get('/8.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, "../static/menu/8.jpg"));
})
router.get('/9.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, "../static/menu/9.jpg"));
})
router.get('/10.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, "../static/menu/10.jpg"));
})
router.get('/11.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, "../static/menu/11.jpg"));
})
router.get('/12.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, "../static/menu/12.jpg"));
})
router.get('/13.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, "../static/menu/13.jpg"));
})
router.get('/14.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, "../static/menu/14.jpg"));
})
router.get('/img1.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, "../static/menu/img1.jpg"));
})
router.get('/img2.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, "../static/menu/img2.jpg"));
})


module.exports = router;