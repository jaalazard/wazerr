import { useEffect, useState } from "react";

export default function Meteocard() {
  const [weatherData, setWeatherData] = useState([]);

  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
  
  useEffect(() => {
    const cities = [
      'Paris', 'Marseille', 'Lyon', 'Toulouse', 'Bordeaux', 'Nantes'
    ];

    const fetchData = async (city) => {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        return { city, data };
      } catch (error) {
        console.error("Erreur de requête:", error);
      }
    };

    Promise.all(cities.map(fetchData))
      .then((results) => {
        setWeatherData(results.filter(Boolean)); 
      });
  }, []); 
    

  return (
    <>
      <div className="my-14">
        <h1 className="mb-4 text-4xl font-extrabold leading-none text-center tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Bienvenue sur Wazerr
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
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
              <tr key={item.data.name} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.data.name}
                </th>
                <td className="px-6 py-4">{item.data.weather[0].main}</td>
                <td className="px-6 py-4">{item.data.main.temp}°C</td>
                <td className="px-6 py-4">{item.data.wind.speed} km/h</td>
                <td className="px-6 py-4">
                  <a
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
        <button
          type="button"
          className="mt-4 mx-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Ajouter une ville
        </button>
      </div>
    </>
  );
}
