
import { useContext } from "react";

import { WeatherDataContext } from "../../context/weatherData.context";
import { fetchForeCastData } from "../../fetchData";
import { useEffect } from "react";

const ForecastCard = () => {

    const { weatherData } = useContext(WeatherDataContext);

    const { location } = weatherData;

    useEffect(() => {
        (async() => {
            const {forecast} = await fetchForeCastData(location.name)
            console.log(forecast)
        })()
    })

    

    return(
        <>
        <div className="forecast_container">

        </div>
        </>
    )


}

export default ForecastCard;