import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Login from './Components/Login/Loginform';
import Home from './Components/Owner/Home';
// import Signup from './Signup';
function App() {
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="page" timeout={500}>
            <Switch location={location}>
              <Route exact path="/home" render={(routeProps) => <Home />} />
              <Route exact path="/" render={(routeProps) => <Login />} />
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

export default App;
