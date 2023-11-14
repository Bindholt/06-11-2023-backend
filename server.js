import express from "express";
import morgan from "morgan";
import cors from "cors";
import {peopleRouter} from "./src/routers/people.router.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// morgan for logging requests in server console
app.use(morgan("tiny"));

app.get("/", (req, res) => {
	res.send("Welcome to the backend!");
})

app.use("/people", peopleRouter);

app.listen(port,() => {
	console.log(`Server is running at http://localhost:${port}`);
});