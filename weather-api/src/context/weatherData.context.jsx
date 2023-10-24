import { createContext, useEffect, useState } from "react";

import { fetchData } from "../fetchData";

export const WeatherDataContext = createContext({
  weatherData: null,
  weatherDataLocation: null,
});

// fetch weather data based on location

export const WeatherDataProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({});
  //   const [weatherDataLocation, setWeatherDataLocation] = useState({});

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

  useEffect(() => {
    const { latitude, longitude } = weatherData;
    
    const getFetchedData = async () => {
      const data = await fetchData(latitude, longitude);
      // setWeatherDataLocation(data);
      console.log(data);
    };

    getFetchedData();
  }, [weatherData]);

  // fetch location's weather data

  // useEffect(() => {
  //     const Wdata = fetchLocation().then(res => res.json()).then(data => data).catch(err => console.log(err))
  //     // setWeatherData(Wdata);
  //     console.log(Wdata);
  // }, []);

  const value = {
    weatherData,
    // weatherDataLocation
  };

  return (
    <WeatherDataContext.Provider value={value}>
      {children}
    </WeatherDataContext.Provider>
  );
};
