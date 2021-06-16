import {BrowserRouter, Route} from 'react-router-dom'
import WeatherApp from './weather/weather'
function App() {
    return(
      <BrowserRouter>
        <Route exact path='/weather' component={WeatherApp}/>
      </BrowserRouter>
    )
}
export default App;
