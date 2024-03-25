import { NavLink } from "react-router-dom";

function ToUser() {
  //après avoir vérifier le token vérifier qui est le user conecter
  return (
    <NavLink className="main-nav-item" to="User">
      <p>Username of person Connected</p>
    </NavLink>
  );
}

export default ToUser;
