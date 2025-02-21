import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import fleursApi from "../../services/fleursApi";
import Bouton from "../../components/Bouton/Boutons";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
import styles from "../Detail/Detail.module.css"




const DetailById = () => {
    const [flowerId, setFlowerId] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        fleursApi.getFlowerById(id)
            .then((response) => {
                console.log(response.data); 
                setFlowerId(response.data);
            })
            .catch((err) => console.error("Erreur de récupération de la fleur:", err));
    }, [id]);
    
    

    const handleEditClick = () => {
        navigate(`/update/${id}`)
    };
    const handleDelete = () => {
        fleursApi.deleteFlower(id)
          .then(() => {
            console.log(`Fleur ${id} supprimée`);
            navigate("/");
          })
          .catch(error => console.error("Erreur lors de la suppression :", error));
      };
      const handleHome = () => {
        navigate(`/`)
    };
    const handleAjouterPanier =(FlowerId) => {
        console.log("Données soumises :", flowerId);
        fleursApi.updatePanier(FlowerId)
        .catch((error) => console.error("Erreur", error));
        

    }

    return(
        <>
        <Header />
        <h1 className={styles.titre}>{flowerId.nom}</h1>
        <p className={styles.sousTitre}>{flowerId.type}</p>
        <Bouton  label="Retourner à l'accueil" onClick={handleHome} />
        <img className={styles.imagePrincipale} src={`/images/${flowerId.image}`} alt={flowerId.nom} />
        <div >
            <p className={styles.flowerDetails}>Couleur : {flowerId.couleur}</p>
            <p className={styles.flowerDetails}>Prix : {flowerId.prix}</p>
            <p className={styles.flowerDetails}>Saison de floraison : {flowerId.saisonFloraison}</p>
            <Bouton  label="Ajouter au panier" onClick={handleAjouterPanier}/>
        </div>

        <div className={styles.flowerImages}>
            <img src={`/images/${flowerId.imageUne}`} alt={flowerId.nom} />
            <img src={`/images/${flowerId.imageDeux}`} alt={flowerId.nom} />
        </div>
        <p className={styles.flowerDescription}>{flowerId.description}</p>
        <div className={styles.boutonsContainer}>
             <Bouton  label="Supprimer cette fleur" onClick={handleDelete}/>
             <Bouton  label="Modifier cette fleur" onClick={handleEditClick} />
        </div>
        <Footer />
        </>
    )

}



export default DetailById