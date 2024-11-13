import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/Book.css";
const Book = () => {
  const location = useLocation();
  const { book } = location.state;

  const [author, setAuthor] = useState([]);
  const [showWiki, setShowWiki] = useState([]);
  const [moreByAuthor, setMoreByAuthor] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const handleMore = () => {
    setShowMore(!showMore);
  };
  const handleRead = () => {
    window.open(book.previewLink, "_blank");
  };
  const handleDownload = () => {
    console.log(book.accessInfo.pdf.downloadLink);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const key = import.meta.env.VITE_GOOGLE_API_KEY;
        const authResponse = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${book.authors[0]}`,
        );
        const wikiResponse = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${book.title}`,
        );
        const moreByAuthorResponse = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=inauthor:${book.authors[0]}&key=${key}`,
        );
        const auth = await authResponse.json();
        const wiki = await wikiResponse.json();
        const byauth = await moreByAuthorResponse.json();
        setMoreByAuthor(byauth.items.slice(0, 3));
        setAuthor(auth);
        setShowWiki(wiki);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="book-container">
      <div className="load-container">
        <div className="title-container">
          <div className="book-title book-border">
            <div className="details">
              <h2>{book.title}</h2>
              <p>
                By{" "}
                <span>
                  {book.authors && book.authors.length > 0
                    ? book.authors.join(",")
                    : "unknown"}
                </span>
                , {book.publishedDate}
              </p>
            </div>
            <div className="book-btn">
              <button className="btn" onClick={handleRead}>
                read
              </button>
              <button className="btn" onClick={handleDownload}>
                download
              </button>
            </div>
          </div>
          <div className="cover">
            <img src={book.imageLinks?.thumbnail} alt={book.title} />
          </div>
        </div>
        <hr className="hr" />
        <div className="grid-container">
          <div className="col1">
            <h3>About this edition</h3>
            <div className="edition book-border">
              <div className="edition-details">
                <div>
                  <p>Page count:</p>
                  <p>Publisher:</p>
                  <p>Author:</p>
                  <p>Published:</p>
                </div>
                <div>
                  <p>{book.pageCount}</p>
                  <p>
                    {Array.isArray(book.publisher) && book.publisher.length > 0
                      ? book.publisher.join(",")
                      : book.publisher || "unknown"}
                  </p>
                  <p>
                    {book.authors && book.authors.length > 0
                      ? book.authors.join(",")
                      : "unknown"}
                  </p>
                  <p>{book.publishedDate}</p>
                </div>
                <div>
                  <p>Language:</p>
                  <p>Maturity rating:</p>
                  <p>Rating:</p>
                </div>
                <div>
                  <p>{book.language}</p>
                  <p>{book.maturityRating}</p>
                  <p>{book.averageRating}</p>
                </div>
              </div>
              <div className="description">
                <div className="description-details">
                  <p>
                    {book.description
                      ? book.description
                      : "we are working on description..."}
                  </p>
                </div>
              </div>
              {showMore ? (
                <div>
                  <div className="wiki-data">
                    <p>{showWiki.extract}</p>
                  </div>
                  <div className="show-more" onClick={handleMore}>
                    <p>Show less</p>
                    <FontAwesomeIcon icon={faAngleUp} />
                  </div>
                </div>
              ) : (
                <div className="show-more" onClick={handleMore}>
                  <p>More about this edition</p>
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
              )}
            </div>
          </div>
          <div className="col2">
            <h3>Author</h3>
            <div className="author">
              <div className="author-details book-border">
                <div>
                  <div>
                    <h4>{author.title}</h4>
                    <p>{author.description}</p>
                  </div>
                  <div>
                    <img src={author.thumbnail?.source} alt={author.title} />
                  </div>
                </div>
                <div>
                  <p>{author.extract}</p>
                </div>
              </div>
            </div>
            <h3>More By Author</h3>
            <div className="more-by-author book-border">
              {moreByAuthor.map((book, index) => (
                <div className="more-by-author-details" key={index}>
                  <div>
                    <h4>{book.volumeInfo.title}</h4>
                    <p>
                      By{" "}
                      <span>
                        {book.volumeInfo.authors &&
                        book.volumeInfo.authors.length > 0
                          ? book.volumeInfo.authors.join(",")
                          : "unknown"}
                      </span>
                      , {book.volumeInfo.publishedDate}
                    </p>
                  </div>
                  <div>
                    <img
                      src={book.volumeInfo.imageLinks?.thumbnail}
                      alt={book.volumeInfo.title}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
