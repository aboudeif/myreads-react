import React from "react";
import Book from "./Book";

const Shelf = ({ showShelfs, books, showShelf, handelShelfChange }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{showShelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        {books?.length > 0 ?
            <>
        {books.map(book => (
                
                  <Book
                    key={book.id}
                    book={book}
                    showShelfs={showShelfs}
                    showShelf={book.shelf}
                    handelShelfChange={handelShelfChange}
                  />
          ))}
          </> : <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loading" className="img-loading" />
          }
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
