import Header from "../containers/Header";
import Footer from "../containers/Footer";
import { Outlet } from "react-router-dom";
function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export default Root;
