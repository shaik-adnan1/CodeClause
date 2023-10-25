import { useContext, useEffect } from "react";
import { WeatherDataContext } from "../../context/weatherData.context";

const ForecastCard = () => {
  const { locationData, weatherData } = useContext(WeatherDataContext);
  const { latitude, longitude } = locationData;

  // const locationSearchHandler = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.value)
  // }

  return (
    // useEffect(() => {
    // }, [weatherData])
    // )
    <>
      <div>
        <h1>
          {latitude && longitude
            ? `${latitude.toFixed(2)} ${longitude.toFixed(2)}`
            : "loding..."}
        </h1>
        {console.log(weatherData)}

        {/* Overcast, Sunny*/}
        {/* <input type="text" className="searchLocation" onChange={locationSearchHandler}/>
        <input type="button" value="Search" /> */}
      </div>
    </>
  );
};
export default ForecastCard;
