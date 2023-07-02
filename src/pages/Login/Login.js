import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const LoginPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const wrapperRef = useRef(null);
  const navigate = useNavigate();

  const handleSignUp = () => {
    setIsSignIn(false);
  };

  const handleSignIn = () => {
    setIsSignIn(true);
  };

  const handleSignUpLinkClick = () => {
    wrapperRef.current.classList.add("animate-signIn");
    wrapperRef.current.classList.remove("animate-signUp");
  };

  const handleSignInLinkClick = () => {
    wrapperRef.current.classList.add("animate-signUp");
    wrapperRef.current.classList.remove("animate-signIn");
  };

  const handleLogin = () => {
    // Perform login logic here
    // Example: navigate to the home page
    navigate("/home");
  };

  const handleSignUpSubmit = () => {
    // Perform sign up logic here
    // Example: navigate to the home page
    navigate("/home");
  };

  return (
    <div
      className={`wrapper ${isSignIn ? "animate-signIn" : "animate-signUp"}`}
      ref={wrapperRef}
    >
      <div className="form-wrapper sign-up">
        <form onSubmit={handleSignUpSubmit}>
          <h2> Sign Up </h2>{" "}
          <div className="input-group">
            <input type="text" required />
            <label> Name </label>{" "}
          </div>{" "}
          <div className="input-group">
            <input type="text" required />
            <label> Mobile Number </label>{" "}
          </div>{" "}
          <div className="input-group">
            <input type="password" required />
            <label> Password </label>{" "}
          </div>{" "}
          <button type="submit" className="btn">
            Sign Up{" "}
          </button>{" "}
          <div className="sign-link">
            <p>
              Already have an account ?{" "}
              <button className="link-button" onClick={handleSignInLinkClick}>
                Sign In{" "}
              </button>{" "}
            </p>{" "}
          </div>{" "}
        </form>{" "}
      </div>{" "}
      <div className="form-wrapper sign-in">
        <form onSubmit={handleLogin}>
          <h2> Login </h2>{" "}
          <div className="input-group">
            <input type="text" required />
            <label> Mobile Number </label>{" "}
          </div>{" "}
          <div className="input-group">
            <input type="password" required />
            <label> Password </label>{" "}
          </div>{" "}
          <div className="forgot-pass">
            <a href="#"> Forgot Password ? </a>{" "}
          </div>{" "}
          <button type="submit" className="btn">
            Login{" "}
          </button>{" "}
          <div className="sign-link">
            <p>
              Don 't have an account?{" "}
              <button className="link-button" onClick={handleSignUpLinkClick}>
                Sign Up{" "}
              </button>{" "}
            </p>{" "}
          </div>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
};

export default LoginPage;
