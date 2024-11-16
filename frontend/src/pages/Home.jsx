import React from "react";
import Bestsellers from "../component/Bestsellers";
import BookShelf from "../component/Bookshelf";
import Quotes from "../component/Quotes";
const Home = () => {
  return (
    <div>
      <BookShelf />
      <Quotes />
      <Bestsellers />
    </div>
  );
};

export default Home;
