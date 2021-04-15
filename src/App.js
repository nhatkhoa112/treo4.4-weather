
import React, { useState, useEffect } from "react";
import { createApi } from 'unsplash-js';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button } from 'react-bootstrap';
import "./App.css";
import WeatherInfo from './components/WeatherInfo';
import Navbar from "./components/NavigationBar";
require('dotenv').config();


const CITIES = [
    {
        coords:[10.9329301471704, 106.61314549277546],
        name: 'Sai gon'
    },
    {
        coords:[48.87573634167299, 2.3961587306483723],
        name: 'Paris'
    },
    {
        coords:[37.55329565036222, 126.99693613243426],
        name: 'Seoul'
    },
    {
        coords:[40.71172438908716, -73.98795633433252],
        name: 'New York'
    },
    {
        coords:[37.77797339806124, -122.42225002668886],
        name: 'San Francisco'
    },
    {
        coords:[55.762298152270986, 37.62356022061815],
        name: 'Moscow'
    },
    {
        coords:[35.803107298161486, 139.8021548333588],
        name: 'Tokyo'
    },
    {
        coords:[49.28204546640804, -123.12045790667368],
        name: 'Vancouver'
    },
]


const unsplash = createApi({
  accessKey: "R6C8WJibkgY_LXvsGSLQGq9mjzQVgmLiXmpo3AQ8wi4",
  // `fetch` options to be sent with every request
  headers: { 'X-Custom-Header': 'foo' },
});


function App() {
  const [weather, setWeather] = useState(null);
  // const [apiError, setAPIError] = useState("");
  const [bGPhoto, setBGPhoto] = useState('');
  const API_KEY = process.env.REACT_APP_API_KEY;


  const getUserLocation = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    getWeatherByCurrentLocation(latitude, longitude);
  });
};

  const fetchImg = async (data) => {
    const url = await unsplash.search.getPhotos({
                query: data.name,
});
    setBGPhoto(url.response.results[0].urls.full)
  }

  useEffect( () => {
    getUserLocation();
    
;
  },[]);

  const getWeatherByCurrentLocation = async (lat, lon) => {
    // try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log("weather data", data);
      setWeather(data);
      fetchImg(data)
    // } catch (err) {
    //   setAPIError(err.message);
    // }
  };

  if(!weather){
    return <div className="loading">  
      <div className="obj"></div>
      <div className="obj"></div>
      <div className="obj"></div>
      <div className="obj"></div>
      <div className="obj"></div>
      <div className="obj"></div>
      <div className="obj"></div>
      <div className="obj"></div>
    </div>
  }



  console.log(bGPhoto)




  return (
    <div className="app"  style={{ backgroundImage: `url( ${bGPhoto})`}}>
      <div className="sideBar">
        {CITIES.map((c,index) => {
          return <Button 
                    key={index}
                    onClick={() => getWeatherByCurrentLocation(c.coords[0], c.coords[1])}
                    variation="primary" 
                    className="cityButton">{c.name}</Button>
        })}
      </div>
      <Navbar />
      <WeatherInfo weather={weather} />
    </div>
  );

}
export default App;
