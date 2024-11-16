import React, { createContext, useState } from "react";
const ReadingBooksContext = createContext();
const ReadingBooksProvider = ({ children }) => {
  const [readingBooks, setReadingBooks] = useState([]);

  const handleClick = (book) => () => {
    setReadingBooks([...readingBooks, book]);
  };

  return (
    <ReadingBooksContext.Provider value={{ readingBooks, handleClick }}>
      {children}
    </ReadingBooksContext.Provider>
  );
};

export { ReadingBooksContext, ReadingBooksProvider };
