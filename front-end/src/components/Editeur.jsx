import { useDispatch, useSelector } from "react-redux";
import { userNameSlice } from "../store/store";
import { useState } from "react";
import { changeUserName } from "../api";

function Editeur({ switchToWelcome }) {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.infoUser);
  const [newUserName, setNewUserName] = useState("");
  const handleUserNameChange = (e) => {
    const { value } = e.target;
    setNewUserName(value);
  };
  const handleClick = async () => {
    dispatch(userNameSlice.actions.reset());
    dispatch(userNameSlice.actions.addUserName(newUserName));
    switchToWelcome();
    changeUserName(newUserName);
    console.log(changeUserName(newUserName));
  };

  return (
    <>
      <h2>Edit user info</h2>
      <div id="wrapAllInputEditUsername">
        <div className="wrapInput">
          <label htmlFor="userName">User name:</label>
          <input
            type="text"
            id="userName"
            value={newUserName}
            onChange={handleUserNameChange}
          />
        </div>
        <div className="wrapInput">
          <label htmlFor="firstName">First name:</label>
          <input
            type="text"
            disabled={true}
            id="firstName"
            placeholder={userState.firstName}
          />
        </div>
        <div className="wrapInput">
          <label htmlFor="lastName">Last name:</label>
          <input
            type="text"
            disabled={true}
            id="lastName"
            placeholder={userState.lastName}
          />
        </div>
      </div>
      <div id="wrapBtnEditUsername">
        <button onClick={handleClick}>Save</button>
        <button onClick={switchToWelcome}>Cancel</button>
      </div>
    </>
  );
}
export default Editeur;
