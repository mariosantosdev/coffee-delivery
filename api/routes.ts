import { Router } from "express";
import { coffes as rawCoffes } from "./db.json";

const router = Router();

router.get("/coffes", (req, res) => {
  const baseURL = req.protocol + "://" + req.get("host");

  const coffes = rawCoffes.map((coffe) => ({
    ...coffe,
    image: `${baseURL}/api${coffe.image}`,
  }));

  res.status(200).json({ coffes });
});

export default router;
