import "react";
import { Link } from "react-router-dom";
import "./Header.css";
import vre from "../assets/vre.png";



function Header() {
  return (
    <header className="navbar" >
      <div className="logo-container">
        <img src={vre} alt="Vre" className="vre" />
      </div>
      <nav className="nav-links" >
        <Link to="/" className="custom-text">Home</Link>
        <Link to="/gameinfo" className="custom-text">GameInfo</Link>
        <Link to="/karakter" className="custom-text">Karakter</Link>
        <Link to="/contact"  className="custom-text">ContactUs</Link>
      </nav>
    </header>
  );
}

export default Header;
