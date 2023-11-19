import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container flux">
      <img src="./src/assets/pictures/logo-marvel.png" alt="logo-marvel" />
      <ul>
        <Link to="/">
          <li>Personnages</li>
        </Link>
        <li>Comics</li>
        <li>Favoris</li>
      </ul>
    </div>
  );
};

export default Header;
