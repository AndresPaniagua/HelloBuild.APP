import React, { useState } from "react";
import { connect } from 'react-redux';
import SignUpForm from "../components/SignUp/SignUpForm";
import SignInForm from "../components/SignIn/SignInForm";
import GithubHome from "../components/Github/GithubHome";

const Home = ({ isLogged }) => {
  const [showSignIn, SetShowSignIn] = useState(true);

  const handleSigninShow = () => {
    SetShowSignIn(!showSignIn);
  }

  return (
    <div style={{ height: "90vh" }}>
      {isLogged ? (
        <GithubHome />
      ) : (
        showSignIn ? (
          <SignInForm onCreateAccount={handleSigninShow} />
        ) : (
          <SignUpForm onFinishRegister={handleSigninShow} />
        )
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLogged: state.isLogged
  };
};

export default connect(mapStateToProps)(Home);
