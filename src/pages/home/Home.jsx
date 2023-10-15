import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [state, setState] = React.useState({
    email: "",
    nickname: "",
    password: "",
    confirmPassword: "",
    regMode: false
  });

  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/lobby");
  };

  const regToggle = () => {
    setState({
      ...state,
      regMode: !state.regMode
    });
  };

  const onChangeEmail = (e) => {
    setState({
      ...state,
      email: e.target.value
    });
  };

  const onChangePassword = (e) => {
    setState({
      ...state,
      password: e.target.value
    });
  };

  const onChangeNickname = (e) => {
    setState({ ...state, nickname: e.target.value });
  };

  const onChangeConfirmPassword = (e) => {
    setState({ ...state, confirmPassword: e.target.value });
  };

  return (
    <div className="container">
      {!state.regMode && (
        <div className="form">
          <div className="title">Mafia</div>
          <div className="subtitle">Please Login to Continue...</div>
          <div className="input-container ic1">
            <input
              id="email"
              className="input"
              type="email"
              placeholder=" "
              autoComplete="off"
              onChange={onChangeEmail}
            />
            <div className="cut cut-short"></div>
            {state.email.length === 0 && (
              <label htmlFor="email" className="placeholder">
                Email
              </label>
            )}
          </div>
          <div className="input-container ic2">
            <input
              id="password"
              className="input"
              type="password"
              placeholder=" "
              autoComplete="off"
              onChange={onChangePassword}
            />
            <div className="cut cut-short"></div>
            {state.password.length === 0 && (
              <label htmlFor="password" className="placeholder">
                Password
              </label>
            )}
          </div>
          <button type="text" className="submit" onClick={onSubmit}>
            Login
          </button>
          <p className="bottom-text">
            No Account?{" "}
            <span className="bottom-text-link" onClick={regToggle}>
              Register here!
            </span>
          </p>
        </div>
      )}
      {state.regMode && (
        <div className="form">
          <div className="title">Mafia</div>
          <div className="subtitle">Please Register an Account!</div>
          <div className="input-container ic1">
            <input
              id="email"
              className="input"
              type="email"
              placeholder=" "
              autoComplete="off"
              onChange={onChangeEmail}
            />
            <div className="cut cut-short"></div>
            {state.email.length === 0 && (
              <label htmlFor="email" className="placeholder">
                Email
              </label>
            )}
          </div>
          <div className="input-container ic2">
            <input
              id="nickname"
              className="input"
              type="text"
              placeholder=" "
              autoComplete="off"
              onChange={onChangeNickname}
            />
            <div className="cut cut-short"></div>
            {state.nickname.length === 0 && (
              <label htmlFor="nickname" className="placeholder">
                Nickname
              </label>
            )}
          </div>
          <div className="input-container ic2">
            <input
              id="password"
              className="input"
              type="password"
              placeholder=" "
              autoComplete="off"
              onChange={onChangePassword}
            />
            <div className="cut cut-short"></div>
            {state.password.length === 0 && (
              <label htmlFor="email" className="placeholder">
                Password
              </label>
            )}
          </div>
          <div className="input-container ic2">
            <input
              id="confirm-password"
              className="input"
              type="password"
              placeholder=" "
              autoComplete="off"
              onChange={onChangeConfirmPassword}
            />
            <div className="cut cut-short"></div>
            {state.confirmPassword.length === 0 && (
              <label htmlFor="confirm-password" className="placeholder">
                Confirm Password
              </label>
            )}
          </div>
          <button type="text" className="submit" onClick={onSubmit}>
            Register
          </button>
          <p className="bottom-text">
            Already Registered?{" "}
            <span className="bottom-text-link" onClick={regToggle}>
              Login here!
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
