import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { infoUserSlice, userNameSlice } from "../store/store";
import { infoUser, login, changeUserName } from "../api";
import { useState } from "react";

function SignIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function launchEvent() {
    if ((await login(email, password)) === true) {
      await fetchUserInfo();
      navigate("/user");
    } else alert("votre email et/ou mot de passe sont erroner");
    if (!email || !password) {
      alert("veuiller rentrer un email et un mot de passe");
      return;
    }
  }

  async function fetchUserInfo() {
    const infoData = await infoUser();
    if (infoData) {
      const infoUser = dispatch(
        infoUserSlice.actions.addInfoUser({
          firstName: infoData.firstName,
          lastName: infoData.lastName,
          connect: true,
        })
      );
      const infoUserName = dispatch({
        type: "userName/addUserName",
        payload: infoData.userName,
      });
      console.log(infoUser);
    } else {
      console.log("Failed to fetch user info");
    }
  }

  changeUserName("ton oncle");

  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button
              type="button"
              className="sign-in-button"
              onClick={launchEvent}
            >
              Sign In
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default SignIn;
