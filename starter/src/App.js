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
    (async () => {
    const newShelves = await update(bookShelf.book, bookShelf.shelf);
    console.log(newShelves);
    setBooks((previousBooks) => 
    previousBooks.filter((book) => 
    book.shelf = Object.keys(newShelves).filter((newShelf) => newShelf.includes(book.id)).key|| book.shelf
    ).map(book => book))
    })();
  }, [bookShelf]);
  //     newShelf =>
  //     books
  //   )
  //   //.then(newShelves => setBooks((prev,newShelves) => prev?.map(book => newShelves.map(newShelf => book.shelf = newShelf?.includes(book.id) ? newShelf : book.shelf))))
  // }, [bookShelf]);

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
          {books?.length > 0 ?
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
          </> : <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loading" className="img-loading" />
          }</>
          
              )}
      />
    </Routes>
  );
}

export default App;
