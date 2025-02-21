import mongoose from "mongoose";
import Joi from "joi";

// Schéma de la fleur avec mongoose
const fleurSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    prix: {
      type: String,
      required: true,
    },
    couleur: {
      type: String,
      required: true,
    },
    saisonFloraison: {
      type: String,
      enum: ["Printemps", "Été", "Automne", "Hiver"],
      required: true,
    },
    image: {
      type: String,
    },
    imageUne: {
      type: String,
    },imageDeux: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Fleur = mongoose.model("Fleur", fleurSchema, "flowers");

// Validation des données de la fleur avec Joi
const fleurValidation = Joi.object({
  nom: Joi.string()
    .required()
    .messages({
      "string.empty": "Le nom de la fleur est obligatoire",
    }),

  type: Joi.string()
    .required()
    .messages({
      "string.empty": "Le type de la fleur est obligatoire",
    }),

  couleur: Joi.string()
    .required()
    .messages({
      "string.empty": "La couleur est obligatoire",
    }),

  prix: Joi.string()
    .required()
    .messages({
      "string.empty": "Le prix est obligatoire",
    }),

  saisonFloraison: Joi.string()
    .valid("Printemps", "Été", "Automne", "Hiver")
    .required()
    .messages({
      "string.empty": "La saison de floraison est obligatoire",
      "any.only":
        "La saison de floraison doit être une valeur parmi Printemps, Été, Automne ou Hiver",
    }),

  image: Joi.string()
    .required()
    .messages({
      "string.empty": "L'image principale est obligatoire",
    }),
    imageUne: Joi.string()
    .required()
    .messages({
      "string.empty": "L'image principale est obligatoire",
    }),
    imageDeux: Joi.string()
    .required()
    .messages({
      "string.empty": "L'image principale est obligatoire",
    }),


  description: Joi.string()
    .required()
    .messages({
      "string.empty": "La description est obligatoire",
    }),
});

export { Fleur, fleurValidation };
