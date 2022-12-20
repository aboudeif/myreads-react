import React from "react";
import Book from "./Book";

const Shelf = ({ shelf, shelfs, books }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(
            (book) => (
              (
                book?.shelf === shelf && 
                <li>
                  <Book
                    key={book.id}
                    title={book.title}
                    cover={book.imageLinks?.thumbnail || book?.previewLink}
                    authors={book.authors}
                    shelfs={shelfs}
                    selectedShelf={book.shelf}
                  />
                </li>
              )
            )
          )}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
