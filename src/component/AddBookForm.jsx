import { useEffect, useState } from "react";
import Recomendation from "./Recomendation";
import "../styles/bookForm.css";

const AddBookForm = (props) => {
  const { addBooks } = props;

  const [title, setTitle] = useState("");

  const [bookData, setBookData] = useState([]);

  const handleBook = async (e) => {
    e.preventDefault();
    addBooks({ title });
    setTitle("");
  };

  useEffect(() => {
    console.log("useEffect called");

    if (title.trim() === "") {
      setBookData([]);
      return;
    }

    const key = import.meta.env.VITE_GOOGLE_API_KEY;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${key}`;

    async function fetchingData() {
      try {
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
        <Recomendation bookData={bookData} />
      </div>
    </div>
  );
};
export default AddBookForm;
