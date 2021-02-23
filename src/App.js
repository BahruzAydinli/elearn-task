import React from "react";
import Home from "./app/pages/Home/Home";
import { Route, Switch, Redirect } from "react-router-dom";
import Sidebar from "./app/shared/components/Sidebar/Sidebar";
import Certificate from "./app/pages/Certificate";
import Achievement from "./app/pages/Achievement";
import Test from "./app/pages/Test";
import Favorites from "./app/pages/Favorites";
import Courses from "./app/pages/Courses";
import Settings from "./app/pages/Settings";
import { connect } from "react-redux";
import Loader from "./app/shared/components/Loader";
import Login from "./app/pages/Login/Login";
import {
  logInReturningUser,
  toggleLoading,
  logOut,
} from "./app/redux/actions/index";

class App extends React.Component {
  componentDidMount() {
    if (localStorage.getItem("access_token")) {
      this.props.logInReturningUser();
    } else {
      this.props.logOut();
    }
  }
  render() {
    return (
      <>
        {this.props.isLoading > 0 ? <Loader /> : null}
        {this.props.isLoggedIn ? (
          <>
            <div className="page-container">
              <Sidebar />
              <Switch>
                <Route exact path="/home">
                  <Home />
                </Route>
                <Route exact path="/certificate">
                  <Certificate />
                </Route>
                <Route exact path="/test">
                  <Test />
                </Route>
                <Route exact path="/achievement">
                  <Achievement />
                </Route>
                <Route exact path="/my-courses">
                  <Courses />
                </Route>
                <Route exact path="/favorites">
                  <Favorites />
                </Route>
                <Route exact path="/settings">
                  <Settings />
                </Route>
                <Redirect to="/" />
              </Switch>
            </div>
          </>
        ) : (
          <Login logIn={this.toggleLoggedIn} />
        )}
      </>
    );
  }
}
const mapStateToProps = ({ user, loader }) => {
  return {
    isLoggedIn: user.isLoggedIn,
    isLoading: loader,
    user: user.data.role,
  };
};

export default connect(mapStateToProps, {
  logInReturningUser,
  toggleLoading,
  logOut,
})(App);
