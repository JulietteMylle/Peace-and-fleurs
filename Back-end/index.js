import express from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import mongoose from "mongoose";
import userRoutes from "./src/routes/FleursRoutes.js";

// On configure les variables d'environnement
dotenv.config();

// On Initialise l'application Express
const app = express();
const port = process.env.PORT || 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Connexion à MongoDB+log pour verif la connexion
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log(chalk.green("✓ Connecté à MongoDB"));
  })
  .catch((err) => {
    console.error(chalk.red("✗ Erreur de connexion à MongoDB:", err));
  });

// Routes de base
app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

//routes de nos api
app.use("/api/users", userRoutes);

// Démarrage du serveur
app.listen(port, () => {
  console.log(chalk.blue(`✓ Serveur démarré sur le port ${port}`));
});