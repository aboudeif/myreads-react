import "./App.css";
import { Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import { getAll, update, search } from "./BooksAPI";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shelf from "./components/Shelf";

function App() {
  const showShelfs = ["currentlyReading", "wantToRead", "read"];

  const [bookShelf, setBookShelf] = useState({'book':'', 'shelf':''});
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [books, setBooks] = useState([]);

  const handelSearch = (query) => setQuery(query);

  const handelShelfChange = (book, shelf) => 
    setBookShelf({'book':book, 'shelf':shelf});


  useEffect(() => 
    getAll().then((books) => setBooks(books))
  , []);

  useEffect(() => {
    if(!bookShelf.book) return; 
    
    update(bookShelf.book, bookShelf.shelf);
    const movedBook = bookShelf.book;
    movedBook.shelf = bookShelf.shelf;
    setBooks(prev => prev.filter(book => book.id !== movedBook.id).concat(movedBook));
    
  }, [bookShelf]);
 
  useEffect(() => {
    return setTimeout(() => {
      if (!query) return setSearchResult([]);
      search(query.toString(), 20)
        .then((books) =>
          setSearchResult(Array.isArray(books) ? books : [].push(books))
        )
        .catch((error) => console.log(error));
    }, 500);
  }, [query]);

  return (
    <Routes>
      <Route
        path="/search"
        element={
          <div className="search-books">
            <Search
              books={searchResult}
              showShelfs={showShelfs}
              handelShelfChange={handelShelfChange}
              handelSearch={handelSearch}
            />
          </div>
        }
      />
      <Route
        path="/"
        element={(
          
          <>
          
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content"></div>
              {Array.isArray(books) && console.log(books)}
              {showShelfs.map((showShelf) => (
              
                <Shelf
                  key={showShelf}
                  showShelf={showShelf}
                  showShelfs={showShelfs}
                  books={(Array.isArray(books) && books.filter(book => book.shelf === showShelf).map(book => book)) || []}
                  handelShelfChange={handelShelfChange}
                />
              ))}
            </div>
            <Link key={'search'} to={"/search"} className="add-button">
              Add a book
            </Link>
          </>
          
          )}
      />
    </Routes>
  );
}

export default App;
