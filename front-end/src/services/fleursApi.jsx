const fleursApi = {

    getFlowers : () => {
        return fetch("LIEN ERS API")
        .then((response) => response.json())
    },
    getFlowerById : (id) => {
        return fetch(LIEN VERS API)
        .then((response) => response.json())
    },
    addFlower: (flower) => {
        return fetch('LIEN VERS API', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(flower)
        }).then((response) => response.json())
    },

    deleteFlower: (flower) => {
        return fetch('LIEN API', {
            method: 'DELETE',
            headers: { 'Content-Type' : 'application/json'}
        }).then(() => {
            console.log(`Fleur ${flower} supprimée`)
        }).catch((error) => {
            console.error('Erreur lors de la suppression :', error);
        })
    }
}


export default fleursApi