import express from "express";
import routes from "./routes";

const app = express();

app.use("/static", express.static("static"));
app.use("/api/", routes);

export const handler = app;
