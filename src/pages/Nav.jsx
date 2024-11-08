import React from "react";
import "../styles/Nav.css";
const Nav = () => {
  return (
    <div>
      <div className="login-container">
        <div>
          <h4>Login</h4>
        </div>
        <div>
          <h4>Sign up</h4>
        </div>
      </div>
      <div className="title">
        <div className="name">
          <div className="firstName">
            <h1>Quixote</h1>
          </div>
          <div className="secondName">
            <h1>Quest</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
