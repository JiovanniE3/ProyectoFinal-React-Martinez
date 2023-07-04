import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, title, description, price, pictureUrl}) => {
  return (
    <div className='cardProducto'>
        <img className='imgProducto' src={pictureUrl} alt={title} />
        <h4>Nombre: {title} </h4>
        <p>Precio: ${price} </p>
        <Link className='btnProducto' to={`/item/${id}`}> Ver Detalles </Link>
    </div>
  )
}

export default Item