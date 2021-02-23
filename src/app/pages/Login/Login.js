import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { logInUser, loadingOff, loadingOn } from "./../../redux/actions/index";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (props.message.trim().length !== 0) {
      console.log(props.message);
    }
  }, [props.message, props.notify]);

  const logUserIn = async () => {
    props.loadingOn();
    await props.logInUser(username, password);
    props.loadingOff();
  };

  return (
    <div id="login-page">
      <div className="admin-login">
        <div className="admin-login-row">
          <h5>Elarn - Admin</h5>
        </div>
        <div className="admin-login-row">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Elektron poçt"
          />
        </div>
        <div className="admin-login-row">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Şifrə"
          />
        </div>
        <div className="admin-login-row">
          <input onClick={logUserIn} type="button" value="Daxil ol" />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ user }) => {
  return {
    loggedIn: user.isLoggedIn,
    message: user.message,
    notify: user.notify,
  };
};

export default connect(mapStateToProps, { logInUser, loadingOn, loadingOff })(
  Login
);
