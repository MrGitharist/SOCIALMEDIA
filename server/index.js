import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";

// security packges
import helmet from "helmet";
import dbConneciton from "./dbConfig/index.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 8800;

dbConneciton();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
