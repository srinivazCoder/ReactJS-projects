import { useState } from "react";
import Search from "./Search";



export default function Weather(){
    const [search,setSearch] = useState("");
    const [laoding,setLoading] = useState(false);
    const [weather,setWeather] = useState(null);
    const [error,setError] = useState(false);

    async function handleSearch(){
        setLoading(true);
        setError(false);
        try{
            const res =  fetch("");
            const data = await res.json();
            setWeather(data);
            setLoading(false);
        }catch(e){
            setError(true);
            setLoading(false);
        }
    }

    return <div>
        <h1>Weather</h1>
        <Search search={search} setSearch={setSearch} handleSearch={handleSearch}/>
    </div>
}