import styles from "../Bouton/Bouton.module.css"

const Bouton = ({ onClick, label}) => {
    return (
        <div >
            <button className={styles["btn-grad"]} onClick={onClick}>{label}</button>
        </div>
    )
}
export default Bouton