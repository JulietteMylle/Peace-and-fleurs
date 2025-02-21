import styles from "./Footer.css";
import React from 'react';

const Footer =() => {
    return (

        <footer className="footer">
            <div className="footer-left">
                <p className="brand-name">Ma Boutique de Fleurs</p>
            </div>
            <div className="footer-right">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
            </div>
            <p>Product by Juliette Mylle, Hedi Mathlouthi, Satya Minguez et Lea Druffin</p>
        </footer>
    );
};

export default Footer;