import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const RootLayout = () => {
  const [cls, setcls] = useState("inactive");
  function toggleCls() {
    window.scrollTo(0, 0);
    if (cls) {
      setcls("");
    } else {
      setcls("inactive");
    }
  }
  return (
    <div className="container ">
      <header>
        <div className="logo">
          <img src="/knet.png" alt="" srcset="" />
        </div>
        <h1>kololianet</h1>
        <nav className={cls}>
          <NavLink onClick={toggleCls} to="/" className="btn">
            Home
          </NavLink>
          <NavLink onClick={toggleCls} to="about" className="btn">
            About Us
          </NavLink>
          <NavLink onClick={toggleCls} to="help" className="btn">
            Help
          </NavLink>
        </nav>
        <div onClick={toggleCls} className={"toggle-btn " + cls} />
      </header>
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
