import { useState } from "react";
import './ItemCount.css'



const ItemCount = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);


    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }


    return (
        <>
            <div className="countContainer">

                <div className="countStyle">
                    <button className="miBtnDetail" onClick={decrementar}> - </button>
                    <p className="count"> {contador} </p>
                    <button className="miBtnDetail" onClick={incrementar}> + </button>
                </div>

                <button className="miBtnAdd" onClick={() => funcionAgregar(contador)}> Agregar al Carrito </button>
            </div>
        </>
    )
}



export default ItemCount