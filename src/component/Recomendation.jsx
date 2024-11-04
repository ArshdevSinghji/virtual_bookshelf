import React from "react";
import "../styles/Reco.css";

const Recomendation = (props) => {
  const { bookData } = props;

  return (
    <div>
      {bookData.length > 0 && (
        <div className="container">
          <div className="wrapper">
            {bookData.map((book, index) => (
              <React.Fragment key={index}>
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
                  <div className="title">
                    <span>{book.authors || "unknown"}</span>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Recomendation;
