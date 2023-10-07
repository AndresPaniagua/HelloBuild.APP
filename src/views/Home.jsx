import React from "react";
import { connect } from 'react-redux';
import SignUpForm from "../components/SignUp/SignUpForm";
import SignInForm from "../components/SignIn/SignInForm";
import GithubHome from "../components/Github/GithubHome";
import { useState } from "react";

const Home = ({ user, isLogged }) => {
  const [showSignIn, SetShowSignIn] = useState(true);

  const handleSigninShow = () => {
    SetShowSignIn(!showSignIn);
  }

  return (
    <div style={{height: "90vh"}}>
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
    user: state.user,
    isLogged: state.isLogged
  };
};

export default connect(mapStateToProps)(Home);
