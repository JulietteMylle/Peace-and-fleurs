import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import fleurApi from "../services/fleursApi";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./Accueil.module.css";

const Accueil = () => {
  const navigate = useNavigate();
  const [flowers, setFlowers] = useState([]);
<<<<<<< Updated upstream
=======
  const [searchQuery, setSearchQuery] = useState(""); 
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
=======
  useEffect(() => {
    if (searchQuery.trim() === "") {
      fleurApi.getFlowers().then((data) => setFlowers(data)); // Charger toutes les fleurs si la recherche est vide
    } else {
      fleurApi.searchFlowers(searchQuery) // Appeler la nouvelle route de recherche
        .then((data) => setFlowers(data))
        .catch((error) => console.error("Erreur de recherche :", error));
    }
  }, [searchQuery]);

  // Filtrage des fleurs selon la recherche
  const filteredFlowers = flowers.filter(flower =>
    flower.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

>>>>>>> Stashed changes
  return (
    <div className={styles.homepage}>
      <Header />
      <h1>Bienvenue dans notre boutique de fleurs</h1>
<<<<<<< Updated upstream
      <div className={styles.flowerList}>
        {flowers.length === 0 ? (
          <p>Chargement des fleurs...</p>
        ) : (
          flowers.map((flower) => (
=======
      {/* Barre de recherche */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Rechercher une fleur..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Met à jour la recherche
          className="search-input"
        />
      </div>
      <div className={styles.flowerList}>
        {filteredFlowers.length === 0 ? (
          <p>Chargement des fleurs...</p>
        ) : (
          filteredFlowers.map((flower) => (
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
export default Accueil;
=======
export default Accueil;
>>>>>>> Stashed changes
