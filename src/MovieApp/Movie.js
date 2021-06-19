import React from 'react'

const DEFAULT_PLACEHOLDER_IMAGE = '/images/noPoster.jpg'

const Movie = ({ movie }) => {
    const poster = movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster

    return (
        <div>
            <div className='movie' >
                <div>
                    <img
                        width='100%'
                        height='450px'
                        alt={`The movie title: ${movie.Title}`}
                        src={poster}
                    />
                </div>
                <h2 max-lenght='20' >{movie.Title}</h2>
                <p>({movie.Year})</p>
            </div>
        </div >
    )
}
export default Movie
