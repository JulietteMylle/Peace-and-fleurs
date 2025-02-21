import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Panier.module.css'; 

// Exemple d'un panier simple
const Panier = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const navigate = useNavigate();

  // Calculer le total du panier
  const calculateTotal = () => {
    return cart.reduce((total, flower) => total + flower.price, 0).toFixed(2);
  };

  // Supprimer un article du panier
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((flower) => flower._id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Mettez à jour le localStorage
  };

  // Vider le panier
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart'); // Vider le localStorage
  };

  return (
    <div className={styles.panier}>
      <h1>Mon Panier</h1>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div>
          <div className={styles.cartItems}>
            {cart.map((flower) => (
              <div key={flower._id} className={styles.cartItem}>
                <img src={flower.imageUrl} alt={flower.name} />
                <div>
                  <h3>{flower.name}</h3>
                  <p>{flower.description}</p>
                  <p>{flower.price}€</p>
                  <button onClick={() => removeFromCart(flower._id)}>Retirer</button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.cartSummary}>
            <h3>Total: {calculateTotal()}€</h3>
            <button onClick={clearCart}>Vider le panier</button>
            <button onClick={() => navigate('/checkout')}>Passer à la caisse</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Panier;