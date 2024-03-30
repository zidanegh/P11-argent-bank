import { useState } from "react";
import { useSelector } from "react-redux";
import WelcomeUser from "../components/WelcomeUser";
import Editeur from "../components/Editeur";

function EditName() {
  const infoUser = useSelector(
    (state) => state.infoUser[state.infoUser.length - 1]
  );
  const [edit, setEdit] = useState(false);
  const switchToEditUserName = () => {
    setEdit(true);
  };
  const switchToWelcome = () => {
    setEdit(false);
  };
  //put pour changer le username au clique du button
  //state pour changer selon le user rentrer
  return (
    <div className="header">
      {!edit ? (
        <WelcomeUser info={infoUser} switcher={switchToEditUserName} />
      ) : (
        <Editeur switchToWelcome={switchToWelcome} />
      )}
    </div>
  );
}

export default EditName;
