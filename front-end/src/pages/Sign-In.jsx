import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function SignIn() {
  const BASE_URL = "http://localhost:3001/api/v1";
  const [tokenData, setTokenData] = useState("");

  const tokenn =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjQ1MzE1OGZiYzE2MWM2NDcxYmQwZiIsImlhdCI6MTcxMTYzMjU2NiwiZXhwIjoxNzExNzE4OTY2fQ.DoH8kIDOwHqGXYq7AwIiVROYuAUjxyKiZ--60ba0r4A";
  //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjQ1MzE1OGZiYzE2MWM2NDcxYmQxMCIsImlhdCI6MTcxMTYzMjQ5MCwiZXhwIjoxNzExNzE4ODkwfQ.G-TQFSVkhYIxor4QU8tmmFTDNcnRyvHnDqgmO8E5Jco";
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
        Authorization: "Bearer " + tokenn,
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    setTokenData(data);
    console.log(data.body);
  }
  async function loginii() {
    const response = await fetch(`${BASE_URL}/user/profile`, {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + tokenn,
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        userName: "tourelle",
      }),
    });
    const data = await response.json();
    setTokenData(data);
    console.log(data);
  }
  const infoUser = useSelector((state) => console.log(state));
  //bloquer le button tant que le user n'a pas rentrer tout les champs et tant que les champs ne sont pas bon aussi puis rediriger
  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <NavLink to="/User">
              <button className="sign-in-button" onClick={logini}>
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
