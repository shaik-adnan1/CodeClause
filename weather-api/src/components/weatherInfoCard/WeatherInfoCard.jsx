import "./WeatherInfoCard.style.scss";

import { useContext, useEffect, useState } from "react";
import { WeatherDataContext } from "../../context/weatherData.context";
import { fetchIconData } from "../../fetchData";

const WeatherInfoCard = () => {
  const [mainWeatherIcon, setMainWeatherIcon] = useState();

  const { locationData, weatherData, padDates } =
    useContext(WeatherDataContext);
  // const { latitude, longitude } = locationData;
  const { location, current } = weatherData;

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
    const fetchedIconData = async () => {
      try {
        const iconCode =
          current && (await fetchIconData(current.condition.code));
        setMainWeatherIcon(iconCode);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchedIconData();
  }, [current]);

  // (async () => {
  //   if (current) {
  //     const result = await fetchIconData(current.condition.code);
  //     console.log(result)
  //   }
  // })();

  return (
    // useEffect(() => {
    // }, [weatherData])
    //

    <>
      <div className='weatherInfoCard'>
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
              <img className="weatherIcon"
                src={require(`../../assets/icons/night/${mainWeatherIcon}.png`)}
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
            {/* <img src='../../assets/icons/night/113.png' alt='' /> */}
            {mainWeatherIcon}
          </div>
        </div>
      </div>
    </>
  );
};
export default WeatherInfoCard;
