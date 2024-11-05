import { useState, useEffect } from "react";
import "../styles/Bestseller.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const Bestsellers = () => {
  const [Bestsellers, setBestsellers] = useState([]);
  const [booksData, setBooksData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const key = import.meta.env.VITE_NYT_API_KEY;
    const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${key}`;
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("url fetched");
        if (data.results && data.results.books) {
          const top5Books = data.results.books.slice(0, 5);
          setBestsellers(top5Books);
        } else {
          setBestsellers([]);
        }
      } catch (err) {
        console.log(err);
        setBestsellers([]);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const key = import.meta.env.VITE_GOOGLE_API_KEY;
    const fetchGoogle = async () => {
      try {
        const books = Bestsellers.map(async (book) => {
          const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${book.title}&key=${key}`
          );
          const data = await response.json();
          return data.items ? data.items[0] : null;
        });
        const booksData = await Promise.all(books);
        setBooksData(booksData);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setBooksData([]);
      }
    };
    if (Bestsellers.length > 0) fetchGoogle();
  }, [Bestsellers]);

  return (
    <div className="ny-container">
      <div className="ny-title">
        <h1>Bestsellers</h1>
      </div>
      {loading ? (<div className="loading"><FontAwesomeIcon icon={faCircleNotch} spin/></div>) :
      (<div className="bestSellers">
        {booksData.map((book, index) => (
          <div key={index} className="books">
            {book && (
              <div className="book-container">
                <div className="book-thumbnail">
                  <img
                    src={book.volumeInfo.imageLinks?.thumbnail}
                    alt={book.volumeInfo.title}
                  />
                  <div className="overlay">
                    <div className="text">
                      <h3>{book.volumeInfo.title}</h3>
                      <p>{book.volumeInfo.authors?.join(", ")}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>)}
    </div>
  );
};

export default Bestsellers;
