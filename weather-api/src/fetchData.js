import { useEffect } from "react";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
  },
};

export const fetchData = async(lat, long) => {
  // https://weatherapi-com.p.rapidapi.com/search.json?q=14.62,79.63
  // return fetchedData;

    const response = await fetch(
      `https://weatherapi-com.p.rapidapi.com/current.json?q=${lat},${long}`,
      options
    );
    const data = await response.json();

    return data;


} 

// fetchForecastData = 

// const codeLookUp = (array, code) => {
//   const lookUp = {}
//   array.forEach(item => {
//     lookUp[item.code] = item;
//   })

//   const iconData = lookUp[code]

//   if(iconData) {
//     return iconData.icon
//   } else {
//     throw new Error("Icon not found with the code " + code)
//   }
// }

// export const fetchIconData = async (code) => {

//   try {
      
//     const response = await fetch(
//         "https://www.weatherapi.com/docs/weather_conditions.json"
//       ).then(res => res.json());
//        const iconCode = await codeLookUp(response, code);
//        return iconCode;
//   } catch(err) {
//     throw new Error("Error fetching iconData: " + err.message);
//   }


 
// }