import mongoose from "mongoose";
import Joi from "joi";

const flowerSchema = new mongoose.Schema({
    nom: 
    {
        type: String,
        required: true
    },
    description:
    {
        type: String,
        required: true
    },
    prix:
    {
        type: Number,
        required: true
    },
    couleur:
    {
        type: String,
        required: true
    },
    saisonFloraison:
    {
        type: String,
        enum: ["Printemps", "Été", "Automne", "Hiver"]     
    }
})

const Fleur = mongoose.model('Fleur', flowerSchema)

const fleurValidation = Joi.object({
    prix: Joi.number().min(1).required().messages({'number.min' : 'Le prix doit être supérieur à 0'})
})

export {Fleur, fleurValidation}