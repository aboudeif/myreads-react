import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "./components/Search";
import ShelfList from "./components/ShelfList";
import { getAll, update, search } from "./BooksAPI";

function App() {
  // shelves to show
  const showShelves = ["currentlyReading", "wantToRead", "read"];

  // a state to hold moved book and shelf
  const [bookShelf, setBookShelf] = useState({ book: "", shelf: "" });
  // a state to hold search query
  const [query, setQuery] = useState("");
  // a state to hold search result
  const [searchResult, setSearchResult] = useState([]);
  // a state to hold books in shelves
  const [books, setBooks] = useState([]);

  // set search input state
  const handelSearch = (query) => setQuery(query);

  // set moved book and shelf state
  const handelShelfChange = (book, shelf) =>
    setBookShelf({ book: book, shelf: shelf });

  // return books with shelf to show in search result
  const booksWithShelf = (givenBooks, books) => {
    return givenBooks.map((givenBook) => {
      const bookInShelf = books.find((book) => book.id === givenBook.id);
      givenBook.shelf = bookInShelf ? bookInShelf.shelf : "none";
      return givenBook;
    });
  };

  // get all books in shelves
  useEffect(() => getAll().then((books) => setBooks(books)), []);

  // update books in shelves
  useEffect(() => {
    if (!bookShelf.book) return;

    update(bookShelf.book, bookShelf.shelf);
    const movedBook = bookShelf.book;
    movedBook.shelf = bookShelf.shelf;
    setBooks((prev) =>
      prev.filter((book) => book.id !== movedBook.id).concat(movedBook)
    );
  }, [bookShelf]);

  // search for books
  useEffect(() => {
    if (!query) return setSearchResult([]);
    search(query.toString(), 20)
      .then((books) =>
        setSearchResult(Array.isArray(books) ? books : [].push(books))
      )
      .catch((error) => console.log(error));
  }, [query]);

  return (
    <Routes>
      {/* search page */}
      <Route
        path="/search"
        element={
          <div className="search-books">
            <Search
              books={
                searchResult.length > 0
                  ? booksWithShelf(searchResult, books)
                  : []
              }
              showShelves={showShelves}
              handelShelfChange={handelShelfChange}
              handelSearch={handelSearch}
            />
          </div>
        }
      />
      {/* shelves page */}
      <Route
        path="/"
        element={
          <>
            <ShelfList
              books={books}
              showShelves={showShelves}
              handelShelfChange={handelShelfChange}
            />
            <Link key={"search"} to={"/search"} className="open-search">
              Add a book
            </Link>
          </>
        }
      />
    </Routes>
  );
}

export default App;
