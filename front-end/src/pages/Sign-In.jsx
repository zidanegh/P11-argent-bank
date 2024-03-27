import { useState } from "react";
import { NavLink } from "react-router-dom";

function SignIn() {
  const BASE_URL = "http://localhost:3001/api/v1";
  const [tokenData, setTokenData] = useState("");

  async function login() {
    const response = await fetch(`${BASE_URL}/user/login`, {
      method: "POST",
      body: JSON.stringify({
        email: "tony@stark.com",
        password: "password123",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    await data;
    setTokenData(data.body.token);
    console.log(data.body.token);
  }
  async function logini() {
    const response = await fetch(`${BASE_URL}/user/profile`, {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjQ1MzE1OGZiYzE2MWM2NDcxYmQwZiIsImlhdCI6MTcxMTU2MDM4MCwiZXhwIjoxNzExNjQ2NzgwfQ.0Pa8j48xDIQnOV4Mv8qOSZSVRpB0JEsnlcL2TDRW8Ss",
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    setTokenData(data);
    console.log(data.body.userName);
  }
  async function loginii() {
    const response = await fetch(`${BASE_URL}/user/profile`, {
      method: "PUT",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjQ1MzE1OGZiYzE2MWM2NDcxYmQwZiIsImlhdCI6MTcxMTU2MDM4MCwiZXhwIjoxNzExNjQ2NzgwfQ.0Pa8j48xDIQnOV4Mv8qOSZSVRpB0JEsnlcL2TDRW8Ss",
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        userName: "poule",
      }),
    });
    const data = await response.json();
    setTokenData(data);
    console.log(data);
  }
  //bloquer le button tant que le user n'a pas rentrer tout les champs et tant que les champs ne sont pas bon aussi puis rediriger
  return (
    <>
      <main class="main bg-dark">
        <section class="sign-in-content">
          <i class="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div class="input-wrapper">
              <label for="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div class="input-wrapper">
              <label for="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div class="input-remember">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            <NavLink to="/User">
              <button class="sign-in-button" onClick={logini}>
                Sign In
              </button>
            </NavLink>
          </form>
        </section>
      </main>
    </>
  );
}

export default SignIn;
