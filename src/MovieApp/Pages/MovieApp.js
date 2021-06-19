import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../../components/Nav'
import './MovieApp.css'
import Movie from '../Movie'
import Search from '../Search'


const MOVIE_API_URL = "https://www.omdbapi.com/?s=marvel&apikey=49eb131b"

const MovieApp = () => {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const [errorMessage, setErrorMesage] = useState(null)

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search)
        setLoading(false)
      })
  }, [])

  const search = searchValue => {
    setLoading(true)
    setErrorMesage(null)

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=49eb131b`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === 'True') {
          setMovies(jsonResponse.Search)
          setLoading(false)
        } else {
          setErrorMesage(jsonResponse.Error)
          setLoading(false)
        }
      })
  }

  return (
    <>
      <Nav />
      <div className="MovieApp">
        <h2>Movie App</h2>
        <Search search={search} />
        <p className='App-intro'>Sharing a few of our favorite movies</p>
        <div className='movies'>
          {loading && !errorMessage ? (
            <span>loading...</span>
          ) : errorMessage ? (
            <div className='errorMessage'>{errorMessage}</div>
          ) : (
            movies.map((movie) => (
              <Link to={'/movie/' + movie.imdbID}>
                <Movie
                  key={movie.imdbID}
                  movie={movie}
                />
              </Link>
            ))
          )}
        </div>
      </div >
    </>
  );
}

export default MovieApp;
