import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Eunbi() {
  const [location, setLocation] = useState("");
  const API_KEY = "ff6e3af683d168a2bbdd5727cb34266a";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
  const [result, setResult] = useState("");
  const searchWeather = async (e) => {
    if (e.key === "Enter") {
      try {
        const data = await axios({
          method: "get",
          url: url,
        });
        setResult(data);
        console.log(data);
      } catch (e) {
        alert("Failed to fetch weather data.");
      }
    }
  };

  return (
    <AppWrap>
      <SearchWrap>
        <input
          type="text"
          placeholder="Enter location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)} // Update state on input
          onKeyDown={searchWeather}
        />
      </SearchWrap>
      {Object.keys(result).length !== 0 && (
        <ResultWrap>
          <div className="city">{result.data.name}</div>
          <div className="temperature">
            {Math.round((result.data.main.temp - 273.15) * 10) / 10}°C
          </div>
          <div className="sky">{result.data.weather[0].main}</div>
        </ResultWrap>
      )}
    </AppWrap>
  );
}

// Styled Components
const AppWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f0f4f8;
`;

const SearchWrap = styled.div`
  margin-bottom: 20px;

  input {
    width: 300px;
    padding: 10px;
    font-size: 16px;
    border: 2px solid #ccc;
    border-radius: 5px;
    outline: none;

    &:focus {
      border-color: blue;
    }
  }
`;

const ResultWrap = styled.div`
  text-align: center;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 10px;
    font-size: 24px;
    color: #333;
  }

  p {
    margin: 5px 0;
    font-size: 16px;
    color: #555;
  }
`;
