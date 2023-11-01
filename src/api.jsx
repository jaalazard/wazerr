export async function fetchData(city, apiKey) {
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
  }
  