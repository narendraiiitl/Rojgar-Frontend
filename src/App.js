import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Login from "./Components/Login/Loginform";
import Home from "./Components/Owner/Home";
import { connect } from "react-redux";
import { setUsername } from "./Redux/Actions/Actions";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    username: state.updateUsername.username,
    // robots: state.requestRobots.robots,
    // isPending: state.requestRobots.isPending,
    // error: state.requestRobots.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSuccess: (text) => dispatch(setUsername(text))
    // onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    // onRequestRobots: () => dispatch(requestRobots()),
  };
};

// import Signup from './Signup';
function App(props) {
  return (
    <div>
      <input onKeyPress={(e)=>props.onSuccess(e.target.value)} value="red"></input>
    </div>
    // <Route
    //   render={({ location }) => (
    //     <TransitionGroup>
    //       <CSSTransition key={location.key} classNames="page" timeout={500}>
    //         <Switch location={location}>
    //           <Route exact path="/home" render={(routeProps) => <Home />} />
    //           <Route exact path="/" render={(routeProps) => <Login />} />
    //           {/* <Route exact path="/signup" render={(routeProps) => <Signup />} /> */}
    //           {/* <Route
    //             exact
    //             path="/dashboard"
    //             render={(routeProps) => <Page></Page>}
    //           /> */}
    //         </Switch>
    //       </CSSTransition>
    //     </TransitionGroup>
    //   )}
    // />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
