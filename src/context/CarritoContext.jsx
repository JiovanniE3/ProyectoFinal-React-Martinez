//1) Voy a importar el hook useState y createContext que me permite crear un contexto que almacenará toda la lógica de mi carrillo de compras. 

import { useState, createContext } from "react";

//2) Creamos un nuevo contexto: 

export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
})

//El valor inicial es un objeto con la propiedad "carrito", "total" y "cantidadTotal";

export const CarritoProvider = ({children}) => {
    //3) Creamos un estado local llamado "carrito" con useState. 

    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    //4) Agregamos algunos métodos para manipular el carrito de compras.

    //Provisoriamente verifico por consola: 
    //console.log(carrito);


    //Función para agregar productos al carrito evitando duplicados: 

    const agregarProducto = (item, cantidad) => {
        const productoExistente = carrito.find(prod => prod.item.id === item.id);

        if(!productoExistente) {
            setCarrito( prev => [...prev, {item, cantidad}]);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
            //La sintaxis: prev => [...prev, {item, cantidad}] Se utiliza para crear un nuevo array a partir del estado anterior del carrito (prev) y agregar un nuevo objeto que representa el nuevo producto. 
        } else {
            const carritoActualizado = carrito.map( prod => {
                if(prod.item.id === item.id) {
                    return {...prod, cantidad:prod.cantidad + cantidad};
                } else {
                    return prod;
                }
            });
            setCarrito(carritoActualizado);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
        }
    }



    //Función para eliminar producto: 

    const eliminarProducto = (id) => {
        const productoEliminado = carrito.find(prod => prod.item.id === id);
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);

        setCarrito(carritoActualizado);
        setCantidadTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));
    }

    //Función para vaciar el carrito: 

    const vaciarCarrito = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0);
    }

    return (
        <CarritoContext.Provider value={{carrito, agregarProducto, eliminarProducto, vaciarCarrito, total, cantidadTotal}}>
            {children}
        </CarritoContext.Provider>
    )

    //En el value enviamos el valor actual del carrito y los métodos a los componentes de mi aplicación que lo necesiten.

    //Children, usamos esta propiedad especial para representar a todos aquellos componentes que puedan necesitar el carrito y sus métodos. 

}