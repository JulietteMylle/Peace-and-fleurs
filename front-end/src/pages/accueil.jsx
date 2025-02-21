import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import fleurApi from "../services/fleursApi";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./Accueil.module.css";

const Accueil = () => {
  const navigate = useNavigate();
  const [flowers, setFlowers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFlowers, setFilteredFlowers] = useState([]);


  useEffect(() => {
    fleurApi.getFlowers()
      .then((data) => {
        console.log("Fleurs reçues :", data);
        setFlowers(data);
        setFilteredFlowers(data);
      })
      .catch((error) => console.error("Erreur lors de la récupération des fleurs", error));
  }, []); 

  const handleNavigate = (flowerId) => {
    navigate(`/${flowerId}`);
  };

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setFilteredFlowers(flowers); 
    } else {
      const filtered = flowers.filter(flower =>
        flower.nom && flower.nom.toLowerCase().includes(searchQuery.toLowerCase()) 
      );
      setFilteredFlowers(filtered);
    }
  };

  return (
    <div className={styles.homepage}>
      <Header />
      <h1>Bienvenue dans notre boutique de fleurs</h1>

      <div className={styles.flowerList}>
        {/* Barre de recherche */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Rechercher une fleur..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button onClick={handleSearch} className={styles.searchButton}>
            Rechercher
          </button>
        </div>

        <div className={styles.flowerList}>
          {filteredFlowers.length === 0 ? (
            <p>Aucune fleur trouvée...</p>
          ) : (
            filteredFlowers.map((flower) => (
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
      </div>

      <Footer />
    </div>
  );
};

export default Accueil;
