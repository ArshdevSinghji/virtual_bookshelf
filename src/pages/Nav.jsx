import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/Nav.css";
const Nav = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="contain">
      <div className="nav">
        <div className="login-container">
          <div>
            {show ? (
              <div>
                <h4>
                  Books{" "}
                  <FontAwesomeIcon icon={faAngleUp} onClick={handleClick} />
                </h4>
                <div className="dropdown-menu">
                  <Link to="/readingBooks">
                    <div>
                      <h4>Want to read</h4>
                    </div>
                  </Link>
                  <div>
                    <h4>Reading</h4>
                  </div>
                  <div>
                    <h4>Read</h4>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h4>
                  Books{" "}
                  <FontAwesomeIcon icon={faAngleDown} onClick={handleClick} />
                </h4>
              </div>
            )}
          </div>
          <div>
            <div>
              <h4>Login</h4>
            </div>
            <div>
              <h4>Sign up</h4>
            </div>
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
    </div>
  );
};

export default Nav;
