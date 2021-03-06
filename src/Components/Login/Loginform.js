import React, { useRef } from "react";
import "./Loginform.css";
import Logo from "../../Assets/Logo/rojgar.png";
import LoginInput from "./LoginInput";
import { FiArrowRight } from "react-icons/fi";
import GmailLogin from "./GmailLogin";
import useInput from "../../Hooks/useInput";
import useToggle from "../../Hooks/useToggle";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Cookie from "universal-cookie";
import { Alert } from "reactstrap";
const cookie = new Cookie();
function submitForm(email, password, setAlertVisible, history,props,loginMode) {
  let url = loginMode ?  "http://localhost:3001/auth/login" :"http://localhost:3001/auth/register";
  axios
    .post(url, { email, password })
    .then((res) => {
      const { accessToken, refreshToken } = res.data;
      props.updateUsername(accessToken);
      props.updateAuth(true);
      cookie.set("accessToken", accessToken);
      cookie.set("refreshToken", refreshToken);
      history.push("/home");
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.status);
      }
      console.log(error);
      setAlertVisible();
      window.setTimeout(() => {
        setAlertVisible();
      }, 2000);
    });
}

function Loginform(props) {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [alertVisible, setAlertVisible] = useToggle(false);
  let login = true;
  let history = useHistory();
  let btnRef = useRef();
  const [loginMode, setLoginMode] = useToggle(true);
  if (!(email && password)) {
    login = false;
  }
  return (
    <div className="login_cover">
      <div className="login_section1">
        <div className="login_logo">
          <img src={Logo} alt="logo of the rojgar app"></img>
        </div>
        <Alert
          className="alert_1"
          color="danger"
          isOpen={alertVisible}
          toggle={(e) => setAlertVisible()}
        >
          {"Email not found."}
        </Alert>
        <div className="login_heading">Log in to your account</div>
        <GmailLogin loginMode={loginMode} updateUsername={props.updateUsername} updateAuth={props.updateAuth} />
        <div className="login_or">
          <span>or</span>
        </div>

        <LoginInput name="Email Address" value={email} update={setEmail} />
        <LoginInput name="Password" value={password} update={setPassword} />

        <div className="login_submit">
          <button
            ref={btnRef}
            className={login ? "greenactive" : ""}
            disabled={!login}
            onClick={() =>
              submitForm(email, password, setAlertVisible, history,props,loginMode)
            }
          >
            {!loginMode ? "Sign Up" : "Log In"}
          </button>
          <span>
            {loginMode ? "Don't have an account?" : "Already have an account?"}
            <span className="login_change" onClick={() => setLoginMode()}>
              &nbsp; {loginMode ? "Sign Up" : "Log In"}
            </span>
          </span>
        </div>
      </div>
      <div className="login_section2">
        <div className="tag_1">
          Get Your Job Done <br></br> By The Rojgarites.
        </div>
        <div className="tag_content_1">
          Book your appointment with our <br></br> amazing Rojgarite at the
          comfort
          <br></br> of your home and relax, it is that simple!
        </div>
        <span className="join_now1">Become a Rojgarite &nbsp;</span>
        <FiArrowRight />
      </div>
    </div>
  );
}

export default Loginform;
