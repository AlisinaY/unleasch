import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";

import authentication from "./routes/authentication.js";
import recieveFlags from "./routes/recieveFlags.js";
import getEvents from "./routes/getEvents.js";

let app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/", authentication);
app.use("/", recieveFlags);
app.use("/", getEvents);

app.listen(5000, function () {
  console.log("Server started on Port 5000...");
});
