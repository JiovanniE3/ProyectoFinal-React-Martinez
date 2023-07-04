const productos = [
    { id: "1", title: "Camisa Versace", description: "Camisa Versace Verano 2023", price: 51500, pictureUrl: "/img/camisa1.avif", idCat: "1" },
    { id: "2", title: "Camisa Versace", description: "Camisa Versace Verano 2023", price: 65000, pictureUrl: "/img/camisa2.avif", idCat: "1" },
    { id: "3", title: "Camisa Versace", description: "Camisa Versace Verano 2023", price: 45600, pictureUrl: "/img/camisa3.avif", idCat: "1" },
    { id: "4", title: "Zapatos Versace", description: "Camisa Versace Verano 2023", price: 23500, pictureUrl: "/img/zapatos1.avif", idCat: "2" },
    { id: "5", title: "Zapatos Versace", description: "Camisa Versace Verano 2023", price: 21500, pictureUrl: "/img/zapatos2.avif", idCat: "2" },
    { id: "6", title: "Zapatos Versace", description: "Camisa Versace Verano 2023", price: 19500, pictureUrl: "/img/zapatos3.avif", idCat: "2" },
    { id: "7", title: "Pantalones Versace", description: "Pantalones Versace Verano 2023", price: 35500, pictureUrl: "/img/pantalon1.avif", idCat: "3" },
    { id: "8", title: "Pantalones Versace", description: "Pantalones Versace Verano 2023", price: 40500, pictureUrl: "/img/pantalon2.avif", idCat: "3" },
    { id: "9", title: "Pantalones Versace", description: "Pantalones Versace Verano 2023", price: 32500, pictureUrl: "/img/pantalon3.avif", idCat: "3" },
    { id: "10", title: "Traje Gucci", description: "Traje Gucci Verano 2023", price: 100500, pictureUrl: "/img/traje1.avif", idCat: "4" },
    { id: "11", title: "Traje Gucci", description: "Traje Gucci Verano 2023", price: 95500, pictureUrl: "/img/traje2.avif", idCat: "4" },
    { id: "12", title: "Traje Gucci", description: "Traje Gucci Verano 2023", price: 89000, pictureUrl: "/img/traje3.avif", idCat: "4" }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })
}


export const getUnProducto = (id) => {

    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    
    return new Promise ( resolve => {

        setTimeout( () => {

            const productosCategoria = productos.filter (prod => prod.idCat === idCategoria);
            resolve (productosCategoria);

        }, 100)
    })
}