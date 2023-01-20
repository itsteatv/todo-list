import "./Header.css";
import todoLogo from "../../assets/todoLogo.svg"

function Header() {
  return (
      <header className="header">
    <img className="image" src={todoLogo}></img>
  </header>
  )
}

export default Header;
