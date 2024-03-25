import { NavLink } from "react-router-dom";

function ToSignIn() {
  //rajouter bouton sign-Out
  return (
    <NavLink className="main-nav-item" to="Sign-in">
      <i className="fa fa-user-circle"></i>
      Sign In
    </NavLink>
  );
}
export default ToSignIn;
