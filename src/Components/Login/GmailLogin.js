import React from "react";
import "./GmailLogin.css";
import googlelogo from "../../Assets/svg/google-icon.svg";
export default function GmailLogin({loginMode}) {
  return (
    <div className="gsec">
      <div className="gsec1">
        <img src={googlelogo} alt="google logo"></img>
      </div>
  <div className="gsec2">{loginMode? "Log in " : "Sign up "}with Google</div>
    </div>
  );
}
