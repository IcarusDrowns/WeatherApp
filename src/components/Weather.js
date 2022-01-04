import React from "react";

function Weather(props) {
  const { weather } = props;
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };
  return (
    <>
      <img
        src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
        alt=""
      />
      <h3>
        {`${Math.floor(weather?.main.temp - 273)}°C`}{" "}
        <span>{weather?.weather[0].main}</span>
      </h3>
      <h3>{`${weather?.name}, ${weather?.sys.country}`}</h3>
      <h3>Information</h3>
      <h4>{`coordinates: ${weather?.coord.lon}, ${weather?.coord.lat}`}</h4>
      <h4>{`sunrise: ${getTime(weather?.sys.sunrise)}, sunset: ${getTime(
        weather?.sys.sunset
      )}`}</h4>
      <h4>{`Min Temp: ${Math.floor(
        weather?.main.temp_min - 273
      )},Max Temp: ${Math.floor(weather?.main.temp_max - 273)} `}</h4>
      <h4>{`Humidity: ${weather?.main.humidity}`}</h4>
    </>
  );
}

export { Weather };
