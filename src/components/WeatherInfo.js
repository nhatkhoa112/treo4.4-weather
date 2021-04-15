import React from 'react';
import {Card, Container } from 'react-bootstrap';
import './WeatherInfo.css'

const WeatherInfo = ({ weather }) => {
    const temperatureC =
        weather && weather.main ? (weather.main.temp - 273.15).toFixed(2) : "";
    const temperatureF =
        weather && weather.main
        ? (((weather.main.temp - 273.15) * 9) / 5 + 32).toFixed(2)
        : "";



    return (
        <Container className="mx-auto my-4 py-4" >
            <Card className="bg-dark text-white main-content">
                <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center">
                    <div className="d-flex justify-content-center" >
                        <Card.Title className="text-content">{weather?.name}</Card.Title>
                    </div>
                    <Card.Text className="text-success h1">
                        {`${temperatureC} °C / ${temperatureF} °F`}
                    </Card.Text>
                    <Card.Text className="text-info text-uppercase h2">
                        {weather && weather.weather[0]?.description}
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </Container>
);
};

export default WeatherInfo;