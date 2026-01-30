import { Router } from "express";
import UserRepository from "../repository/UserReposotory.js";

const router = Router();

router.get("/", async (req, resp) => {
  const result = await new UserRepository().getAll();
  resp.status(200).send(result);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await new UserRepository().getById(id);
  res.status(200).send(result);
});

router.post("/", async (req, res) => {
  const { body } = req;
  const columnsArray = ["name", "surname", "email"];
  const valuesArray = columnsArray.reduce((acc, columnName) => {
    acc.push(body[columnName]);
    return acc;
  }, []);
  await new UserRepository().insertOne(valuesArray);
  res.status(200).send();
});
export default router;
