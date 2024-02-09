import express from "express";
import ViteExpress from "vite-express";
import 'dotenv/config'


const app = express();
if (process.env.RUNTIME === "production") {
  ViteExpress.config({ mode: "production" })
}
import { data } from "./data.js";

app.get("/api/page", (req, res) => {
  res.send(data);
});

const port = process.env.PORT || 3000;

ViteExpress.listen(app, port, () =>
  console.log("Server is listening on port " + port + "..."),
);
