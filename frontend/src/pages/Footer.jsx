import logo from "../assets/public/rb_169175.png";
import "../styles/Foot.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const listOne = ["Accessibility", "Press", "Careers", "Space Rental"];
  const listTwo = [
    "Privacy Policy",
    "Other Policies",
    "Terms & Conditions",
    "Governance",
  ];
  const listThree = ["Rules & Regulations", "About QQ", "Language"];
  return (
    <div>
      <div className="footer">
        <div className="footer-logo">
          <div className="footer-title-logo-container">
            <div className="footer-title">
              <div className="footer-firstName">
                <h1>Quixote</h1>
              </div>
              <div className="footer-secondName">
                <h1>Quest</h1>
              </div>
            </div>
          </div>
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="copyright">
            <p>© 2024 Quixote Quest</p>
          </div>
        </div>
        <div className="footer-list">
          <div className="footer-list-container">
            <div>
              <ul>
                {listOne.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <ul>
                {listTwo.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <ul>
                {listThree.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="social">
            <a>
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
