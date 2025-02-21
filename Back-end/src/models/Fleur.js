import mongoose from "mongoose";

const fleurSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

const Fleur = mongoose.model("Fleur", fleurSchema, "flowers")

export default Fleur;