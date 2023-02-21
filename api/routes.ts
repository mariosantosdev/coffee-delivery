import { Router } from "express";
import { coffes } from "./db.json";

const router = Router();

router.get("/coffes", (_req, res) => res.status(200).json(coffes));

export default router;
