import pkg from "express";
import express from "express";
const { urlencoded, json } = pkg;
import router from "./routes/index.js";
import { mongoose } from "mongoose";
import "dotenv/config";
mongoose.set("strictQuery", false);
const app = express();

// connect mongoose to mongoDB as soon as server starts
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.url);

  console.log("connected");
}

// for parsing post json
app.use(urlencoded({ extended: false }));
app.use(json());

// view engine setup
app.set("views", "./views");
app.set("view engine", "pug");

app.listen(8080); // Port 8080
app.use("/", router);
