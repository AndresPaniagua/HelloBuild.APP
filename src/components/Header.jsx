import React, { useState } from "react";

import logo from "../assets/images/LogoHelloBuild.jpg";
import loginIcon from "../assets/images/login-Icon.png";
import logoutIcon from "../assets/images/logout-Icon.jpg";
import "../styles/header.css";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

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
                {isLoggedIn && (
                  <li className="nav-item">
                    <a href="/my-repositories" className="nav-link">
                      My Repositories
                    </a>
                  </li>
                )}
                {isLoggedIn && (
                  <li className="nav-item">
                    <a href="/my-fav" className="nav-link">
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
            {isLoggedIn ? (
              <button onClick={handleLogoutClick} className="logout-button">
                <img src={logoutIcon} alt="Icono" className="button-icon" />
                <span className="button-text">Logout</span>
              </button>
            ) : (
              <button onClick={handleLoginClick} className="login-button">
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
