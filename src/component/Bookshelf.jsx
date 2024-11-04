import { useState } from "react";
import AddBookForm from "./AddBookForm";

const BookShelf = () => {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  return (
    <div>
      <AddBookForm addBooks={addBook} />
    </div>
  );
};

export default BookShelf;
