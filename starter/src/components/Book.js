import React from 'react'
import BookShelfChanger from './BookShelfChanger'


const Book = ({ cover, title, authors, shelfs, selectedShelf, id }) => {
  return (
    
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage:
              `url(${cover || ''})`,
          }}
        ></div>
        <BookShelfChanger key={id+'-controller'} id={id} shelfs={shelfs} selectedShelf={selectedShelf} />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  )
}

export default Book