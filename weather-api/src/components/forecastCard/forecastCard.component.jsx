import { useContext, useEffect } from "react";
import { WeatherDataContext } from "../../context/weatherData.context";

const ForecastCard = () => {
  const { weatherData } = useContext(WeatherDataContext);
  const { latitude, longitude } = weatherData;

  return (
    // useEffect(() => {
    // }, [weatherData])
    // )
    <>
      <div>
        {/* <h1>{(latitude && longitude) ? `${latitude.toFixed(2)} ${longitude.toFixed(2)}` : "loding..."}</h1> */}


    


      </div>
    </>
  );
};
export default ForecastCard;
