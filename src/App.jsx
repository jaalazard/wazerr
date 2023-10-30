import "./main.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Meteocard from "./components/MeteoCard";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Navbar />
      <Meteocard />
      <Footer />
    </div>
  );
}

export default App;
