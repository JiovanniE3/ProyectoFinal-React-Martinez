import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'


const Nav = ({titulo}) => {
  return (
    <header>
      <Link to="/"> <h1>{titulo}</h1></Link>
      <nav>
        <ul>
          <li><NavLink to="/categoria/1">Camisas</NavLink></li>
          <li><NavLink to="/categoria/2">Zapatos</NavLink></li>
          <li><NavLink to="/categoria/3">Pantalones</NavLink></li>
          <li><NavLink to="/categoria/4">Trajes</NavLink></li>
        </ul>
      </nav>

      <CartWidget/>

    </header>
  )
}

export default Nav