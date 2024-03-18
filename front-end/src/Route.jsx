import { createBrowserRouter } from "react-router-dom";
import Accueil from "./pages/Aaccueil";
import SignIn from "./pages/Sign-In";
import User from "./pages/User";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Accueil /> },
      { path: "Sign-in", element: <SignIn /> },
      { path: "User", element: <User /> },
    ],
  },
]);

export default router;
