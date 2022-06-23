import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={52} />
            </div>
            <div className="col-6 mb-3 ms-2">
              <div className="float-left">
                {" "}
                <WeatherTemperature celsius={props.data.temperature} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 opacity-75">
          <div className="float-right">
            <div>Humidity: {Math.round(props.data.humidity)} %</div>
            <div>Wind: {Math.round(props.data.wind)} km/h</div>
          </div>
        </div>
      </div>
    </div>
  );
}
