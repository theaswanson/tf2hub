import { NavLink } from "react-router-dom";
import "./Navigation.scss";

function Navigation() {
  return (
    <div className="navigation">
      <div className="title">
        <span className="title">TF2 Hub</span>
        <img
          src="/img/logo_small.png"
          className="padding-left: 1rem; height: 50px"
        />
      </div>
      <div className="nav-items">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/cleantf2"}>CleanTF2</NavLink>
        <NavLink to={"/trashcan"}>Trashcan</NavLink>
        <a href="https://github.com/sponsors/theaswanson" target="_blank">
          Become a Sponsor
        </a>
      </div>
    </div>
  );
}

export default Navigation;
