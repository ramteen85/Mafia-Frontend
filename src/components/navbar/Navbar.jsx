import React from "react";
import { FaBell, FaEnvelope } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [
    state
    // setState
  ] = React.useState({
    logo: "https://placehold.jp/400x100.png",
    user: {
      name: "User",
      pic: "https://placehold.jp/50x50.png"
    },
    messages: {},
    notifications: {}
  });

  return (
    <div className="navbar">
      <div className="logo-wrapper">
        <img src={state.logo} alt="" />{" "}
      </div>
      <div className="navbar-right">
        <ul className="menu-list">
          <li className="menu-item">
            <FaEnvelope size={25} />
            <ul className="submenu-list notif">
              <li className="submenu-item">
                <div className="player">
                  <div className="player-icon">
                    <img src={state.user.pic} alt="" />
                  </div>
                  <div className="player-message">
                    <p>Dave has sent you a message!</p>
                    <div className="button-container">
                      <button className="btn cancel">Cancel</button>
                      <button className="btn accept">Read</button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <FaBell size={25} />
            <ul className="submenu-list notif">
              <li className="submenu-item">
                <div className="player">
                  <div className="player-icon">
                    <img src={state.user.pic} alt="" />
                  </div>
                  <div className="player-message">
                    <p>Frank has invited you to a game!</p>
                    <div className="button-container">
                      <button className="btn cancel">Decline</button>
                      <button className="btn accept">Accept</button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <div className="profile-wrapper">
              <img src={state.user.pic} alt="" />
              {state.name}
            </div>
            <ul className="submenu-list profile-shift">
              <li className="submenu-item">Profile</li>
              <li className="submenu-item">Game</li>
              <li className="submenu-item">Logout</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
