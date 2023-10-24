import { createContext, useEffect, useState } from "react";

export const WeatherDataContext = createContext({
  weatherData: null,
});

// function gotPosition(position) {
//     return position.coords;
// }

//     // fetch current location;

//     const fetchLocation = async () => {

//     }

export const WeatherDataProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const fetchLocation = async () => {
      await navigator.geolocation.getCurrentPosition(
        pos => {
          // Handle successful geolocation here
          setWeatherData(pos.coords);
        },
        err => {
          // Handle geolocation error here
          setWeatherData(err.message);
        }
      );
    };
    fetchLocation();
  }, []);

  // fetch location's weather data

  // useEffect(() => {
  //     const Wdata = fetchLocation().then(res => res.json()).then(data => data).catch(err => console.log(err))
  //     // setWeatherData(Wdata);
  //     console.log(Wdata);
  // }, []);

  const value = {
    weatherData,
  };

  return (
    <WeatherDataContext.Provider value={value}>
      {children}
    </WeatherDataContext.Provider>
  );
};
