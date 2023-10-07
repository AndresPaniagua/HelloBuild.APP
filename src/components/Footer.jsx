import React from "react";

import Linkedin from "../assets/images/linkedIn-Icon.png";
import GitHub from "../assets/images/github-Icon.png";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="rights-container">
          <p>&copy; {new Date().getFullYear()} All rights reserved</p>
        </div>
        <div className="name-container">
          <p>Andrés Paniagua - Entrance test</p>
        </div>
        <div className="logo-container">
          <a href="https://www.linkedin.com/in/andres-felipe-paniagua-lema/" target="_blank" rel="noopener noreferrer">
            <img src={Linkedin} alt="LinkedIn Logo" />
          </a>

          <a href="https://github.com/AndresPaniagua" target="_blank" rel="noopener noreferrer">
            <img src={GitHub} alt="Github Logo" />
          </a>
        </div>
      </div>
    </footer>
  );
}
