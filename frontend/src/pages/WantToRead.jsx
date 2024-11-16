import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faBookOpen,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";
import { ReadingBooksContext } from "../context/ReadingBooksContext";
import "../styles/Read.css";
const WantToRead = () => {
  const { readingBooks } = useContext(ReadingBooksContext);
  console.log(readingBooks);
  return (
    <div>
      {readingBooks.length > 0 ? (
        <div>
          <div className="grid">
            <div className="user-list">
              <div>
                <FontAwesomeIcon icon={faClipboardList} />
              </div>
              <div>
                <FontAwesomeIcon icon={faBookOpen} />
              </div>
              <div>
                <FontAwesomeIcon icon={faClipboardCheck} />
              </div>
            </div>
            <div className="books-grid">
              {readingBooks.map((book, index) => {
                return (
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
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div>None</div>
      )}
    </div>
  );
};

export default WantToRead;
