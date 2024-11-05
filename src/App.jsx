import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./pages/Nav";
import Footer from "./pages/Footer";
import Book from "./pages/Book";
import Home from "./pages/Home";
import "./App.css";
function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/book" element={<Book />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
