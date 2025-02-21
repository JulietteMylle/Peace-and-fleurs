import express from "express";
import {
  getAllUsers,
  getUserById,
  majFleur,
  getFleursByType,
  updateAllFleurs,
  addFlower,
  deleteFlower,

  searchFlowersowers,
  searchFlowers;

  toggleProduitPanier,


} from "../controllers/FleurController.js";


const router = express.Router();

// Routes create pour Satya
router.post('/flowers', addFlower);
// Routes Read
router.get("/", getAllUsers); // Obtenir toutes les fleurs
router.get("/:id", getUserById); // Obtenir une fleur par ID
router.get("/type/:type", getFleursByType); // Obtenir les fleurs par type
router.get("/search", searchFlowers);

// Routes Update
router.put("/update/:id", majFleur); // Mettre à jour une fleur
router.put("/all", updateAllFleurs); // Mettre à jour toutes les fleurs
router.delete('/delete/:id', deleteFlower) 
router.put('/cart/:id', toggleProduitPanier)
// router.get('/cart', getProduitsPanier)



//Routes delete pour Satya

export default router;