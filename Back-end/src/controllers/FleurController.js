import { Fleur, fleurValidation } from "../models/Fleur.js";

// create - pour Satya
export const addFlower = async (req, res) => {
  try {
      const {nom ,type, description, prix, couleur, saisonFloraison, image} = req.body;

      if (!type || !description || !prix  || !couleur || !saisonFloraison || !image || !nom) {
          return res.status(400).json({ message: "Tous les champs doivent être complétés" });
      }

      const newFlower = new Fleur({
         nom : req.body.nom,
          type : req.body.type,
          description : req.body.description,
          prix : req.body.prix,
          couleur : req.body.couleur,
          saisonFloraison : req.body.saisonFloraison,
          image : req.body.image
      });

      const fleurAdd = await newFlower.save();
      res.status(201).json(fleurAdd)

      // res.status(201).json({ message: "La fleur a été ajouté", flower: newFlower });
  } catch (error) {
      res.status(500).json({ message: "Une erreur est survenue", error });
  }
}

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


export const majFleur = async (req, res) => {
  try {
    // Valider les données avec ton schéma de validation (par exemple, avec Joi, si tu en utilises un)
    const { error, value } = fleurValidation.validate(req.body); 
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    console.log(req.body)

    // Mettre à jour la fleur avec les données envoyées dans la requête
    const fleurMaj = await Fleur.findByIdAndUpdate(req.params.id, {
      nom: req.body.nom,
      type: req.body.type,
      image: req.body.image,
      couleur: req.body.couleur,
      prix: req.body.prix,
      saisonFloraison: req.body.saisonFloraison,
      image: req.body.image,

      description: req.body.description
    }, { new: true, runValidators: true });

    // Vérifier si la fleur existe et si elle a été mise à jour
    if (!fleurMaj) {
      return res.status(404).json({ message: "Fleur non trouvée" });
    }

    // Retourner la fleur mise à jour
    res.status(200).json({
      success: true,
      data: fleurMaj,
      message: "Fleur mise à jour avec succès"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Une erreur est survenue lors de la mise à jour de la fleur"
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

export const deleteFlower = async (req,res) => {
  try{
      const fleurSupp = await Fleur.findByIdAndDelete(req.params.id)

      if(!fleurSupp){
          return res.status(404).json({message: "Fleur non trouvée"})
      }

      res.status(200).json({ message: "Fleur supprimée avec succès" });
  } catch (error) {
      res.status(500).json({ message: "Erreur serveur", error });
  }
};

export const searchFlowers = async (req, res) => {
  try {
    const { query } = req.query; // Récupérer le paramètre 'query' de la requête

    if (!query) {
      return res.status(400).json({
        success: false,
        message: "Veuillez tapez le nom d'une fleur",
      });
    }

    // Filtrer les fleurs par le nom ou la description
    const fleurs = await Fleur.find({
      $or: [
        { nom: { $regex: query, $options: "i" } }, // Recherche insensible à la casse par nom
        { couleur: { $regex: query, $options: "i" } }, // Recherche insensible à la casse par description
      ],
    });

    if (fleurs.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Aucune fleur trouvée",
      });
    }

    res.status(200).json({
      success: true,
      data: fleurs,
      message: `Fleurs trouvées pour le terme de recherche : ${query}`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};