import React from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'

const Search = ({ books, showShelves, handelShelfChange, handelSearch }) => {

  // handle search input
  const onSearch = (e) => {
    setTimeout(() => {
      const query = e.target.value.replace(/[^a-zA-Z0-9] /g, '').split(' ');
      handelSearch(...query);
    }, 500);
  };


  return (
    <>
    <div className="search-books-bar">
        <Link to="/" className="close-search" >Close</Link>
        
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => {
              clearTimeout(onSearch.timeout);
              return onSearch(e);
            }}
          />
        </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid">
         {/* check if books array is not empty */}
        { books?.length > 0 ?
        books?.map((book) => (
          
          <Book
          key={book.id}
          book={book}
          showShelves={showShelves}
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