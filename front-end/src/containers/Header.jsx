import { NavLink } from "react-router-dom";
import Connect from "../containers/Connect";

function Header() {
  return (
    <>
      <nav className="main-nav">
        <NavLink className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src="./src/assets/img/argentBankLogo.webp"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <Connect />
      </nav>
    </>
  );
}
export default Header;
