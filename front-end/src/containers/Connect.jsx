import { NavLink } from "react-router-dom";
import ToSignIn from "../components/ToSign-In";
import ToUser from "../components/ToUser";
import { useSelector } from "react-redux";
import { connect } from "mongoose";

function Connected() {
  const connected = useSelector((state) => state.infoUser.connect);

  return (
    <div id="connectionHeader">{connected ? <ToUser /> : <ToSignIn />}</div>
  );
}

export default Connected;
