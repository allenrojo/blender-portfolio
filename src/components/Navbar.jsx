import { NavLink } from "react-router-dom";
import './Navbar.css';  

function Navbar() {
  return (
    <div className="navbar-container">
        <nav className='navbar'>
            <NavLink to="/" className="nav-link"> home </NavLink>
            <NavLink to="/" className="nav-link"> about </NavLink>
            <NavLink to="/" className="nav-link"> contact </NavLink>
        </nav>
        <img className="logo" src="./logo.svg"></img>
    </div>

  )
}
export default Navbar