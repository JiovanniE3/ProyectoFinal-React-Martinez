import Nav from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (

    <>
    <BrowserRouter>
    <Nav titulo={"Kingsman"}/>
    <Routes>
      <Route path="/" element={ <ItemListContainer/> } />
      <Route path="/categoria/:idCategoria" element={ <ItemListContainer/> }/>
      <Route path="/item/:idItem" element={ <ItemDetailContainer/>}/>
      <Route path="*" element={ <h2> ERROR </h2> }/>
    </Routes>
    </BrowserRouter>
    </>

  )
}

export default App
