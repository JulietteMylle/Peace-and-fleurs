import styles from "./Header.module.css";

import { useNavigate } from 'react-router-dom';
import Bouton from "../components/Bouton/Boutons";


const Header = () => {
  const navigate = useNavigate();
  const handleAddFlower = () => {
    navigate(`/flowers`)
};

const handleCart = () => {
  navigate(`/cart`)
};
    
    return ( 
    <> 
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Ma Boutique de Fleurs</h1>
      </div>
      <div className={styles.buttonContainer}>
      <Bouton  label="Panier" onClick={handleCart} />

      <Bouton  label="Ajouter une fleur" onClick={handleAddFlower} />
      </div>

    </header>
    </>
     
);
};

export default Header;