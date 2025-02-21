import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import fleurApi from "../services/fleursApi";


const Accueil = () => {
    const navigate = useNavigate();
  
    // Fonction de navigation vers la page de détails
    const handleNavigate = () => {
      navigate("/Detail");
    };
const homePage = () => {
    const [flowers, setFlowers] = useState();
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        PostsApi.getPostsById(id).then((data) => setFlowers(data));

    }, [id]);
}

return (
    <div className="homepage">
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
              <button>Voir les détails</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
    };
    
    export default Accueil;
    