import { NavLink } from "react-router-dom";
import ToSignIn from "../components/ToSign-In";
import ToUser from "../components/ToUser";
import { useSelector } from "react-redux";
import { connect } from "mongoose";

function Connected() {
  //fonction pour vérifier si on a le token pour soit rediriger vers le user ou coter sign-in
  const connected = useSelector((state) => state.infoUser.connect);
  console.log(connected);
  return (
    <div id="connectionHeader">{connected ? <ToUser /> : <ToSignIn />}</div>
  );
}

export default Connected;
