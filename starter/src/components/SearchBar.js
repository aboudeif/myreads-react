import { Link } from 'react-router-dom'

const SearchBar = ({ handelSearch }) => {   

  return (
    <div className="search-books-bar">
        <Link to="/" className="close-search" >Close</Link>
        
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => handelSearch(e.target.value)}
          />
        </div>
    </div>
    
  )
}

export default SearchBar