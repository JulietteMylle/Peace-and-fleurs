import { Fleur } from "../modeles/fleur.js";

/**
 * middlewarepour ajouter une fleur
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
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
}

export const deleteFlower = async (req,res) => {
    try{
        const fleurSupp = await Fleur.findByIdAndDelete(req.params.id)

        if(!fleurSupp){
            return res.status(404).json({message: "Fleur non trouvée"})
        }
        res.status(204).end()

        res.status(200).json({ message: "Fleur supprimée avec succès" });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
}