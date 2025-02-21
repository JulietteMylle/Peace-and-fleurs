import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import fleurApi from "../services/fleursApi";
import Header from "./Header";
import Footer from "./Footer";


const Accueil = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [flowers, setFlowers] = useState([]);
  useEffect(() => {
  fleurApi.getFlowers(id).then((data) => setFlowers(data)).catch((error) =>console.error( "Erreur lors de la récupération des fleurs", error));

}, [id]);

const handleNavigate =(id) => {
navigate('/Detail/${id}')
};


return (
    <div className="homepage">
       <Header/>
      <h1>Bienvenue dans notre boutique de fleurs</h1>
      <div className="flower-list">
        {flowers.length === 0 ? (
          <p>Chargement des fleurs...</p>
        ) : (
          flowers.map((flower) => (
            <div key={flower._id} className="flower-card">
              <img src={flower.imageUrl} alt={flower.name} />
              <h3>{flower.name}</h3>
              <p>{flower.description}</p>
              <p>{flower.price}€</p>
              <button onClick={() => handleNavigate(flower._id)}>Voir les détails</button>
            </div>
          ))
        )}
      </div>
      <Footer/>
    </div>
  );
    };
    
    export default Accueil;
    