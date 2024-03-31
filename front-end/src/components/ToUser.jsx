import { current } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function ToUser() {
  function disconnect() {
    localStorage.removeItem("token");
  }
  const stateUserName = useSelector((state) => state.userName);
  let userName = stateUserName.userName; // Initialize userName as a string

  // Check if userName is an object
  if (typeof userName === "object") {
    // Assuming userName is an object with a userName property
    userName = userName.userName; // Access userName property
  }

  // Logging the state
  console.log(stateUserName);

  return (
    <>
      <NavLink className="main-nav-item" to="/User">
        <p>{userName}</p> <i className="fa fa-user-circle"></i>
      </NavLink>
      <NavLink onClick={disconnect} to={"/"}>
        <i class="fa-solid fa-power-off"></i>
      </NavLink>
    </>
  );
}

export default ToUser;
