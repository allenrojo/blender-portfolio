import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <NavLink to="/#home" className="nav-link">
          [HOME]
        </NavLink>
        <NavLink to="/#projects" className="nav-link">
          [PROJECTS]
        </NavLink>
        <NavLink to="/#contact" className="nav-link">
          [CONTACT]
        </NavLink>
      </nav>
      <img className="logo" src="/logo.svg"></img>
    </div>
  );
}
export default Navbar;
