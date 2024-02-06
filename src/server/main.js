import express from "express";
import ViteExpress from "vite-express";

const app = express();

import { data } from "./data.js";

app.get("/hello", (req, res) => {
  res.send("Hello Vite + Vue!");
});
app.get("/api/page", (req, res) => {
  res.send(data);
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
