import React from "react";
import "./Loginform.css";
import Logo from "../../Assets/Logo/rojgar.png";
import LoginInput from "./LoginInput";
import { FiArrowRight} from "react-icons/fi";
import GmailLogin from "./GmailLogin";
export default function Loginform() {
  return (
    <div className="login_cover">
      <div className="login_section1">
        <div className="login_logo">
          <img src={Logo} alt="logo of the rojgar app"></img>
        </div>
        <div className="login_heading">Log in to your account</div>
        <GmailLogin />
        <div className="login_or">
          <span>or</span>
        </div>
        <LoginInput name="Email Address" />
        <LoginInput name="Password" />
        <div className="login_submit">
          <button>Login</button>
          <span>
            Don't have an account?
            <span className="login_change">&nbsp;Sign Up</span>
          </span>
        </div>
      </div>
      <div className="login_section2">
        <div className="tag_1">
          Get Your Job Done <br></br> By The Professionals.
        </div>
        <div className="tag_content_1">
          Book Online workers for the several <br></br>job types who are honest and hard<br></br>working at your finger tips. 
        </div>
        <span className="join_now1">
          Become a Professional &nbsp;
        </span>
        {/* <FiArrowRight /> */}
      </div>
    </div>
  );
}
