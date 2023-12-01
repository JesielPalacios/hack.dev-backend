import express from "express";
import usersRouter from "./api/users.routes";

const app = express();
app.use(express.json());

app.use("/", usersRouter);

export default app;
