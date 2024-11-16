import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ReadingBooksContext } from "../context/ReadingBooksContext";
import "../styles/Reco.css";
import { useContext } from "react";

const Recomendation = (props) => {
  const { bookData, isFetching } = props;
  const { handleClick } = useContext(ReadingBooksContext);
  return (
    <div>
      <div className="container">
        {isFetching ? (
          <div className="loading">
            <FontAwesomeIcon icon={faCircleNotch} spin />
          </div>
        ) : (
          <div className="wrapper">
            {bookData.map((book, index) => (
              <div key={index}>
                <Link to="/book" state={{ book }}>
                  <div className="book">
                    <div>
                      <img
                        src={book.imageLinks?.thumbnail}
                        alt={`${book.title} cover`}
                      />
                    </div>
                    <div className="title">
                      <span>{book.title}</span>
                    </div>
                    <div className="authors">
                      <span>
                        {book.authors && book.authors.length > 0
                          ? book.authors.join(",")
                          : "unknown"}
                      </span>
                    </div>
                  </div>
                </Link>
                <button onClick={handleClick(book)}>Want to read?</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Recomendation;
