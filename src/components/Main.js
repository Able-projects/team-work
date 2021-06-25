import React from "react"
import Nav from "./Nav"
import './main_movies.css'

export default function Main() {
  return (
    <div>
      <Nav />
      <div className="main_todo_list"></div>
      <div className="main_wheather"></div>
      <div className="main_calculator"></div>
      <div className="main_movies">
        <h2>Превью приложения Movie App</h2>
        <div className='image_movies'>
          <img src='https://img.omdbapi.com/?i=tt2659374&apikey=49eb131b' alt='image_movie' />
          <div className='tutotial_movies'>
            <h3>Хочешь найти любимый фильм, но забыл полное название?!</h3>
            <h4>Достаточно ввести слово из названия фильма.</h4>
            <h4>И это еще не все, нажми на название или картинку фильма для подробного ознакомления.</h4>
            <h4>Приложение построено на Хуках с запросами API на сайт
              &nbsp;
              <a href='https://www.omdbapi.com/'>OMDB</a>
            </h4>
            <h5>Если понравилось приложение поставьте лайк <a href="/">Диане</a> присоединяйтесь к нам в телеграмм канале, и не забудьте, что: <span>"Все в ваших руках"</span>. PS: Arman</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
