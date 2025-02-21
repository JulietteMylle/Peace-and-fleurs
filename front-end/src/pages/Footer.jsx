import styles from "./Footer.module.css";


const Footer =() => {
    return (

        <footer className={styles.footer}>
            <div className={styles.footerLeft}>
                <p className={styles.brandName}>Ma Boutique de Fleurs</p>
            </div>
            <div className={styles.footerRight}>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className={styles.faFacebookF}></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className={styles.faInstagram}></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className={styles.faTwitter}></i>
                </a>
            </div>
            <p>Product by Juliette Mylle, Hedi Mathlouthi, Satya Minguez et Lea Druffin</p>
        </footer>
    );
};

export default Footer;