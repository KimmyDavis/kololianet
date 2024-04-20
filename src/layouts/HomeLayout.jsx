import { NavLink, Outlet } from "react-router-dom";
const HomeLayout = () => {
  return (
    <>
      <div className="our-services">
        <h2>Our Services</h2>
        <nav>
          <NavLink to="/">web design</NavLink>
          <NavLink to="graphics">graphics design</NavLink>
          <NavLink to="printing">printing services</NavLink>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default HomeLayout;
