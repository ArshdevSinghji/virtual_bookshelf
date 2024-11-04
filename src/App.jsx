import BookShelf from "./component/Bookshelf";
import "./App.css";
import Nav from "./pages/Nav";
import Footer from "./pages/Footer";
import Bestsellers from "./component/Bestsellers";
function App() {
  return (
    <div>
      <Nav />
      <BookShelf />
      <Bestsellers />
      <Footer />
    </div>
  );
}

export default App;
