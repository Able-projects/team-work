import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import WeatherApp from './weather/weather'
import Calculator from './calculator/calculator'
import MoviePage from './MovieApp/Pages/MoviePage'
import MovieApp from './MovieApp/Pages/MovieApp'
import Nav from './components/Nav'


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={Nav} />
                <Route exact path='/weather' component={WeatherApp} />
                <Route exact path='/calculator' component={Calculator} />
                <Route exact path={'/movie'} component={MovieApp} />
                <Route path={'/movie/:id'} component={MoviePage} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;