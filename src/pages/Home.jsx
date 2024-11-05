import React from 'react';
import Bestsellers from '../component/Bestsellers';
import BookShelf from '../component/Bookshelf';
const Home = () => {
  return (
    <div>
        <BookShelf/>
        <Bestsellers/>
    </div>
  );
};

export default Home;