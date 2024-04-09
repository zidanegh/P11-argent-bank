import ToSignIn from "../components/ToSign-In";
import ToUser from "../components/ToUser";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Connected() {
  const connected = useSelector((state) => state.infoUser.connect);
  useEffect(() => {
    if (connected) {
    } else {
      localStorage.removeItem("token");
    }
  }, [connected]);
  console.log(localStorage.getItem("token"));
  return (
    <div id="connectionHeader">{connected ? <ToUser /> : <ToSignIn />}</div>
  );
}

export default Connected;
