const fleursApi = {

    getFlowers : () => {
        return fetch("http://localhost:8080/")
        .then((response) => response.json())
    },
    getFlowerById : (id) => {
        return fetch(`http://localhost:8080/${id}`)

        .then((response) => response.json())
    },








    addFlower: (flower) => {
        return fetch('http://localhost:8080/flowers', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(flower)
        }).then((response) => response.json())
    },

    // deleteFlower: (flower) => {
    //     return fetch('LIEN API', {
    //         method: 'DELETE',
    //         headers: { 'Content-Type' : 'application/json'}
    //     }).then(() => {
    //         console.log(`Fleur ${flower} supprimée`)
    //     }).catch((error) => {
    //         console.error('Erreur lors de la suppression :', error);
    //     })
    // }
}


export default fleursApi