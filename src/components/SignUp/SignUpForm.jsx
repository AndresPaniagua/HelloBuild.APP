import React, { useState } from "react";
import Swal from "sweetalert2";
import { registerUser } from "../../utils/actions";
import { showLoader, closeLoader, validateEmail } from "../../utils/helper";

import imageSignUp from "../../assets/images/signup.png";
import "../../styles/signup.css";

export default function SignUpForm({ onFinishRegister }) {
  const [error, setError] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: ""
  });

  const handleSuccessRegister = () => {
    onFinishRegister();
  };

  const handleEmailChanges = (e) => {
    const email = e.target.value;
    if (!validateEmail(email)) {
      setError("Invalid email");
    }
    else {
      setError("");
    }

    setUserData({ ...userData, email: email })
  }

  const handlePasswordChanges = (e) => {
    const reapedPassword = e.target.value;
    const password = userData.password;

    if (password !== reapedPassword) {
      setError("Passwords do not match!");
    }
    else {
      setError("");
    }
    
    setUserData({ ...userData, repeatPassword: reapedPassword });
  }

  const sendRegisterUser = async () => {
    const anyEmpty = Object.values(userData).some(valor => valor === "");
    if (anyEmpty) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'There seems to be some empty field!',
        timer: 5000
      });
      return;
    }

    if (userData.password.length < 6) {
      Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'The password must be at least 6 characters!',
        timer: 5000
      });
      return;
    }

    if (userData.password !== userData.repeatPassword) {
      Swal.fire({
        icon: 'error',
        title: 'NO!',
        text: 'Passwords do not match!',
        timer: 5000
      });
      return;
    }

    if (!validateEmail(userData.email)) {
      Swal.fire({
        icon: 'error',
        title: 'NO!',
        text: 'Invalid email!',
        timer: 5000
      });
      return;
    }

    showLoader("Loading...");

    const data = {
      name: userData.name,
      email: userData.email,
      password: userData.password
    }

    const response = await registerUser(data);

    closeLoader();

    if (!response.statusResponse) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...!',
        text: 'Something has gone wrong, please try again later!',
        timer: 15000
      });
      handleSuccessRegister();
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'NICE!',
      text: 'You have successfully registered!',
      timer: 20000
    }).then((data) => {
      handleSuccessRegister();
    });
  }

  return (
    <div className="signup-Container">
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input type="text" name="name" id="name" placeholder="Your Name" value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email"></i>
                  </label>
                  <input type="email" name="email" id="email" placeholder="Your Email" value={userData.email} onChange={(e) => handleEmailChanges(e)} />
                </div>
                <div className="form-group">
                  <label htmlFor="pass">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input type="password" name="pass" id="pass" placeholder="Password" aria-autocomplete="list" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                </div>
                <div className="form-group">
                  <label htmlFor="re-pass">
                    <i className="zmdi zmdi-lock-outline"></i>
                  </label>
                  <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" value={userData.repeatPassword} onChange={(e) => handlePasswordChanges(e)} />
                </div>
                <span style={{color:'red'}}>{error}</span>
                <div className="form-group form-button">
                  <button type="button" name="signup" id="signup" className="form-submit" onClick={sendRegisterUser} >Register</button>
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img src={imageSignUp} alt="sing up image" />
              </figure>
              <a onClick={handleSuccessRegister} className="signup-image-link">
                I am already member
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
