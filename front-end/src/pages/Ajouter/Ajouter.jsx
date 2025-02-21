import { useForm } from "react-hook-form";
import fleursApi from "../../services/fleursApi";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

// Définition du schéma de validation
const schema = yup
  .object({
    nom: yup
      .string()
      .required("Le nom est obligatoire"),
    type: yup.string().required("Le type est obligatoire"),
    image: yup.string().required("Veuillez mettre le nom exact de votre image"),
    couleur: yup.string().required("La couleur est obligatoire"),
    prix: yup.string().required("Le prix est obligatoire"),
    saisonFloraison: yup.string().required("La saison est obligatoire"),
    imageUne: yup.string().required("Veuillez mettre le nom exact de votre image"),
    imageDeux: yup.string().required("Veuillez mettre le nom exact de votre image"),
    description: yup.string().required("La description est obligatoire"),
  })
  .required();

const AddFlower = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();

  // Fonction qui gère la soumission du formulaire
  const onSubmit = (data) => {
    console.log("Données soumises ", data);
    fleursApi
      .addFlower(data)
      .then(() => navigate("/")) 
      .catch((error) => console.error("Erreur", error));
  };

  return (
    <>
      <h1>Ajouter une fleur</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Nom de la fleur */}
        <div>
          <label htmlFor="nom">Nom de la fleur</label>
          <input id="nom" {...register("nom")} />
          {errors.nom && <p>{errors.nom.message}</p>}
        </div>

        {/* Type de la fleur */}
        <div>
          <label htmlFor="type">Type de la fleur</label>
          <input id="type" {...register("type")} />
          {errors.type && <p>{errors.type.message}</p>}
        </div>

        {/* Image */}
        <div>
          <label htmlFor="image">Image</label>
          <input id="image" {...register("image")} />
          {errors.image && <p>{errors.image.message}</p>}
        </div>

        {/* Couleur */}
        <div>
          <label htmlFor="couleur">Couleur</label>
          <input id="couleur" {...register("couleur")} />
          {errors.couleur && <p>{errors.couleur.message}</p>}
        </div>

        {/* Prix */}
        <div>
          <label htmlFor="prix">Prix</label>
          <input id="prix" {...register("prix")} />
          {errors.prix && <p>{errors.prix.message}</p>}
        </div>

        {/* Saison de floraison */}
        <div>
          <label htmlFor="saisonFloraison">Saison de floraison</label>
          <input id="saisonFloraison" {...register("saisonFloraison")} />
          {errors.saisonFloraison && <p>{errors.saisonFloraison.message}</p>}
        </div>

        {/* Image une */}
        <div>
          <label htmlFor="imageUne">Image principale</label>
          <input id="imageUne" {...register("imageUne")} />
          {errors.imageUne && <p>{errors.imageUne.message}</p>}
        </div>

        {/* Image deux */}
        <div>
          <label htmlFor="imageDeux">Deuxième image</label>
          <input id="imageDeux" {...register("imageDeux")} />
          {errors.imageDeux && <p>{errors.imageDeux.message}</p>}
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description">Description</label>
          <textarea id="description" {...register("description")} />
          {errors.description && <p>{errors.description.message}</p>}
        </div>

        {/* Bouton de soumission */}
        <button type="submit">Ajouter la fleur</button>
      </form>
    </>
  );
};

export default AddFlower;
