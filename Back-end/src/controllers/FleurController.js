import Fleur from "../models/Fleur.js";

// create - pour Satya

// Read - Obtenir toutes les fleurs
export const getAllUsers = async (req, res) => {

    const fleurs = await Fleur.find();
    res.status(200).send(fleurs);
};

// Read - Pour Obtenir une fleur par son ID
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const fleur = await Fleur.findById(id);

    if (!fleur) {
      return res.status(404).json({
        success: false,
        message: "Fleur non trouvée",
      });
    }

    res.status(200).json({
      success: true,
      data: fleur,
      message: "Fleur trouvée avec succès",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Read - Obtenir les fleurs par type
export const getFleursByType = async (req, res) => {
  try {
    const fleurs = await Fleur.find({ type: req.params.type });
    res.status(200).json({
      success: true,
      data: fleurs,
      message: `Liste des fleurs de type ${req.params.type}`,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Update - pour mettre à jour une fleur
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFleur = await Fleur.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedFleur) {
      return res.status(404).json({
        success: false,
        message: "Fleur non trouvée",
      });
    }

    res.status(200).json({
      success: true,
      data: updatedFleur,
      message: "Fleur mise à jour avec succès",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Update - Mettre à jour toutes les fleurs
export const updateAllFleurs = async (req, res) => {
  try {
    const updatedFleurs = await Fleur.updateMany(
      {}, // pas de condition = toutes les fleurs
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      data: updatedFleurs,
      message: "Toutes les fleurs ont été mises à jour avec succès",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

//Delete - pour Satya