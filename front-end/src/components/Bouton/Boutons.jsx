const Bouton = ({ onClick, label}) => {
    return (
        <div id='hover_button' className="buttonBox">
            <button onClick={onClick}>{label}</button>
        </div>
    )
}
export default Bouton