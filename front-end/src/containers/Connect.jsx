import { NavLink } from "react-router-dom";
import ToSignIn from "../components/ToSign-In";
import ToUser from "../components/ToUser";

function Connected() {
  //fonction pour vérifier si on a le token pour soit rediriger vers le user ou coter sign-in
  return (
    <div>
      <ToSignIn />
    </div>
  );
}

export default Connected;
