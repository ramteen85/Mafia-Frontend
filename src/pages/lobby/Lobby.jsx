import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./Lobby.css";

const Lobby = () => {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    userList: []
  });

  const signOut = () => {
    navigate("/");
  };

  return (
    <div className="lobby-container">
      <Navbar />
      <div className="lobby-inner-container">
        <h1>Welcome to the lobby</h1>
        <button className="lobby-btn" onClick={signOut}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Lobby;
