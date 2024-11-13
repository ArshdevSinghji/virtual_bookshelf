import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./pages/Nav";
import Footer from "./pages/Footer";
import Book from "./pages/Book";
import Home from "./pages/Home";
import { ReadingBooksProvider } from "./context/ReadingBooksContext";
import "./App.css";
import WantToRead from "./pages/WantToRead";
function App() {
  return (
    <Router>
      <ReadingBooksProvider>
        <div>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<Book />} />
            <Route path="/readingBooks" element={<WantToRead />} />
          </Routes>
          <Footer />
        </div>
      </ReadingBooksProvider>
    </Router>
  );
}

export default App;
