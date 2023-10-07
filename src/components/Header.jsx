import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import {
  changeLog,
  showList,
  saveToken,
  saveUser,
  favReposList,
  reposList,
  changeGitLogin,
  showProfile,
  showSelected,
  mySelectedReposList,
} from "../redux/actions";

import logo from "../assets/images/LogoHelloBuild.jpg";
import loginIcon from "../assets/images/login-Icon.png";
import logoutIcon from "../assets/images/logout-Icon.jpg";
import "../styles/header.css";

const Header = ({ user, isLogged }) => {
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(changeLog(false));
    dispatch(showList(false));
    dispatch(
      saveToken({
        token: null,
        username: null,
      })
    );
    dispatch(
      saveUser({
        email: null,
        pass: null,
      })
    );
    dispatch(favReposList([]));
    dispatch(reposList([]));
    dispatch(mySelectedReposList([]));
    dispatch(changeGitLogin(false));
    dispatch(showSelected(false));
    dispatch(showProfile(false));
  };

  const handleMyRepos = () => {
    dispatch(showList(true));
    dispatch(showProfile(false));
    dispatch(showSelected(false));
  };

  const handleFavRepos = () => {
    dispatch(showList(false));
    dispatch(showProfile(false));
    dispatch(showSelected(true));
  };

  const handleStarredRepos = () => {
    dispatch(showList(false));
    dispatch(showProfile(false));
    dispatch(showSelected(false));
  };

  const handleMyProfile = () => {
    dispatch(showList(false));
    dispatch(showProfile(true));
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <div className="logoNav">
            <img src={logo} alt="Logo" className="logo" />
            <h1 className="app-title">HB - Test App</h1>
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
                    <a onClick={handleStarredRepos} className="nav-link">
                      Starred Repos
                    </a>
                  </li>
                )}
                {isLogged && (
                  <li className="nav-item">
                    <a onClick={handleFavRepos} className="nav-link">
                      My Favorites Repos
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
              <div className="login-navItem">
                <nav className="nav">
                  <ul className="nav-list">
                    {isLogged && (
                      <li className="nav-item">
                        <a onClick={handleMyProfile} className="nav-link">
                          My profile
                        </a>
                      </li>
                    )}
                  </ul>
                </nav>

                <button onClick={handleLogoutClick} className="logout-button">
                  <img src={logoutIcon} alt="Icono" className="button-icon" />
                  <span className="button-text">Logout</span>
                </button>
              </div>
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
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isLogged: state.isLogged,
  };
};

export default connect(mapStateToProps)(Header);
