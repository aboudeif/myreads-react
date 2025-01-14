import BookShelfChanger from "./BookShelfChanger";

const Book = (props) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${props.book.imageLinks?.thumbnail || ""})`,
            }}
          ></div>
          <BookShelfChanger
            book={props.book}
            showShelves={props.showShelves}
            handelShelfChange={props.handelShelfChange}
          />
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors}</div>
      </div>
    </li>
  );
};

export default Book;
