import express from "express";
import {
  validateDriverInfo,
  validatePosition,
  validateUpdateDriverInfo,
} from "../inputValidation.js";
import { driversInRandomOrder } from "../data.js";
import { randomUUID } from "node:crypto";

let drivers = [...driversInRandomOrder].sort((a, b) => {
  if (a.points > b.points) {
    return -1;
  }
  if (b.points > a.points) {
    return 1;
  }
  return 0;
});

const router = express.Router();

// Procurar banco de dados dos pilotos
router.get("/", (req, res) => {
  res.status(200).send(drivers);
});

// Procurar pela posição do piloto
router.get("/standings/:position", (req, res, next) => {
  const { position } = req.params;
  const { error } = validatePosition(position, drivers.length);

  if (error) {
    const err = new Error();
    err.statusCode = 400;
    err.description = error.details;
    return next(err);
  }

  const selectDrivers = drivers[position - 1];
  res.status(200).send(selectDrivers);
});

// Procurar pelo ID do piloto
router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  const selectDrivers = drivers.find((driver) => driver.id === id);
  if (!selectDrivers) {
    const err = new Error();
    err.statusCode = 404;
    err.description = "Driver not found";
    return next(err);
  }
  res.status(200).send(selectDrivers);
});

router.post("/", (req, res, next) => {
  const { error } = validateDriverInfo(req.body);
  if (error) {
    const err = new Error();
    err.statusCode = 400;
    err.description = error.details;
    return next(err);
  }

  const newDriver = { ...req.body, id: randomUUID() };
  drivers.push(newDriver);
  drivers.sort((a, b) => {
    if (a.points > b.points) {
      return -1;
    }
    if (b.points > a.points) {
      return 1;
    }
    return 0;
  });
  res.status(200).send(newDriver);
});

router.put("/:id", (req, res, next) => {
  const { error } = validateUpdateDriverInfo(req.body);
  if (error) {
    const err = new Error();
    err.statusCode = 400;
    err.description = error.details;
    return next(err);
  }

  const { id } = req.params;
  const selectDrivers = drivers.find((d) => d.id === id);
  if (!selectDrivers) {
    const err = new Error();
    err.statusCode = 404;
    err.description = "Driver not found";
    return next(err);
  }

  for (const key in selectDrivers) {
    if (req.body[key]) {
      selectDrivers[key] = req.body[key];
    }
  }

  res.status(200).send(selectDrivers);
});

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  const selectDrivers = drivers.find((d) => d.id === id);

  if (!selectDrivers) {
    const err = new Error();
    err.statusCode = 404;
    err.description = "Driver not found";
    return next(err);
  }

  const index = drivers.indexOf(selectDrivers);
  drivers.splice(index, 1);
  res.status(200).send(selectDrivers);
});

export default router;
