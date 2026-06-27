const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        name: "Your Name",
        bio: "Full Stack Developer and MongoDB Enthusiast"
    });
});

module.exports = router;