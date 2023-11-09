import { useEffect, useState } from "react";
import { fetchData } from "../api";
import AddCity from "./AddCity";

export default function Meteocard() {
  const [weatherData, setWeatherData] = useState([]);
  const [cities, setCities] = useState([
    "Paris",
    "Marseille",
    "Lyon",
    "Toulouse",
    "Bordeaux",
    "Nantes",
  ]);
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

const handleDeleteCity = (cityToDelete) => {
  setCities((prevCities) => prevCities.filter((city) => city !== cityToDelete));
  setWeatherData((prevData) => prevData.filter((city) => city.city !== cityToDelete));
}

useEffect(() => {
  Promise.all(cities.map(city => fetchData(city, apiKey)))
    .then(results => {
      setWeatherData(results.filter(Boolean));
    });
}, [cities]);

  return (
    <>
    <div className="bg-gray-900">
      <div className="py-14">
        <h1 className="mb-4 text-4xl font-extrabold leading-none text-center tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Bienvenue sur Wazerr
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48">
          Bienvenue sur notre application météo ! Nous sommes ravis de vous
          accueillir. Que vous soyez à la recherche d'informations
          météorologiques locales ou que vous souhaitiez explorer les prévisions
          pour une destination lointaine, notre application est là pour vous
          fournir les données les plus précises et à jour. Profitez d'une
          expérience météo intuitive et restez toujours un pas en avance grâce à
          nos prévisions fiables. Que le temps soit votre allié, où que vous
          soyez !
        </p>
      </div>
      <div>
        <div className="mx-4 relative overflow-x-auto shadow-md sm:rounded-lg mt-14">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Ville
                </th>
                <th scope="col" className="px-6 py-3">
                  Temps
                </th>
                <th scope="col" className="px-6 py-3">
                  Temperature
                </th>
                <th scope="col" className="px-6 py-3">
                  Vent
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {weatherData.map((item) => (
                <tr
                  key={item.city}
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.city}
                  </th>
                  <td className="px-6 py-4">{item.data.weather[0].main}</td>
                  <td className="px-6 py-4">{item.data.main.temp}°C</td>
                  <td className="px-6 py-4">{item.data.wind.speed} km/h</td>
                  <td className="px-6 py-4">
                    <a onClick={() => handleDeleteCity(item.city)}
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Supprimer
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <AddCity cities={cities} setCities={setCities} fetchData={fetchData} setWeatherData={setWeatherData}  />
      </div>
      </div>
    </>
  );
}
