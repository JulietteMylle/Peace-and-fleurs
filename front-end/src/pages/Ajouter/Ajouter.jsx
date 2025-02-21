import { useForm } from "react-hook-form";
import fleursApi from "../../services/fleursApi";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./Ajouter.module.css"; // Importation du module CSS

// Définition du schéma de validation
const schema = yup
  .object({
    nom: yup.string().required("Le nom est obligatoire"),
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
    <div className={styles.formContainer}>
      <h1 className={styles.formTitle}>Ajouter une fleur</h1>
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
          <label htmlFor="imageUne">Image principale</label>
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
          Ajouter la fleur
        </button>
      </form>
    </div>
  );
};

export default AddFlower;
