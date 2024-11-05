import React from 'react'
import {useLocation} from 'react-router-dom'
const Book = () => {
    const location = useLocation();
    const { book } = location.state
  return (
    <div>
      <h1>{book.title}</h1>
      <img src={book.imageLinks?.thumbnail} alt={`${book.title} cover`} />
      <p>{book.authors && book.authors.length > 0 ? book.authors.join(",") : "unknown"}</p>
      <p>{book.description}</p>
    </div>
  )
}

export default Book