import { useState } from "react";

export default function AddCity({ cities, setCities, fetchData, setWeatherData, weatherData }) {
  const [cityName, setCityName] = useState("");

  const handleAddCity = () => {
    if (cityName) {
      setCities(
        (prevCities) => [...prevCities, cityName]);
        setCityName("");
        }
    }

  return (
    <div className="ml-4 mt-4">
      <input
        type="text"
        placeholder="Votre ville"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <button type="button" onClick={handleAddCity} className="ml-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Ajouter</button>
    </div>
  );
}
