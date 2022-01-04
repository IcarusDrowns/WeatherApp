import "./App.css";
import { useState } from "react";
import City from "./components/City";
import { Weather } from "./components/Weather";
import axios from "axios";

function App() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

  const fetch = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=49cc8c821cd2aff9af04c9f98c36eb74`
    );
    setWeather(response.data);
  };
  return (
    <div className="container">
      <City className="city" setCity={setCity} fetch={fetch}></City>
      {weather && <Weather className="weather" weather={weather}></Weather>}
    </div>
  );
}

export default App;
