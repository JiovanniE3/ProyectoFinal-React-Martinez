import { useState, useEffect } from "react";
import { getProductos, getProductosPorCategoria } from "../../mock";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css'
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    const funcion = idCategoria ? getProductosPorCategoria : getProductos

    funcion(idCategoria)
      .then(res => setProductos(res))

  }, [idCategoria])
  return (
    <>
      <h2 className="greeting"> Bienvenidos a Kingsman </h2>
      <ItemList productos={productos} />
    </>


  )
}

export default ItemListContainer