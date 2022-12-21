import React from "react";
import Book from "./Book";

const Shelf = ({ showShelfs, books, showShelf, handelShelfChange }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{showShelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        {books.map(book => (
                
                  <Book
                    key={book.id}
                    book={book}
                    showShelfs={showShelfs}
                    showShelf={book.shelf}
                    handelShelfChange={handelShelfChange}
                  />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
