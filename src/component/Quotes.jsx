import { useEffect, useState } from "react";
import "../styles/Quote.css";
const Quotes = () => {
  const [randomQuote, setRandomQuote] = useState({});

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch(
          "https://recite.onrender.com/api/v1/quotes",
        );
        const data = await response.json();
        pickRandomQuote(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuotes();
  }, []);

  const pickRandomQuote = (data) => {
    const randomIndex = Math.floor(Math.random() * data.total);
    setRandomQuote(data.quotes[randomIndex]);
  };

  return (
    <div>
      <div className="quote-container">
        <div className="quote">
          <p>{randomQuote.quote}</p>
        </div>
        <div className="quote-author">
          <p>-{randomQuote.author}</p>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
