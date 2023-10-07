import React, { useState } from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { findUser } from "../../utils/actions";
import { showLoader, closeLoader, validateEmail } from "../../utils/helper";
import { changeLog, saveUser } from "../../redux/actions";

import "../../styles/signin.css";
import SignInimage from "../../assets/images/signin.png";

export default function SignInForm({ onCreateAccount }) {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const handleCreateAccount = () => {
    onCreateAccount();
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

  const logInUser = async () => {
    const anyEmpty = Object.values(userData).some(value => value === "");
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
      email: userData.email,
      password: userData.password
    }

    const response = await findUser(data);

    closeLoader();

    if (!response.statusResponse) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...!',
        text: 'Incorrect email or password, verify your data!',
        timer: 15000
      });
      return;
    }

    dispatch(changeLog(true));
    dispatch(saveUser({ email: data.email }));
  }

  return (
    <div className="signIn-Container">
      <section className="sign-in">
        <div className="container">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src={SignInimage} alt="sing up image" />
              </figure>
              <a onClick={handleCreateAccount} className="signup-image-link">
                Create an account
              </a>
            </div>

            <div className="signin-form">
              <h2 className="form-title">Sign In</h2>
              <form method="POST" className="register-form" id="login-form">
                <div className="form-group">
                  <label htmlFor="your_name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input type="text" name="your_name" id="your_name" placeholder="Enter your email" value={userData.email} onChange={(e) => handleEmailChanges(e)} />
                </div>
                <div className="form-group">
                  <label htmlFor="your_pass">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input type="password" name="your_pass" id="your_pass" placeholder="Enter your password" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                </div>
                <div className="form-group">
                  <label className="label-agree-term">
                    <span>
                      <span style={{ color: 'red' }}>
                        {error}
                      </span>
                    </span>
                  </label>
                </div>
                <div className="form-group form-button">
                  <button type="button" name="signin" id="signin" className="form-submit" onClick={logInUser} > Log In </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
