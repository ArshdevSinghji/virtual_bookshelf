import React, { useContext } from "react";
import { ReadingBooksContext } from "../context/ReadingBooksContext";

const WantToRead = () => {
  const { readingBooks } = useContext(ReadingBooksContext);
  console.log(readingBooks);
  return (
    <div>
      {readingBooks.length > 0 ? (
        <div>
          {readingBooks.map((book, index) => {
            return (
              <div key={index}>
                <h3>{book.title}</h3>
                <p>
                  {book.authors && book.authors.length > 0
                    ? book.authors.join(",")
                    : "unknown"}
                </p>
                <img src={book.imageLinks?.thumbnail} alt={book.title} />
              </div>
            );
          })}
        </div>
      ) : (
        <p>No books to read</p>
      )}
    </div>
  );
};

export default WantToRead;
