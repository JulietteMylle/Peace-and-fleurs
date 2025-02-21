import "./Header.module.css";
import React from 'react';
import {Link } from 'react-router-dom';


const Header = () => {
    
    return ( 
    <> 
    <header className="header">
      <div className="logo">
        <h1>Ma Boutique de Fleurs</h1>
      </div>
      <div className="button-container">
        {/* Bouton Panier */}
        <button>Panier</button>

        {/* Bouton Ajout Fleur */}
        <Link to="/ajouter-fleur">
          <button>Ajouter une Fleur</button>
        </Link>
      </div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
    </header>
    </>
     
);
};

export default Header;