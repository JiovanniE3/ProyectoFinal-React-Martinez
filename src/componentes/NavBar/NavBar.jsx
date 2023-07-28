import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <h1>Kingsman</h1>
      </Link>

      <nav>
        <ul>
        <li>
            <NavLink className="miBtnNav" to="/categoria/1"> Camisa </NavLink>
          </li>
          <li>
            <NavLink className="miBtnNav" to="/categoria/2"> Zapatos </NavLink>
          </li>

          <li>
            <NavLink className="miBtnNav" to="/categoria/3"> Pantalones </NavLink>
          </li>

          <li>
            <NavLink className="miBtnNav" to="/categoria/4"> Trajes </NavLink>
          </li>

        </ul>
      </nav>

      <CartWidget />
    </header>
  )
}

export default NavBar