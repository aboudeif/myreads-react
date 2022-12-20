import React from 'react'

const BookShelfChanger = ({ selectedShelf, shelfs, id }) => {
  return (
    <div className="book-shelf-changer">
      <select defaultValue={selectedShelf}>
        <option value="none" disabled>
          Move to...
        </option>
       {shelfs.map((shelf) => (
        <option key={id+'-'+shelf} value={shelf}>{shelf}</option>
      ))}
        <option value="none">None</option>
      </select>
    </div>
  )
}

export default BookShelfChanger