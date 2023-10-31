import { createContext, useEffect, useState } from "react";

import { fetchData } from "../fetchData";
import { fetchForeCastData } from "../fetchData";

export const WeatherDataContext = createContext({
  locationData: null,
  weatherData: null,
  padDates: () => null,
  // foreCast: {},
});

const padDates = (num) => {
  return num.toString().padStart(2, '0');
}

// const fetchIconData = (data) => {
//     try {
//       const weatherText = current.condition.text.toLowerCase();
//       const joinedText = weatherText.split(" ").join("-");
//       await setMainWeatherIcon(joinedText); // Update mainWeatherIcon with the fetched icon data
//     } catch (error) {
//       console.error("Error fetching icon data:", error);
//     }
//     console.log(location);
//   };

// fetch weather data based on location

export const WeatherDataProvider = ({ children }) => {
  const [locationData, setLocationData] = useState({});
    const [weatherData, setWeatherData] = useState({});
    const { location, current } = weatherData;
  const [foreCast, setForeCast] = useState({});

  useEffect(() => {
    const fetchLocation = async () => {
      await navigator.geolocation.getCurrentPosition(
        pos => {
          // Handle successful geolocation here
          setLocationData(pos.coords);
        },
        err => {
          // Handle geolocation error here
          setLocationData(err);
        }
      );
    };
    fetchLocation();
  }, []);



  useEffect(() => {
    const { latitude, longitude } = locationData;

    const getFetchedData = async () => {

      const data = latitude && await fetchData(latitude.toFixed(2), longitude.toFixed(2)) || "Loading...";
      // setlocationDataLocation(data);
      setWeatherData(data)
    };

    getFetchedData();
  }, [locationData]);

  
  //   if (current) {
  //     const fetchWeatherIcon = async () => {
  //       try {
  //         const weatherText = current.condition.text.toLowerCase();
  //         const joinedText = weatherText.split(" ").join("-");
  //         await setMainWeatherIcon(joinedText); // Update mainWeatherIcon with the fetched icon data
  //       } catch (error) {
  //         console.error("Error fetching icon data:", error);
  //       }
  //       console.log(location);
  //     };

  // fetch location's weather data

  // useEffect(() => {
  //     const Wdata = fetchLocation().then(res => res.json()).then(data => data).catch(err => console.log(err))
  //     // setlocationData(Wdata);
  //     console.log(Wdata);
  // }, []);

  const value = {
    locationData,
    weatherData,
    padDates,
    // foreCast,
  };

  return (
    <WeatherDataContext.Provider value={value}>
      {children}
    </WeatherDataContext.Provider>
  );
};
