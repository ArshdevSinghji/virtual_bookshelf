import { useEffect, useState } from "react";
import Recomendation from "./Recomendation";
import "../styles/bookForm.css";

const AddBookForm = (props) => {
  const { addBooks } = props;

  const [title, setTitle] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [bookData, setBookData] = useState([]);

  const handleBook = async (e) => {
    e.preventDefault();
    addBooks({ title });
    setTitle("");
  };

  useEffect(() => {
    if (title.trim() === "") {
      setBookData([]);
      setIsFetching(false);
      return;
    }

    const key = import.meta.env.VITE_GOOGLE_API_KEY;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${title}&filter=free-ebooks&key=${key}`;

    async function fetchingData() {
      try {
        setIsFetching(true);
        const response = await fetch(url);
        const data = await response.json();

        if (data.items && data.items.length > 0) {
          const bookDetails = data.items.map((item) => item.volumeInfo);
          setBookData(bookDetails);
        } else {
          setBookData([]);
        }
      } catch (err) {
        console.log(err);
        setBookData([]);
      } finally {
        setIsFetching(false);
      }
    }
    fetchingData();
  }, [title]);

  return (
    <div>
      <div className="input">
        <form onSubmit={handleBook}>
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </form>
      </div>
      <div>
        <Recomendation bookData={bookData} isFetching={isFetching} />
      </div>
    </div>
  );
};
export default AddBookForm;
