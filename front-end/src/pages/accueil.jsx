import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import fleurApi from "../services/fleursApi";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./Accueil.module.css";

const Accueil = () => {
  const navigate = useNavigate();
  const [flowers, setFlowers] = useState([]);

  // Récupérer toutes les fleurs au chargement de la page
  useEffect(() => {
    fleurApi.getFlowers()
      .then((data) => {
        console.log(data);
        
        setFlowers(data)})
      .catch((error) => console.error("Erreur lors de la récupération des fleurs", error));
  }, []);

  const handleNavigate = (flowerId) => {
    navigate(`/${flowerId}`);
  };

  return (
    <div className={styles.homepage}>
      <Header />
      <h1>Bienvenue dans notre boutique de fleurs</h1>
      <div className={styles.flowerList}>
        {flowers.length === 0 ? (
          <p>Chargement des fleurs...</p>
        ) : (
          flowers.map((flower) => (
            <div key={flower._id} className={styles.flowerCard}>
              <img className={styles.imagePrincipale} src={`/images/${flower.image}`} alt={flower.nom} />
              <h3>{flower.nom}</h3>
              <p>{flower.description}</p>
              <p>{flower.prix}</p>
              <button onClick={() => handleNavigate(flower._id)}>Voir les détails</button>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Accueil;
