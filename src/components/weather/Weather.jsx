import { useEffect, useState } from "react";
import Search from "./Search";



export default function Weather(){
    const [search,setSearch] = useState("");
    const [loading,setLoading] = useState(false);
    const [weather,setWeather] = useState(null);
    const [error,setError] = useState(false);

    async function fetchWeatherData(param){
        setLoader(true)
        try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`);
            const data = await response.json();
            console.log(data);
            if(data){
                setWeather(data);
                setLoader(false);
            }
           

        }catch(e){
            
            setError(true);
            setLoading(false);
        }
        
    }

    function handleSearch(){
        fetchWeatherData(search);
    }

    function setLoader(value){
        setLoading(value)
    }

    useEffect(()=>{
        fetchWeatherData("Bengaluru");
    },[])

    return <div>
        <h1>Weather</h1>
        <Search search={search} setSearch={setSearch} handleSearch={handleSearch}/>
        {error ? <h3>Error occurred.</h3> : null}
        {loading ? <h3>Loading...</h3> :
            <div className="city-name">
                <h2>{weather?.name},<span>{weather?.sys?.country}</span></h2>
            </div>
        }
        
        
    </div>
}