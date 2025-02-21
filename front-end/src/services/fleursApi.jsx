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
    updateFlower: (id, flower) => {
        return fetch(`http://localhost:8080/update/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(flower),
        }).then((response) => response.json());
      },

    deleteFlower: (id, ) => {
        return fetch(`http://localhost:8080/delete/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type' : 'application/json'}
        }).then(() => {
            console.log(`Fleur ${id} supprimée`)
        }).catch((error) => {
            console.error('Erreur lors de la suppression :', error);
        })
    },
    updatePanier: (id, flower) => {
        return fetch(`http://localhost:8080/cart/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(flower),
        }).then((response) => response.json());
      },

}


export default fleursApi