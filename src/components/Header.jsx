import "./header.css";
import { Link } from "react-router-dom";
import logoMarvel from "../assets/pictures/logo-marvel.png";

const Header = () => {
  return (
    <div className="header-container flux">
      <img src={logoMarvel} alt="logo-marvel" />
      <ul>
        <Link to="/">
          <li>Personnages</li>
        </Link>
        <Link to="/comics">
          <li>Comics</li>
        </Link>
        <li>Favoris</li>
      </ul>
    </div>
  );
};

export default Header;
