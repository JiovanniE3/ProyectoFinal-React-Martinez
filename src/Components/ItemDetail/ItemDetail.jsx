import './ItemDetail.css'

const ItemDetail = ({ id, title, description, price, pictureUrl }) => {
    return (
        <div className="ItemDetailStyle">
            <img src={pictureUrl} alt={title} />
            <div className='ItemDescription'>
                <h2>Nombre: {title} </h2>
                <h3>Precio: ${price}</h3>
                <h3>ID: {id}</h3>
                <h3>Descripcion: {description}</h3>
            </div>
        </div>
    )
}

export default ItemDetail