import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Cookie from "universal-cookie";
import Dashboard from "./Dashboard";
import { useParams } from "react-router-dom";
const cookie = new Cookie();
function Home(props) {
  let { id } = useParams();
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    if (!auth) {
      const token = cookie.get("accessToken");
      let url = "http://localhost:3001/api/user";
      axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })  
        .then((res) => {
          setAuth(true);
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.status);
          }
          setAuth(false);
        });
    }
  });
  return !props.authenticated ? (
    <Redirect to={{ pathname: "/login" }} />
  ) : (
    <Dashboard auth={auth} component={id} />
  );
}
export default Home;
