import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {

    return (
        <>
            <div className='Menu'>
                <Link to="/">Главная</Link>
                <Link to="/weather">Погода</Link>
                <Link to="/calculator">Калькулятор</Link>
                <Link to="/movie">Фильмы</Link>
                <Link to="/todo">Заметки</Link>
            </div>
        </>
    )
}

export default Nav