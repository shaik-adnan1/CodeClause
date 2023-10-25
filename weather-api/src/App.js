import { useContext } from "react";

import "./App.scss";

import WeatherInfoCard from "./components/weatherInfoCard/WeatherInfoCard";
import { WeatherDataContext } from "./context/weatherData.context";
// require('dotenv').config();

const App = () => {
  // console.log(process.env.REACT_APP_API_KEY);
  return (
    <>
      <main className='app_container'>
        <WeatherInfoCard />
      </main>
    </>
  );
};

export default App;
