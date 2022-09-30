import logo from '../assets/img/Biblioteca.png'
import '../assets/style/header.css'

function Header() {
  return (
    <header>
        <img src={logo}></img>
        <h1>Biblioteca Escolar</h1>
    </header>
  );
}
export default Header;
