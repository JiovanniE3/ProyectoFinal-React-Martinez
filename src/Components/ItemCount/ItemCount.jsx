import { useState } from "react"

const ItemCount = () => {

    const [contador, setContador] = useState(1)

    const incrementar = () => {
        if(contador<10){
            setContador(contador + 1);
        }
    }
    const decrementar = () => {
        if(contador > 1){
            setContador(contador - 1);
        }
    }

  return (
    <>
    <p> {contador} </p>
    <button onClick={incrementar}>+</button>
    <button onClick={decrementar}>-</button>
    </>
  )
}

export default ItemCount