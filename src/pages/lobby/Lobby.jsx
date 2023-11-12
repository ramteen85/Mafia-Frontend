/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import gavelIMG from '../../assets/gavel.png';
import './Lobby.css';

const Lobby = () => {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    userList: [],
  });

  const signOut = () => {
    navigate('/');
  };

  return (
    <div className="lobby-container">
      <Navbar />
      <div className="lobby-inner-container">
        <div className="participants">
          <ul className="participants-list">
            <li className="participants-item">
              <div className="participants-item-avatar">
                <img src="https://placehold.jp/50x50.png" alt="" />
              </div>
              <div className="participants-item-name">
                Ramski{' '}
                <img
                  src={gavelIMG}
                  alt=""
                  className="admin-img"
                  placeholder="Super Admin"
                />
                <span className="tooltip">Admin</span>
              </div>
            </li>
            <li className="participants-item">
              <div className="participants-item-avatar">
                <img src="https://placehold.jp/50x50.png" alt="" />
              </div>
              <div className="participants-item-name">Robert</div>
            </li>
            <li className="participants-item">
              <div className="participants-item-avatar">
                <img src="https://placehold.jp/50x50.png" alt="" />
              </div>
              <div className="participants-item-name">Shaz</div>
            </li>
            <li className="participants-item">
              <div className="participants-item-avatar">
                <img src="https://placehold.jp/50x50.png" alt="" />
              </div>
              <div className="participants-item-name">Shaz</div>
            </li>
            <li className="participants-item">
              <div className="participants-item-avatar">
                <img src="https://placehold.jp/50x50.png" alt="" />
              </div>
              <div className="participants-item-name">Shaz</div>
            </li>
            <li className="participants-item">
              <div className="participants-item-avatar">
                <img src="https://placehold.jp/50x50.png" alt="" />
              </div>
              <div className="participants-item-name">Shaz</div>
            </li>
            <li className="participants-item">
              <div className="participants-item-avatar">
                <img src="https://placehold.jp/50x50.png" alt="" />
              </div>
              <div className="participants-item-name">Shaz</div>
            </li>
            <li className="participants-item">
              <div className="participants-item-avatar">
                <img src="https://placehold.jp/50x50.png" alt="" />
              </div>
              <div className="participants-item-name">Shaz</div>
            </li>
            <li className="participants-item">
              <div className="participants-item-avatar">
                <img src="https://placehold.jp/50x50.png" alt="" />
              </div>
              <div className="participants-item-name">Shaz</div>
            </li>
            <li className="participants-item">
              <div className="participants-item-avatar">
                <img src="https://placehold.jp/50x50.png" alt="" />
              </div>
              <div className="participants-item-name">Shaz</div>
            </li>
            <li className="participants-item">
              <div className="participants-item-avatar">
                <img src="https://placehold.jp/50x50.png" alt="" />
              </div>
              <div className="participants-item-name">Shaz</div>
            </li>
          </ul>
        </div>
        <div className="chat"></div>
      </div>
      <div className="bottom-panel">
        <div className="input-wrapper">
          <input type="text" placeholder="Type a message..." className="message-box" />
          <button className="send-btn">Send Message</button>
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Channel Name..."
            defaultValue="Lobby-1"
            className="channel"
          />
          <button className="go-btn">Switch Channel</button>
        </div>
      </div>
    </div>
  );
};

export default Lobby;
