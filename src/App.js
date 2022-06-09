// import logo from "./logo.svg";
import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from "react-loader-spinner";

import "./App.css";
import axios from "axios";

export default function App(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )} degrees`
    );
  }
  let apiKey = "6c9652fb4aafdb6667f90afa73f1d29b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return <TailSpin height="100" width="100" color="grey" ariaLabel="loading" />;
}

// <div className="App">
//   <h1> Weather App</h1>
//   <footer>
//     {" "}
//     This project was coded by{" "}
//     <a href="mailto:alma.bocaj@gmail.com">Alma Zamir </a> and is {}
//     <a href=" https://github.com/Almajs/react-weather-app" target="blank">
//       open sourced on GitHub
//     </a>
//   </footer>
// </div>
// );
