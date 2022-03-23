import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import SearchYear from './components/SearchYear'
import Movies from './components/Movies'
import NoResults from './components/NoResults'

function App() {
  const [date, setDate] = useState(null)
  const [movies, setMovies] = useState([])
  // {
  //   "Title": "Waterworld",
  //   "Year": 2015,
  //   "imdbID": "tt0114898"
  // }, {
  //   "Title": "spiderMan",
  //   "Year": 2015,
  //   "imdbID": "tt0189200"
  // }, {
  //   "Title": "IronMan",
  //   "Year": 2009,
  //   "imdbID": "tt2670548"
  // }
  // ])

  // enter year
  const enterYear = (year) => {
    setDate(year.date)
  }

  //fetch movies from api
  const fetchMovies = async (date) => {
    // console.log(`https://jsonmock.hackerrank.com/api/movies?Year=${date}`)
    const res = await fetch(`https://jsonmock.hackerrank.com/api/movies?Year=${date}`)
    const dataJson = await res.json();
    // console.log(dataJson.data)
    if (dataJson.data) {
      setMovies(dataJson.data)
    }

  }
  useEffect(() => {
    fetchMovies(date)
  }, [date])

  return (
    <div className='container' >
      <Header />
      <SearchYear onAdd={enterYear} />
      {/* <Movies moviesData={movies.filter((list) => list.Year == date)} /> */}
      {/* movies.length> 0 ? (  <Movies moviesData={movies} />) : ('No Movies Found') */}
      {date === null ? '' : ((movies.length > 0) ? (<Movies moviesData={movies} />) : <NoResults />)}
    </div>
  );
}

export default App;
