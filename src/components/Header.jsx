import "./header.css";
const Header = () => {
  return (
    <div className="header-container flux">
      <img src="./src/assets/pictures/logo-marvel.png" alt="logo-marvel" />
      <ul>
        <li>Personnages</li>
        <li>Comics</li>
        <li>Favoris</li>
      </ul>
    </div>
  );
};

export default Header;
