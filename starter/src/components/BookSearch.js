import React, { useEffect } from 'react'
import SearchResult from './SearchResult'
import SearchBar from './SearchBar'
import { search } from '../BooksAPI'

const BookSearch = ({ shelfs }) => {
  const [query, setQuery] = React.useState('')
  const [searchResult, setSearchResult] = React.useState([])
  // const [loading, setLoading] = React.useState(false)

  useEffect(() => {
    return setTimeout(() => {
    if(!query) return setSearchResult([])
    search(query.toString(), 5000)
    .then((books) =>  setSearchResult(Array.isArray(books) ? books : [].push(books)))
    .catch((error) => console.log(error))
  }, 500
  )}, [query])

  const handelSearch = 
    (query) => setQuery(query)

  return (
    <div>
      <SearchBar handelSearch={handelSearch} />
      <SearchResult books={searchResult} shelfs={shelfs} />
    </div>
  )
}

export default BookSearch