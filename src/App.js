import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Login from "./Components/Login/Loginform";
import Home from "./Components/Owner/Home";
import Landing from "./Components/UI Components/Landing";
import { connect } from "react-redux";
import { setUsername, setAuthentication } from "./Redux/Actions/Actions";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    username: state.updateUsername.username,
    authenticated: state.updateAuthentication.authenticated,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSuccess: (text) => dispatch(setUsername(text)),
    onVerification: (text) => dispatch(setAuthentication(text)),
  };
};


function App(props) {
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="page" timeout={500}>
            <Switch location={location}>
              <Route
                exact
                path="/home"
                render={(routeProps) => (
                  <Home
                    username={props.username}
                    authenticated={props.authenticated}
                  />
                )}
              />
              <Route
                path="/home/:id"
                render={(routeProps) => (
                  <Home
                    username={props.username}
                    authenticated={props.authenticated}
                  />
                )}
              />
              <Route
                exact
                path="/login"
                render={(routeProps) => (
                  <Login
                    updateUsername={props.onSuccess}
                    updateAuth={props.onVerification}
                  />
                )}
              />
              <Route exact path="/" render={(routeProps) => <Landing />} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
