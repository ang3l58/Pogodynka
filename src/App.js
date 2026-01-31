import React, { useState, useMemo } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Dodaj to
import { citiesData } from './data/weatherData';
import { convertTemp } from './utils/tempConverter'; // Dodaj to
import WeatherDetails from './components/WeatherDetails';
import UnitSwitcher from './components/UnitSwitcher'; // Dodaj to
import './App.css';
 // Dodaj useMemo

function App() {
  const [cities] = useState(citiesData);
  const [searchTerm, setSearchTerm] = useState(""); // Stan dla wyszukiwarki
  const navigate = useNavigate();
  const unit = useSelector((state) => state.weather.unit);

  // Filtrowanie miast na żywo
  const filteredCities = useMemo(() => {
    return cities.filter(city => 
      city.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [cities, searchTerm]);

  return (
    <div className="App">
      <header>
        <h1 onClick={() => navigate('/')} style={{cursor: 'pointer'}}>☁️ Pogodynka React</h1>
        <UnitSwitcher />
      </header>

      <main>
        <Routes>
          <Route path="/" element={
            <>
              {/* Formularz wyszukiwania */}
              <div className="search-container">
                <input 
                  type="text" 
                  placeholder="Szukaj miasta..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>

              <div className="city-list">
                {filteredCities.map(city => (
                  <div key={city.id} className="city-card" onClick={() => navigate(`/city/${city.id}`)}>
                    <h2>{city.name}</h2>
                    <div className="temp">{convertTemp(city.current.temp, unit)}°{unit}</div>
                    <div className="icon">{city.current.icon}</div>
                  </div>
                ))}
              </div>
              {filteredCities.length === 0 && <p>Nie znaleziono takiego miasta.</p>}
            </>
          } />
          <Route path="/city/:id" element={<WeatherDetails cities={cities} />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;