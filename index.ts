import express from "express";
const app = express();
const PORT = process.env.PORT || 4000;
import API_ROUTES from "./routes/api";

app.use(
	express.json({
		type: "*/*", // removing this requires incoming requests have the header, Content-Type: 'application/json'
	})
);

app.use("/api", API_ROUTES);

app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}  ⛵️`);
});
