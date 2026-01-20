import express from "express";
import driversRouter from "./routes/driver.js";
import teamsRouter from "./routes/team.js";

const baseAPIRoute = "/api/v1";

const app = express();

app.use(express.json());
app.use(baseAPIRoute + "/drivers", driversRouter);
app.use(baseAPIRoute + "/teams", teamsRouter);
app.use((error, req, res, next) => {
  res.status(error.statusCode ?? 500).send(error);
});

// Porta do computador
const port = 3000;
app.listen(port, () => {
  console.log("Deu certo");
});
