import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const [
    state,
    // setState
  ] = React.useState({
    user: {
      name: 'User',
      pic: '#',
    },
    messages: {},
    notifications: {},
  });

  return (
    <div className="navbar">
      <div className="logo-wrapper">{/* <img src="" alt="" /> */}</div>
      <div className="navbar-right">
        <ul className="menu-list">
          <li className="menu-item">
            Games
            <ul className="submenu-list">
              <li className="submenu-item">Create Game</li>
              <li className="submenu-item">Join Game</li>
            </ul>
          </li>
          <li className="menu-item">
            Messages
            <ul className="submenu-list">
              <li className="submenu-item">{/* message from a person */}</li>
            </ul>
          </li>
          <li className="menu-item">
            Notifications
            <ul className="submenu-list">
              <li className="submenu-item">Dave has sent you a message!</li>
              <li className="submenu-item">Frank has invited you to a game!</li>
            </ul>
          </li>
          <li className="menu-item">
            <div className="profile-wrapper">
              <img src={state.pic} alt="" />
              {state.name}
            </div>
            <ul className="submenu-list">
              <li className="submenu-item">Profile</li>
              <li className="submenu-item">Logout</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
