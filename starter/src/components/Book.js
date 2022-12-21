
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
            backgroundImage: `url(${
              props.book.imageLinks?.thumbnail || ""
            })`,
          }}
        ></div>
        <div className="book-shelf-changer">
        <select defaultValue={props.showShelf || "none"} onChange={e => props.handelShelfChange(props.book,e.target.value)}> 
          <option value="title" disabled>
            Move to...
          </option>
        {props.showShelfs?.length > 0 ?
        props.showShelfs.map((shelf) => (
          <option key={props.book.id+'-'+shelf} value={shelf} >{shelf}</option>
        )) : null}
          <option value="none">None</option>
        </select>
      </div>
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">{props.book.authors}</div>
    </div>
    </li>
  );
};

export default Book;
