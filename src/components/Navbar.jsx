import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <NavLink to="/#home" className="nav-link">
          <span className="text-wrapper">
            <span className="text-original">[HOME]</span>
            <span className="text-duplicate">[HOME]</span>
          </span>
        </NavLink>
        <NavLink to="/#projects" className="nav-link">
          <span className="text-wrapper">
            <span className="text-original">[PROJECTS]</span>
            <span className="text-duplicate">[PROJECTS]</span>
          </span>
        </NavLink>
        <NavLink to="/#contact" className="nav-link">
          <span className="text-wrapper">
            <span className="text-original">[CONTACT]</span>
            <span className="text-duplicate">[CONTACT]</span>
          </span>
        </NavLink>
      </nav>
      <img className="logo" src="/logo.svg"></img>
    </div>
  );
}
export default Navbar;
