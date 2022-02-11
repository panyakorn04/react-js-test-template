import React, { useContext } from "react";
import logo from "../../Assets/logo.png";
import { ModalContext } from "../../hooks";
import "./Navbar.css";

const Nav = () => {
  const { handleSignup, handleSignin } = useContext(ModalContext);
  return (
    <div className="navbar-header">
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="#">หน้าแรก</a>
          </li>
          <li>
            <a href="#">เกี่ยวกับเรา</a>
          </li>
          <li>
            <a href="#">ติดต่อเรา</a>
          </li>
        </ul>
        <div className="avatar">
          <div className="navbar-avatar">
            <img
              className="avatar"
              src="https://api.lorem.space/image/face?w=150&h=150"
              alt="logo"
            />
          </div>
          <button onClick={handleSignin}>Sign In</button>
          <button onClick={handleSignup}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
