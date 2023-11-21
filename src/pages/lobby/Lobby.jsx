/* eslint-disable no-unused-vars */
// https://www.youtube.com/watch?v=Wx7kz5LpAz4&ab_channel=GatherTogetherGames
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import gavelIMG from '../../assets/gavel.png';
import _ from 'lodash';
import './Lobby.css';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const Lobby = () => {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    userList: [],
    leftSide: false,
    messages: [
      {
        id: 0,
        name: 'Ramski',
        access: 1,
        text: "Heyyyy! What's going on in this chat?",
      },
      {
        id: 1,
        name: 'Shaz',
        access: 0,
        text: 'Woo hoo! Hello chatroom, it works!',
      },
    ],
    participants: [
      {
        id: 0,
        name: 'Ramski',
        access: 1,
        avatar: 'https://placehold.jp/50x50.png',
        expanded: false,
      },
      {
        id: 1,
        name: 'Robert',
        access: 0,
        avatar: 'https://placehold.jp/50x50.png',
        expanded: false,
      },
      {
        id: 2,
        name: 'Shaz',
        access: 0,
        avatar: 'https://placehold.jp/50x50.png',
        expanded: false,
      },
      {
        id: 3,
        name: 'Shaz',
        access: 0,
        avatar: 'https://placehold.jp/50x50.png',
        expanded: false,
      },
      {
        id: 4,
        name: 'Shaz',
        access: 0,
        avatar: 'https://placehold.jp/50x50.png',
        expanded: false,
      },
      {
        id: 5,
        name: 'Shaz',
        access: 0,
        avatar: 'https://placehold.jp/50x50.png',
        expanded: false,
      },
      {
        id: 6,
        name: 'Shaz',
        access: 0,
        avatar: 'https://placehold.jp/50x50.png',
        expanded: false,
      },
      {
        id: 7,
        name: 'Shaz',
        access: 0,
        avatar: 'https://placehold.jp/50x50.png',
        expanded: false,
      },
      {
        id: 8,
        name: 'Shaz',
        access: 0,
        avatar: 'https://placehold.jp/50x50.png',
        expanded: false,
      },
      {
        id: 9,
        name: 'Shaz',
        access: 0,
        avatar: 'https://placehold.jp/50x50.png',
        expanded: false,
      },
      {
        id: 10,
        name: 'Shaz',
        access: 0,
        avatar: 'https://placehold.jp/50x50.png',
        expanded: false,
      },
      {
        id: 11,
        name: 'Shaz',
        access: 0,
        avatar: 'https://placehold.jp/50x50.png',
        expanded: false,
      },
      {
        id: 12,
        name: 'Shaz',
        access: 0,
        avatar: 'https://placehold.jp/50x50.png',
        expanded: false,
      },
      {
        id: 13,
        name: 'Shaz',
        access: 0,
        avatar: 'https://placehold.jp/50x50.png',
        expanded: false,
      },
      {
        id: 14,
        name: 'Shaz',
        access: 0,
        avatar: 'https://placehold.jp/50x50.png',
        expanded: false,
      },
      {
        id: 15,
        name: 'Shaz',
        access: 0,
        avatar: 'https://placehold.jp/50x50.png',
        expanded: false,
      },
    ],
  });

  const getCurrentDimension = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  const [screenSize, setScreenSize] = React.useState(getCurrentDimension());
  const outerRef = React.useRef();

  const doSwitch = () => {
    setState({ ...state, leftSide: !state.leftSide });
  };

  const expandMenu = (index) => {
    const participants = [...state.participants];

    for (let x = 0; x < participants.length; x++) {
      participants[x].expanded = false;
    }

    participants[index].expanded = !participants[index].expanded;

    setState({ ...state, participants: participants });
  };

  React.useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener('resize', updateDimension);

    return () => {
      window.removeEventListener('resize', updateDimension);
    };
  }, [screenSize]);

  React.useEffect(() => {
    const collapseAllMenu = () => {
      const participants = [...state.participants];

      for (let x = 0; x < participants.length; x++) {
        participants[x].expanded = false;
      }

      setState({ ...state, participants: participants });
    };

    const handleClickOutside = (e) => {
      if (outerRef.current && !outerRef.current.contains(e.target)) {
        // Hide the div or perform any desired action
        collapseAllMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [state]);

  return (
    <div className="lobby-container">
      <Navbar />

      <div className="switch-btn">
        <button onClick={doSwitch}>
          {!state.leftSide && (
            <FaArrowCircleLeft
              size={22}
              style={{ position: 'relative', top: '5px', marginRight: '1rem' }}
            />
          )}
          {state.leftSide && (
            <FaArrowCircleRight
              size={22}
              style={{ position: 'relative', top: '5px', marginRight: '1rem' }}
            />
          )}
          {!state.leftSide ? 'Participants' : 'Chat'}
        </button>
      </div>

      <div className="lobby-inner-container">
        {((state.leftSide && screenSize.width < 840) || screenSize.width >= 840) && (
          <div className="participants">
            <ul className="participants-list" ref={outerRef}>
              {_.map(state.participants, (participant, index) => {
                return (
                  <li
                    className="participants-item"
                    key={participant.id}
                    onClick={() => expandMenu(index)}
                  >
                    <div className="participants-item-avatar">
                      <img src={participant.avatar} alt="" />
                    </div>
                    <div className="participants-item-name">
                      {participant.name}
                      {participant.access > 0 && (
                        <>
                          <img
                            src={gavelIMG}
                            alt=""
                            className="admin-img"
                            placeholder="Super Admin"
                          />
                          <span className="tooltip">Admin</span>
                        </>
                      )}
                    </div>
                    {participant.expanded && (
                      <ul className="participants-dropdown">
                        <li className="participants-dropdown-item">View Profile</li>
                        <li className="participants-dropdown-item">Message User</li>
                        <li className="participants-dropdown-item">Report User</li>
                        <li className="participants-dropdown-item">Kick / Ban</li>
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        {((!state.leftSide && screenSize.width < 840) || screenSize.width >= 840) && (
          <div className="chat">
            <div className="chat-window">
              {_.map(state.messages, (message, index) => {
                return (
                  <div className="chat-message" key={message.id}>
                    <div className="participant-name">
                      {message.access > 0 && (
                        <>
                          <img src={gavelIMG} alt="" placeholder="Super Admin" />
                        </>
                      )}
                      <span>{message.name + ': '}</span>
                    </div>
                    <div className="participant-text">
                      <p>{message.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      {((!state.leftSide && screenSize.width < 840) || screenSize.width >= 840) && (
        <div className="bottom-panel">
          <div className="input-wrapper">
            <input type="text" placeholder="Type a message..." className="message-box" />
            <button className="send-btn">Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lobby;
