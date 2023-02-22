import { Request, Response } from "express";
import { coffes } from "./db.json";

export default function handler(_: Request, res: Response) {
  res.status(200).json({ coffes });
}
