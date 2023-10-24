import { useEffect } from "react";

const options = {
  method: "GET",
//   url: "",
//   params: { q: "14.62, 79.63" },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
  },
};

export const fetchData = async(lat, long) => {
  // https://weatherapi-com.p.rapidapi.com/search.json?q=14.62,79.63
  // return fetchedData;

    const response = await fetch(`https://weatherapi-com.p.rapidapi.com/search.json?q=${lat},${long}`, options);
    const data = response.json();

    return data;


} 