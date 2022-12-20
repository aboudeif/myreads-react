import "./App.css";
import ShelfList from "./components/ShelfList";
import { Route, Routes } from "react-router-dom";
import BookSearch from "./components/BookSearch";

function App() {
  //const [showSearchPage, setShowSearchpage] = useState(false);
  const shelfs = ["Currently Reading", "Want to Read", "Read"];
  return (
    <Routes>
      <Route path="/search" element={
        <div className="search-books">
            <BookSearch shelfs={shelfs} />
        </div>
      } />
      <Route path="/" element={
        <>
        <ShelfList shelfs={shelfs} />
        </>
      } />
    </Routes>
  );
}

export default App;
