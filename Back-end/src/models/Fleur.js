import mongoose from "mongoose";

const fleurSchema = new mongoose.Schema(
  {
    ObjectId: {
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
      type: Number,
      required: true,
    },
    couleur: {
      type: String,
      required: true,
    },
    saisonFloraison: {
      type: String,
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

export default mongoose.model("Fleur", fleurSchema);