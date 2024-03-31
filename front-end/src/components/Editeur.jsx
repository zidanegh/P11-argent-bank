import { useDispatch, useSelector } from "react-redux";
import { userNameSlice } from "../store/store";
import { useState } from "react";
import { changeUserName } from "../api";

function Editeur({ switchToWelcome }) {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.infoUser);
  const stateUserName = useSelector((state) => state.userName.userName);

  // Local state to store the new user name
  const [newUserName, setNewUserName] = useState("");

  // Update local state when user input changes
  const handleUserNameChange = (e) => {
    const { value } = e.target;
    setNewUserName(value); // Update local state
  };

  // Handler for "Save" button click
  const handleClick = async () => {
    // Reset user info in the infoUserSlice
    dispatch(userNameSlice.actions.reset());

    // Dispatch the new user name to the userNameSlice
    dispatch(userNameSlice.actions.addUserName({ userName: newUserName }));

    // Reset the local state for user name input

    // Assuming switchToWelcome is a function to switch to welcome screen
    switchToWelcome();
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
          <input type="text" id="firstName" placeholder={userState.firstName} />
        </div>
        <div className="wrapInput">
          <label htmlFor="lastName">Last name:</label>
          <input type="text" id="lastName" placeholder={userState.lastName} />
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
