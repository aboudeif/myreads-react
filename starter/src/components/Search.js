import React from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'

const Search = ({ books, showShelfs, handelShelfChange, handelSearch }) => {
  return (
    <>
    <div className="search-books-bar">
        <Link to="/" className="close-search" >Close</Link>
        
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => handelSearch(e.target.value)}
          />
        </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid">
        { books?.length > 0 ?
        books?.map((book) => (
          
          <Book
          key={book.id}
          book={book}
          showShelfs={showShelfs}
          showShelf={book.shelf}
          handelShelfChange={handelShelfChange}
        />
      
        )) 
        : <p>No books found</p> }
      </ol>
    </div>
    </>
  )
}

export default Search