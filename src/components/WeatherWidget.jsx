import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/weather_widget.css';
import { ReactComponent as MoonSvgIcon } from '../assets/weathericon/moon.svg';
import { ReactComponent as CloudSvg } from '../assets/weathericon/cloud.svg';
import { ReactComponent as SunSvg } from '../assets/weathericon/sunny.svg';

function WeatherWidget() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('New York'); // Default location
  const [isDaytime, setIsDaytime] = useState(true); // Day/Night flag
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1b8acfe2079b926563eb1d958fb53cf7&units=metric`);
        setWeatherData(response.data);
        
        // Check if it is daytime (between sunrise and sunset)
        const currentTime = Date.now() / 1000; // Current time in seconds
        const sunrise = response.data.sys.sunrise;
        const sunset = response.data.sys.sunset;
        setIsDaytime(currentTime > sunrise && currentTime < sunset);
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, [location]);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className='weather-widget'>
      <input 
        type='text' 
        value={location} 
        onChange={handleLocationChange} 
        className='location-input' 
        placeholder='Enter location' 
      />

      {loading ? (
        <p>Loading weather data...</p>
      ) : (
        weatherData && (
          <>
            <div className='location'>{weatherData.name}</div>
            <div className='flex justify-between'>
              <div className='flex flex-row gap-5'>
                <div  className='flex fel-col'>
                  {isDaytime ? <SunSvg className="sun"/> : <MoonSvgIcon className="moon"/>}
                  <div className='cld-container'><CloudSvg className="cloud" /></div>
                </div>
                <div className='temp'>{Math.round(weatherData.main.temp)}°C</div>
              </div>
              <div className='humidity'>Humidity: {weatherData.main.humidity}%</div>
            </div>
            <div className='low-high'>
              Low: {Math.round(weatherData.main.temp_min)}°C / High: {Math.round(weatherData.main.temp_max)}°C
            </div>
            <div className='feel-like'>Feels like: {Math.round(weatherData.main.feels_like)}°C</div>
          </>
        )
      )}
    </div>
  );
}

export default WeatherWidget;
