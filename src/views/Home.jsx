import React from "react";
import SignUpForm from "../components/SignUp/SignUpForm";
import SignInForm from "../components/SignIn/SignInForm";
import { useState } from "react";

export default function Home() {
  const [showSignIn, SetShowSignIn] = useState(true);

  const handleSigninShow = () => {
    SetShowSignIn(!showSignIn);
  }

  return (
    <div>
      {showSignIn ? (
        <SignInForm onCreateAccount={handleSigninShow} />
      ) : (
        <SignUpForm onFinishRegister={handleSigninShow} />
      )}
    </div>
  );
}
