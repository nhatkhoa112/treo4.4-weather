
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import WeatherInfo from './components/WeatherInfo';
import Navbar from "./components/NavigationBar";
import SideBar from './components/SideBar';
require('dotenv').config();



function App() {
  const [weather, setWeather] = useState(null);
  // const [apiError, setAPIError] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;


  const getUserLocation = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    getWeatherByCurrentLocation(latitude, longitude);
  });
};

  useEffect(() => {
    getUserLocation();
  },[]);

  const getWeatherByCurrentLocation = async (lat, lon) => {
    // try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log("weather data", data);
      setWeather(data);
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


  return (
    <div className="app">
      <SideBar />
      <Navbar />
      <WeatherInfo weather={weather} />
    </div>
  );

}
export default App;
