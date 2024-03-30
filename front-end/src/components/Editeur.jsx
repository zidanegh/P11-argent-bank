import { useDispatch, useSelector } from "react-redux";
import { userNameSlice } from "../store/store";
import { useState } from "react";

function Editeur({ switchToWelcome }) {
  const userState = useSelector(
    (state) => state.infoUser[state.infoUser.length - 1]
  );
  const userNameState = useSelector(
    (state) => state.userName[state.userName.length - 1]
  );

  const [newUserName, setNewUserName] = useState(userState);
  const handleUserNameChange = (e) => {
    const { value } = e.target;
    setNewUserName(value); // Update local state
  };
  const dispatch = useDispatch();
  return (
    <>
      <h2>Edit user info</h2>
      <div id="wrapAllInputEditUsername">
        <div className="wrapInput">
          <label htmlFor="userName">User name:</label>
          <input type="text" id="userName" onChange={handleUserNameChange} />
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
        <button
          onClick={() => {
            dispatch(
              userNameSlice.actions.addUserName({
                userName: newUserName,
              })
            );
            switchToWelcome();
            console.log(userNameState);
          }}
        >
          Save
        </button>
        <button onClick={switchToWelcome}>Cancel</button>
      </div>
    </>
  );
}
export default Editeur;
