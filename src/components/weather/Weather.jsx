import { useEffect, useState } from "react";
import Search from "./Search";



export default function Weather() {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(false);

    async function fetchWeatherData(param) {
        setLoader(true)
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`);
            const data = await response.json();
            console.log(data);
            if (data) {
                setWeatherData(data);
                setLoader(false);
            }
        } catch (e) {

            setError(true);
            setLoading(false);
        }

    }

    function getCurrentDate() {
        return new Date().toLocaleDateString('en-us', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })
    }

    function handleSearch() {
        fetchWeatherData(search);
    }

    function setLoader(value) {
        setLoading(value)
    }

    useEffect(() => {
        fetchWeatherData("Bengaluru");
    }, [])

    return <div className="weather-container">
        <h1>Weather</h1>
        <Search search={search} setSearch={setSearch} handleSearch={handleSearch} />
        {error ? <h3>Error occurred.</h3> : null}
        {loading ? <h3>Loading...</h3> :
            <div>
                <div className="city-name">
                    <h2>{weatherData?.name},<span>{weatherData?.sys?.country}</span></h2>
                </div>
                <div className="date">
                    <span>{getCurrentDate()}</span>
                </div>

                <div className="temp">
                    {weatherData?.main?.temp}
                </div>

                <p className="description">{weatherData && weatherData.weather && weatherData.weather[0] ? weatherData?.weather[0].description : ''}</p>

                <div className="weather-info">
                    <div className="weather-info-item">
                        <div>
                            <p className="wind">{weatherData?.wind?.speed}</p>
                            <p>Wind Speed</p>
                        </div>
                    </div>
                    <div className="weather-info-item">
                        <div>
                            <p className="wind">{weatherData?.main?.humidity} % </p>
                            <p>Humidity</p>
                        </div>
                    </div>
                </div>
            </div>

        }


    </div>
}