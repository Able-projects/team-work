import {BrowserRouter, Route} from 'react-router-dom'
import WeatherApp from './weather/weather'
import Calculator from './calculator/calculator'
function App() {
    return(
      <BrowserRouter>
        <Route exact path='/weather' component={WeatherApp}/>
        <Route exact path='/calculator' component={Calculator}/>
      </BrowserRouter>
    )
}
export default App;
