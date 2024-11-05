import React, { useEffect ,useState} from "react";
import "../styles/Reco.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


const Recomendation = (props) => {
  const { bookData } = props;
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    console.log(bookData);
    if (bookData.length > 0) setLoading(false);
    else setLoading(true);
  }, [bookData]);


  return (
    <div>
      <div className="container">
        {loading ? (<div className="loading"><FontAwesomeIcon icon={faCircleNotch} spin/></div>) :
        (<div className="wrapper">
          {bookData.map((book, index) => (
            <Link to="/book" key={index} state={{ book }}>
              <div className="book">
                <div className="title">
                  <span>{book.title}</span>
                </div>
                <div>
                  <img
                    src={book.imageLinks?.thumbnail}
                    alt={`${book.title} cover`}
                  />
                </div>
                <div className="authors">
                  <span>{book.authors && book.authors.length>0 ? book.authors.join(","):"unknown"}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>)
        }
      </div>
    </div>
  );
};

export default Recomendation;
