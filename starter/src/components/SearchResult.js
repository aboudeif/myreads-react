import React from 'react'
import Book from './Book'

const SearchResult = ({ books, shelfs }) => {
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        { books?.length > 0 ?
        books?.map((book) => (
          <Book
          key={book.id}
          title={book.title}
          cover={book.imageLinks?.thumbnail || book?.previewLink}
          authors={book.authors}
          shelfs={shelfs}
          selectedShelf={book.shelf}
          id={book.id}
        />)) 
        : <p>No books found</p> }
      </ol>
    </div>
  )
}

export default SearchResult