const express = require("express");
const router = express.Router();

// example get route
router.get("/", (req, res) => {
	res.send("Hello World");
});

// example post route
router.post("/", (req, res) => {
	console.log("BODY: ", req.body);
});

module.exports = router;
