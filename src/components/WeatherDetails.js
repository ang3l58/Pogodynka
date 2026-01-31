import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { convertTemp } from '../utils/tempConverter';

const WeatherDetails = ({ cities }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const unit = useSelector((state) => state.weather.unit); // Jednostka z Reduxa

  const city = cities.find(c => c.id === parseInt(id));

  if (!city) return <h2>Nie znaleziono miasta!</h2>;

  return (
    <div className="weather-details">
      <button className="back-btn" onClick={() => navigate('/')}>← Powrót do listy</button>
      
      <section className="main-info">
        <h1>{city.name}</h1>
        <div className="current-main">
          <span className="huge-icon">{city.current.icon}</span>
          {/* Przeliczona temp główna */}
          <span className="huge-temp">{convertTemp(city.current.temp, unit)}°{unit}</span>
          <p className="condition-desc">{city.current.condition}</p>
        </div>
      </section>

      {/* ... sekcja stats-grid zostaje bez zmian ... */}

      <section className="forecast-section">
        <h3>Prognoza na 5 dni</h3>
        <div className="forecast-list">
          {city.forecast.map((day, index) => (
            <div key={index} className="forecast-item">
              <span className="day-name">{day.day}</span>
              <span className="day-icon">{day.condition}</span>
              {/* Przeliczona temp w prognozie */}
              <span className="day-temp">{convertTemp(day.temp, unit)}°{unit}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WeatherDetails;