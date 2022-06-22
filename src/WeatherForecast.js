import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col-2">
                <WeatherForecastDay data={forecast[0]} />
              </div>
              <div className="col-2">
                {" "}
                <WeatherForecastDay data={forecast[1]} />
              </div>
              <div className="col-2">
                <WeatherForecastDay data={forecast[2]} />
              </div>
              <div className="col-2">
                <WeatherForecastDay data={forecast[3]} />
              </div>
              <div className="col-2">
                <WeatherForecastDay data={forecast[4]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = process.env.REACT_APP_TOKEN_OWM;
    let latitude = props.coordinates.lon;
    let longitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
