import React from "react";
import Shelf from "./Shelf";

const ShelfList = ({ books, showShelves, handelShelfChange }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content"></div>
      {showShelves.map((showShelf) => (
        <Shelf
          key={showShelf}
          showShelf={showShelf}
          showShelves={showShelves}
          // filter books by shelf
          books={
            (Array.isArray(books) &&
              books
                .filter((book) => book.shelf === showShelf)
                .map((book) => book)) ||
            []
          }
          handelShelfChange={handelShelfChange}
        />
      ))}
    </div>
  );
};

export default ShelfList;
