import "./WeatherInfoCard.style.scss";

import { useContext, useEffect, useState } from "react";
import { WeatherDataContext } from "../../context/weatherData.context";

// import { fetchIconData } from "../../fetchData";

const WeatherInfoCard = () => {
  const [mainWeatherIcon, setMainWeatherIcon] = useState('rainy');

  const { locationData, weatherData, padDates } =
    useContext(WeatherDataContext);
  // const { latitude, longitude } = locationData;
  const { location, current } = weatherData;
  // console.log(current && current)

  // const locationSearchHandler = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.value)
  // }

  const currentDate = new Date();
  const fullDate = `${padDates(currentDate.getDay())}/${padDates(
    currentDate.getMonth()
  )}/${padDates(currentDate.getFullYear())}`;

  const time =
    padDates(currentDate.getHours()) + ":" + padDates(currentDate.getMinutes());

  // fetching icons data

  useEffect(() => {
    if (current) {
      const fetchWeatherIcon = async () => {
        try {
          await setMainWeatherIcon(current.condition.text.toLowerCase()); // Update mainWeatherIcon with the fetched icon data
        } catch (error) {
          console.error("Error fetching icon data:", error);
        }
      };
      fetchWeatherIcon();
    }
  }, [current]);
  return (
    // useEffect(() => {
    // }, [weatherData])
    //

    <>
      {current ? (
        <div className='weatherInfoCard'>
          <div className='mainWeatherData'>
            <div className='current_data_time'>
              <h3>Current weather</h3>
              <span>{fullDate} </span>
              <span>
                {time} {time > 12 ? "AM" : "PM"}
              </span>
            </div>
            <div className='weatherDetails'>
              <div className='temp_main'>
                <span>
                  <img
                  className='weatherIcon'
                  src={require(`../../assets/weather_icons/${
                    mainWeatherIcon
                  }_day.png`)}
                  alt=''
                />
                </span>
                {/* <span>Image</span> */}
                <span className='current_temp'>
                  {current && current.temp_c}
                  <sup>o</sup>
                  <span>C</span>
                </span>
              </div>
              <div className='temp_conditions'>
                <p>{current && `Mostly ${current.condition.text}`}</p>
                <p>{current && `Feels like ${current.feelslike_c}`}</p>
              </div>
            </div>
            <p className='weather_description'>
              {current &&
                `There will be mostly ${current.condition.text} skies. The high will be ${current.temp_c}`}
              <sup>o</sup>C
            </p>
          </div>
        </div>
      ) : (
        <div>
          {" "}
          <p>data loading...</p>
        </div>
      )}
    </>
  );
};
export default WeatherInfoCard;
