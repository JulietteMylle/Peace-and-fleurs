import express from "express";
import {
  getAllUsers,
  getUserById,
  updateUser,
  getFleursByType,
  updateAllFleurs,
  addFlower,
  deleteFlower
} 
from "../controllers/FleurController.js";

const router = express.Router();

// Routes create pour Satya
router.post('/flowers', addFlower);

// Routes Read
router.get("/", getAllUsers); // Obtenir toutes les fleurs
router.get("/:id", getUserById); // Obtenir une fleur par ID
router.get("/type/:type", getFleursByType); // Obtenir les fleurs par type

// Routes Update
router.put("/:id", updateUser); // Mettre à jour une fleur
router.put("/all", updateAllFleurs); // Mettre à jour toutes les fleurs

//Routes delete pour Satya
router.delete('/:id', deleteFlower) 

export default router;