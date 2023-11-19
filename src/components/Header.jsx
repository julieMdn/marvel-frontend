import "./header.css";
import { Link } from "react-router-dom";
import logoMarvel from "../assets/pictures/logo-marvel.png";

const Header = () => {
  return (
    <div className="header-container flux">
      <img src={logoMarvel} alt="logo-marvel" />
      <ul>
        <Link className="link" to="/">
          <li>Personnages</li>
        </Link>
        <Link className="link" to="/comics">
          <li>Comics</li>
        </Link>
        <Link className="link" to="#">
          <li>Favoris</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
