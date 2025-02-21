import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import fleursApi from "../../services/fleursApi";




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
    
    

    const handleClick = () => {
        fleursApi.deleteFlower(id).then(() => navigate("/"));
    };


    return(
        <>
        <h1>{flowerId.nom}</h1>
        <p>{flowerId.type}</p>
        <img src={`/images/${flowerId.image}`} alt={flowerId.nom} />
        <p>{flowerId.couleur}</p>
        <p>{flowerId.prix}</p>
        <p>{flowerId.saisonFloraison}</p>
        <img src={`/images/${flowerId.imageUne}`} alt={flowerId.name} />
        <img src={`/images/${flowerId.imageDeux}`} alt={flowerId.name} />
        <p>{flowerId.description}</p>
        </>
    )

}



export default DetailById