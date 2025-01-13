import { useState, useEffect } from "react";

export default function LondonWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=6c9720db7fae7ba64d87f56134b2ad65`
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("날씨 정보를 가져오는데 실패했습니다:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();

    const interval = setInterval(fetchWeather, 300000); // 5분마다 갱신
    return () => clearInterval(interval);
  }, []);

  if (loading) return <p>Loading...</p>;

  const getWeatherIcon = (iconCode) => {
    return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  return (
    <div className="londonInfoItem">
      <h4>Weather in London</h4>
      <div className="weatherContainer">
        <div className="weatherInfo">
          <img
            src={getWeatherIcon(weather?.weather[0]?.icon)}
            alt={weather?.weather[0]?.description}
            className="weatherIcon"
          />
          <span className="weatherTemp">
            {Math.round(weather?.main?.temp)}°C
          </span>
        </div>
        <span className="weatherDesc">{weather?.weather[0]?.description}</span>
      </div>
      <p className="update-time">Updated every 5 minutes</p>
    </div>
  );
}
