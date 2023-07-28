import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css'

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <div className="noItems">
                <h2> No hay productos en el carrito. </h2>
                <Link className="miBtnCart" to="/"> Ver Productos </Link>
            </div>
        )
    }

    return (
        <div>
            {carrito.map(producto => <CartItem key={producto.id}  {...producto} />)}
            <h3>Total: $ {total} </h3>
            <h3>Cantidad total: {cantidadTotal} </h3>
            <button className="miBtnCart" onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
            <Link to="/checkout"> <p className="miBtnCart" >Finalizar Compra</p> </Link>
        </div>
    )
}

export default Cart