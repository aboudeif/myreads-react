import React from "react";

const BookShelfChanger = (props) => {
  return (
    <div className="book-shelf-changer">
      <select
        defaultValue={props.book.shelf || "none"}
        // set the value of the select to the shelf of the book
        onChange={(e) => props.handelShelfChange(props.book, e.target.value)}
      >
        <option value="title" disabled>
          {" = Move to..."}
        </option>
        {props.showShelves?.length > 0
          ? props.showShelves.map((shelf) => (
              <option key={props.book.id + "-" + shelf} value={shelf}>
                {(shelf === props.book.shelf ? "✓ " : "   ") + shelf}
              </option>
            ))
          : null}
        <option value="none">{(props.book.shelf === "none" ? "✓ " : "   ") +"none"}</option>
      </select>
    </div>
  );
};

export default BookShelfChanger;
