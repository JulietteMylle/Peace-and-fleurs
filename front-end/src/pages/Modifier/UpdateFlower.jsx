import { useForm } from "react-hook-form";
import fleursApi from "../../services/fleursApi";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "../Ajouter/Ajouter.module.css"; // Importation du module CSS
import { useCallback, useEffect } from "react"; // Import de useCallback
// Définition du schéma de validation
const schema = yup
  .object({
    nom: yup.string().required("Le nom est obligatoire"),
    type: yup.string().required("Le type est obligatoire"),
    image: yup.string().required("Veuillez mettre le nom exact de votre image"),
    couleur: yup.string().required("La couleur est obligatoire"),
    prix: yup.string().required("Le prix est obligatoire"),
    saisonFloraison: yup.string().required("La saison est obligatoire"),
    description: yup.string().required("La description est obligatoire"),
  })
  .required();

const UpdateFlower = () => {
  const { id } = useParams(); // Récupère l'ID de la fleur à partir de l'URL
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  // Fonction qui gère la soumission du formulaire
  const onSubmit = (data) => {
    console.log("Données soumises pour mise à jour", data);
    fleursApi
      .updateFlower(id, data) // Passer l'id pour la mise à jour
      .then(() => navigate("/"))
      .catch((error) => console.error("Erreur", error));
  };

  // Fonction pour pré-remplir le formulaire avec les données de la fleur
// Fonction pour pré-remplir le formulaire avec les données de la fleur
const fetchFlower = useCallback(async () => {
    try {
      const response = await fleursApi.getFlowerById(id);
      const flower = response.data;
      // Remplir le formulaire avec les données de la fleur existante
      setValue("nom", flower.nom);
      setValue("type", flower.type);
      setValue("image", flower.image);
      setValue("couleur", flower.couleur);
      setValue("prix", flower.prix);
      setValue("saisonFloraison", flower.saisonFloraison);
      setValue("imageUne", flower.imageUne);
      setValue("imageDeux", flower.imageDeux);
      setValue("description", flower.description);
    } catch (error) {
      console.error("Erreur lors de la récupération de la fleur", error);
    }
  }, [id, setValue]); // Ajoute id et setValue comme dépendances, puisque ce sont des variables externes qui peuvent changer
  
  useEffect(() => {
    fetchFlower();
  }, [fetchFlower]); // Ici, fetchFlower ne changera que si ses dépendances changent

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formTitle}>Mettre à jour la fleur</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {/* Nom de la fleur */}
        <div className={styles.formGroup}>
          <label htmlFor="nom">Nom de la fleur</label>
          <input id="nom" className={styles.formInput} {...register("nom")} />
          {errors.nom && <p className={styles.errorMessage}>{errors.nom.message}</p>}
        </div>

        {/* Type de la fleur */}
        <div className={styles.formGroup}>
          <label htmlFor="type">Type de la fleur</label>
          <input id="type" className={styles.formInput} {...register("type")} />
          {errors.type && <p className={styles.errorMessage}>{errors.type.message}</p>}
        </div>

        {/* Image */}
        <div className={styles.formGroup}>
          <label htmlFor="image">Image</label>
          <input id="image" className={styles.formInput} {...register("image")} />
          {errors.image && <p className={styles.errorMessage}>{errors.image.message}</p>}
        </div>

        {/* Couleur */}
        <div className={styles.formGroup}>
          <label htmlFor="couleur">Couleur</label>
          <input id="couleur" className={styles.formInput} {...register("couleur")} />
          {errors.couleur && <p className={styles.errorMessage}>{errors.couleur.message}</p>}
        </div>

        {/* Prix */}
        <div className={styles.formGroup}>
          <label htmlFor="prix">Prix</label>
          <input id="prix" className={styles.formInput} {...register("prix")} />
          {errors.prix && <p className={styles.errorMessage}>{errors.prix.message}</p>}
        </div>

        {/* Saison de floraison */}
        <div className={styles.formGroup}>
          <label htmlFor="saisonFloraison">Saison de floraison</label>
          <input id="saisonFloraison" className={styles.formInput} {...register("saisonFloraison")} />
          {errors.saisonFloraison && <p className={styles.errorMessage}>{errors.saisonFloraison.message}</p>}
        </div>

        {/* Image une */}
        <div className={styles.formGroup}>
          <label htmlFor="imageUne">Image Une</label>
          <input id="imageUne" className={styles.formInput} {...register("imageUne")} />
          {errors.imageUne && <p className={styles.errorMessage}>{errors.imageUne.message}</p>}
        </div>

        {/* Image deux */}
        <div className={styles.formGroup}>
          <label htmlFor="imageDeux">Deuxième image</label>
          <input id="imageDeux" className={styles.formInput} {...register("imageDeux")} />
          {errors.imageDeux && <p className={styles.errorMessage}>{errors.imageDeux.message}</p>}
        </div>

        {/* Description */}
        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <textarea id="description" className={styles.formInput} {...register("description")} />
          {errors.description && <p className={styles.errorMessage}>{errors.description.message}</p>}
        </div>

        {/* Bouton de soumission */}
        <button className={styles.submitButton} type="submit">
          Mettre à jour la fleur
        </button>
      </form>
    </div>
  );
};

export default UpdateFlower;
