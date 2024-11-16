import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import "../styles/Nav.css";
const Nav = () => {
  return (
    <div className="contain">
      <div className="nav">
        <div className="login-container">
          <div>
            <div className="menu">
              <Link to="/readingBooks" className="no-text-decoration">
                <div>
                  <FontAwesomeIcon icon={faBook} />
                </div>
              </Link>
            </div>
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
