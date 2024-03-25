import { NavLink } from "react-router-dom";

function SignIn() {
  //bloquer le button tant que le user n'a pas rentrer tout les champs et tant que les champs ne sont pas bon aussi puis rediriger
  fetch(http:localhost:3001/api-docs, {
    method: "GET" // default, so we can ignore
})
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
              <button class="sign-in-button">Sign In</button>
            </NavLink>
          </form>
        </section>
      </main>
    </>
  );
}

export default SignIn;
