import express from "express";
import {
  getAllUsers,
  getUserById,
  updateUser,
  getFleursByType,
  updateAllFleurs,
} from "../controllers/FleurController.js";

const router = express.Router();

// Routes create pour Satya

// Routes Read
router.get("/", getAllUsers); // Obtenir toutes les fleurs
router.get("/:id", getUserById); // Obtenir une fleur par ID
router.get("/type/:type", getFleursByType); // Obtenir les fleurs par type

// Routes Update
router.put("/:id", updateUser); // Mettre à jour une fleur
router.put("/all", updateAllFleurs); // Mettre à jour toutes les fleurs

//Routes delete pour Satya

export default router;
