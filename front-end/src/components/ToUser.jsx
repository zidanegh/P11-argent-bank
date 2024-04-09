import { current } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

function ToUser() {
  const navigate = useNavigate();
  function disconnect() {
    navigate("/");
    window.location.reload();
    localStorage.removeItem("token");
  }
  const stateUserName = useSelector((state) => state.infoUser);
  return (
    <>
      <NavLink className="main-nav-item" to="/User">
        <p>{stateUserName.userName}</p> <i className="fa fa-user-circle"></i>
      </NavLink>
      <NavLink to="/" onClick={disconnect}>
        <i className="fa-solid fa-power-off"></i>
      </NavLink>
    </>
  );
}

export default ToUser;
