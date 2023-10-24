import { useContext } from "react"; 

import "./App.scss";

import ForecastCard from "./components/forecastCard/forecastCard.component";
import { WeatherDataContext } from "./context/weatherData.context";
// require('dotenv').config();

const App = () => {
  // console.log(process.env.REACT_APP_API_KEY);
  return (
    <>
    <ForecastCard />
    </>
  );
}

export default App;
