import { Fleur } from "../modeles/fleur";

export const addFlower = async (req, res) => {
    try {
        const { nom, description, prix, couleur, saisonFloraison, image} = req.body;

        if (!nom || !description || !prix  || !couleur || !saisonFloraison || !image) {
            return res.status(400).json({ message: "Tous les champs doivent être complétés" });
        }

        const newFlower = new Flower({
            nom,
            description,
            prix,
            couleur,
            saisonFloraison,
            image
        });

        await newFlower.save();

        res.status(201).json({ message: "La fleur a été ajouté", flower: newFlower });
    } catch (error) {
        res.status(500).json({ message: "Une erreur est survenue", error });
    }
};