import React, { useState, useEffect } from 'react'
import Nav from '../../components/Nav'
import './MoviePage.css'

// {
//     Title: "Ku! Kin-dza-dza",
//     Year: "2013",
//     Rated: "N/A",
//     Released: "11 Apr 2013",
//     Runtime: "96 min",
//     Genre: "Animation, Comedy, Sci-Fi",
//     Director: "Georgiy Daneliya, Tatyana Ilina",
//     Writer: "Georgiy Daneliya (based on the story of the same name by), Revaz Gabriadze (based on the story of the same name by), Georgiy Daneliya (screenplay), Aleksandr Adabashyan (screenplay), Andrey Usachyov (screenplay), Tatyana Ilina (collaboration), Igor Akhmedov (collaboration)",
//     Actors: "Nikolay Gubenko, Ivan Tsehmistrenko, Andrey Leonov, Aleksey Kolgan",
//     Plot: "Aspiring young DJ Tolik and world-renowned cellist Vladimir Chizhov meet a barefoot man on a busy Moscow street. They press a button on a peculiar apparatus and teleport to the desert ...",
//     Language: "Russian",
//     Country: "Russia",
//     Awards: "2 wins & 1 nomination.",
//     Poster: "https://m.media-amazon.com/images/M/MV5BMjE1OTQ0NTc0OF5BMl5BanBnXkFtZTgwMTc0Njg5MTE@._V1_SX300.jpg",
//     Ratings: [
//         {
//             Source: "Internet Movie Database",
//             Value: "6.0/10"
//         }
//     ],
//     Metascore: "N/A",
//     imdbRating: "6.0",
//     imdbVotes: "820",
//     imdbID: "tt2659374",
//     Type: "movie",
//     DVD: "N/A",
//     BoxOffice: "N/A",
//     Production: "N/A",
//     Website: "N/A",
//     Response: "True"
// }

// fetch(`http://www.omdbapi.com/?i=tt2659374&apikey=49eb131b`)

const MoviePage = (props) => {
    const [title, useTitle] = useState()
    const [poster, usePoster] = useState()
    const [imdbRating, useImdbRating] = useState()
    const [runtime, useRuntime] = useState()
    const [released, useReleased] = useState()
    const [genre, useGenre] = useState()
    const [country, useCountry] = useState()
    const [language, useLanguage] = useState()
    const [director, useDirector] = useState()
    const [actors, useActors] = useState()
    const [plot, usePlot] = useState()

    // const url = 'https://www.omdbapi.com/?i=tt2659374&apikey=49eb131b'
    const id = props.match.params.id

    const Card = async () => {

        const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=49eb131b&plot=full`);
        const responseJson = await response.json();
        // console.log(responseJson);

        useTitle(responseJson.Title);
        usePoster(responseJson.Poster);
        useImdbRating(responseJson.imdbRating);
        useRuntime(responseJson.Runtime);
        useReleased(responseJson.Released);
        useGenre(responseJson.Genre);
        useCountry(responseJson.Country);
        useLanguage(responseJson.Language);
        useDirector(responseJson.Director);
        useActors(responseJson.Actors);
        usePlot(responseJson.Plot);
    }
    useEffect(() => {
        Card();
        // eslint-disable-next-line 
    }, []);

    return (
        <div className='Page'>
            <Nav />
            <h1>{title}</h1>
            <div className='MoviePage'>
                <div className='Poster'>
                    <img src={poster} alt='Poster' />
                </div>
                <div className='tutorial'>
                    <h3>Рейтинг IMDB : <span>{imdbRating}</span></h3>
                    <h3>Длительность : <span>{runtime}</span></h3>
                    <h3>Выпуск : <span>{released}</span></h3>
                    <h3>Жанр : <span>{genre}</span></h3>
                    <h3>Страна : <span>{country}</span></h3>
                    <h3>Языки : <span>{language}</span></h3>
                    <h3>Режиссер : <span>{director}</span></h3>
                    <h3>Актерский состав : <span>{actors}</span></h3>
                </div>
            </div>
            <div className='plot'>
                <p>Сюжет: <span>"{plot}"</span></p>
            </div>
        </div>
    )
}

export default MoviePage