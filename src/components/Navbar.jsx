import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <NavLink to="/#home" className="nav-link">
          [home]
        </NavLink>
        <NavLink to="/#projects" className="nav-link">
          [projects]
        </NavLink>
        <NavLink to="/#contact" className="nav-link">
          [contact]
        </NavLink>
      </nav>
      <img className="logo" src="/logo.svg"></img>
    </div>
  );
}
export default Navbar;
