import React from "react";
import { connect } from 'react-redux';
import { useDispatch } from "react-redux";
import { changeLog, showList, saveToken, saveUser } from "../redux/actions";

import logo from "../assets/images/LogoHelloBuild.jpg";
import loginIcon from "../assets/images/login-Icon.png";
import logoutIcon from "../assets/images/logout-Icon.jpg";
import "../styles/header.css";

const Header = ({ user, isLogged }) => {
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(changeLog(false));
    dispatch(showList(false));
    dispatch(saveToken(null));
    dispatch(saveUser({
      email: null,
      pass: null
    }));
  }

  const handleMyRepos = () => {
    dispatch(showList(true));
  }

  const handleMyFavRepos = () => {
    dispatch(showList(false));
  }

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <div className="logoNav">
            <img src={logo} alt="Logo" className="logo" />
            <h1 className="app-title">My App</h1>
          </div>

          <div className="linkNav">
            <nav className="nav">
              <ul className="nav-list">
                {isLogged && (
                  <li className="nav-item">
                    <a onClick={handleMyRepos} className="nav-link">
                      My Repositories
                    </a>
                  </li>
                )}
                {isLogged && (
                  <li className="nav-item">
                    <a onClick={handleMyFavRepos} className="nav-link">
                      My Fav
                    </a>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>

        <div className="login">
          <div className="nav-item">
            {isLogged ? (
              <button onClick={handleLogoutClick} className="logout-button">
                <img src={logoutIcon} alt="Icono" className="button-icon" />
                <span className="button-text">Logout</span>
              </button>
            ) : (
              <button className="login-button">
                <img src={loginIcon} alt="Icono" className="button-icon" />
                <span className="button-text">Login</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isLogged: state.isLogged
  };
};

export default connect(mapStateToProps)(Header);