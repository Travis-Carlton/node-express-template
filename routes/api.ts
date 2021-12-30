import express from "express";
const router = express.Router();

// example get route
router.get("/", (req: any, res: any) => {
	res.send("Hello World");
});

// example post route
router.post("/", (req: { body: any; }, res: any) => {
	console.log("BODY: ", req.body);
});

export default router;
