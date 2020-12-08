import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { hot } from 'react-hot-loader'
import Login from "./Components/Login/Loginform";
import Home from "./Components/Owner/Home";
import { connect } from "react-redux";
import { setUsername, setAuthentication } from "./Redux/Actions/Actions";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    username: state.updateUsername.username,
    authenticated: state.updateAuthentication.authenticated,
    // robots: state.requestRobots.robots,
    // isPending: state.requestRobots.isPending,
    // error: state.requestRobots.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSuccess: (text) => dispatch(setUsername(text)),
    onVerification: (text) => dispatch(setAuthentication(text)),
    // onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    // onRequestRobots: () => dispatch(requestRobots()),
  };
};

// import Signup from './Signup';
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
                render={(routeProps) => <Home username={props.username} authenticated={props.authenticated} />}
              />
              <Route
                exact
                path="/"
                render={(routeProps) => (
                  <Login
                    updateUsername={props.onSuccess}
                    updateAuth={props.onVerification}
                  />
                )}
              />
              {/* <Route exact path="/signup" render={(routeProps) => <Signup />} /> */}
              {/* <Route
                exact
                path="/dashboard"
                render={(routeProps) => <Page></Page>}
              /> */}
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
}

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(App));