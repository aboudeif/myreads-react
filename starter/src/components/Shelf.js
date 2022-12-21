import React from "react";
import Book from "./Book";

const Shelf = ({ showShelves, books, showShelf, handelShelfChange }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">
        {/* handel shelves title */}
        {showShelf.replace(/([A-Z])/g, " $1").toUpperCase()}
      </h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books?.length > 0 ? (
            <>
              {books.map((book) => (
                <Book
                  key={book.id}
                  book={book}
                  showShelves={showShelves}
                  handelShelfChange={handelShelfChange}
                />
              ))}
            </>
          ) : (
            // show loading gif
            <img
              src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
              alt="loading"
              className="img-loading"
            />
          )}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
