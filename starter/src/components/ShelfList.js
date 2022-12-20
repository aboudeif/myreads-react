import React from 'react'
import Shelf from './Shelf'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import * as BooksAPI from '../BooksAPI'

const ShelfList = ({ shelfs }) => {

  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks(books);
    });
  }, []);

  
  return (
    <>
    <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content"></div>
      {shelfs.map((shelf) => (
        <Shelf key={shelf} shelf={shelf} shelfs={shelfs} books={books} />
      ))}
    </div>
    <Link to={"/search"} className="open-search">
    Add a book
    </Link>
    </>
  )
}

export default ShelfList