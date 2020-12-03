import React from "react";
import './Loginform.css';
import Logo from "../../Assets/Logo/rojgar.png";
import Banner from "../../Assets/Images/workerimage.jpg";
import LoginInput from "./LoginInput";
import GmailLogin from './GmailLogin'
export default function Loginform() {
  return (
    <div className="login_cover">
      <div className="login_section1">
        <div className="login_logo">
          <img src={Logo} alt="logo of the rojgar app"></img>
        </div>
        <div className="login_heading">Log in to your account</div>
        <GmailLogin />
        <div className="login_or"><span>or</span></div>
        <LoginInput name="Email Address" />
        <LoginInput name="Password" />
        <div className="login_submit">
            <button>Login</button>
            <span>Don't have an account?<span className="login_change">&nbsp;Sign Up</span></span>
        </div>
      </div>
      <div className="login_section2">
          <img src={Banner} alt="banner image"></img>
      </div>
    </div>
  );
}
