import express from "express";
import { addFlower, deleteFlower } from "../controller/addToBDDController.js";

const router = express.Router();

router.post('/flowers', addFlower);
router.delete('/flower/:id', deleteFlower) 

export default router;