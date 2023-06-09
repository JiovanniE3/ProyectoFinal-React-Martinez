import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'


const Nav = ({titulo}) => {
  return (
    <header>

      <h1>{titulo}</h1>

      <nav>
        <ul>
          <li>Camisas</li>
          <li>Pantalones</li>
          <li>Zapatos</li>
          <li>Trajes</li>
        </ul>
      </nav>

      <CartWidget/>

    </header>
  )
}

export default Nav