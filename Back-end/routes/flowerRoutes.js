import express from "express";
import { addFlower } from "../controller/addToBDDController";

const router = express.Router();

router.post("/flowers/add", addFlower);

export default router;