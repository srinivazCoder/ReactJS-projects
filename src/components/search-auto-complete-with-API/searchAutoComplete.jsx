import { useEffect, useState } from "react"

export default function SearchAutoCompleteAPI(){

    const [loading, setLoading]=useState(false);
    const[users,setUsers] = useState([]);
    const [error,setError] = useState(null);

    async function fetchListOfUsers(){
        try{
           
            setLoading(true);
            const response = await fetch("https://dummyjson.com/users");
            const data = await response.json();
            console.log(data)
            if(data && data.users && data.users.length){
                setUsers(data.users);
                setLoading(false);
                setError(null);
            }
           

        }catch(e){
            setLoading(false);
            console.log(e);
            setError(e);
        }
    }

    useEffect(()=>{
        fetchListOfUsers()
    },[]);

   
   
    return (
        <div className="search-auto-complete-container">
            <input name="search-users" placeholder="search users here"/>
            {loading && <h6>Loading...</h6>}
            {error && <h6>Error-{error}</h6>}
        </div>
    )
}