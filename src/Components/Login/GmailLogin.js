import React from "react";
import "./GmailLogin.css";
import axios from "axios";
import Cookie from "universal-cookie";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";
const cookie = new Cookie();
function GmailLogin({ loginMode }) {
  let history = useHistory();
  const responseGoogle = (response) => {
    console.log(response);
    axios
      .post(`http://localhost:3001/auth/frontendgoogleregister`, { response })
      .then((res) => {
        const { accessToken, refreshToken } = res.data;
        cookie.set("accessToken", accessToken);
        cookie.set("refreshToken", refreshToken);
        history.push("/home");
      })  
      .catch(function (error) {
        if (error.response) console.log(error.response.status);
      });
  };
  return (
    <div className="gsec">
      <GoogleLogin
        className="gsec_1"
        clientId="300135945373-cgnt5ivnbdic1voveoe6lkbu56je2pn0.apps.googleusercontent.com"
        buttonText={`${loginMode ? "Login " : "Signup "}with Google`}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  );
}
export default GmailLogin;
