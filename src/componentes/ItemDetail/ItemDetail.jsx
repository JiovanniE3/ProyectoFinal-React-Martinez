import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css'


import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';



const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);


  const { agregarProducto } = useContext(CarritoContext);



  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  }

  return (
    <div className='ItemDetailStyle'>
      <div className='description'>
        <div>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>ID: {id} </h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime numquam dolore natus ipsa molestiae facere assumenda. Voluptas omnis magni saepe, consequatur atque dolorem eius ipsum est quis porro neque quibusdam!</p>
        </div>
        {
        agregarCantidad > 0 ? (<Link className='miBtnAdd' to="/cart"> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      }
      </div>
      <img src={img} alt={nombre} />



    </div>
  )
}

export default ItemDetail