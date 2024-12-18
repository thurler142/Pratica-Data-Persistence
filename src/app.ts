import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes, { router } from "./routes/user.Routes";
import { getUser } from "./controllers/user.Controller";
import authorRoutes from "./routes/author.routes";

const app = express();

app.use(express.json());
app.use("/authors", authorRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});




