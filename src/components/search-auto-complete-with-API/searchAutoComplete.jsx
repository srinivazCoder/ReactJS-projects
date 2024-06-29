import { useEffect, useState } from "react"
import Suggestions from "./suggestions"

export default function SearchAutoCompleteAPI() {

    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState("");

    function handleChange(event) {
        let query = event.target.value.toLowerCase();
        setSearchParam(query);

        if (query.length > 0) {
            const filterData = users && users.length ?
                users.filter((u) => u.toLowerCase().includes(query))

                : [];

            setFilteredUsers(filterData);
            setShowDropdown(true);
        }else{
             setFilteredUsers([]);
            setShowDropdown(false);
        }

    }

    function handleClick(data){
        setSearchParam(data);
        setShowDropdown(false);
    }

    async function fetchListOfUsers() {
        try {

            setLoading(true);
            const response = await fetch("https://dummyjson.com/users");
            const data = await response.json();
            console.log(data)
            if (data && data.users && data.users.length) {
                setUsers(data.users.map((u)=>u.firstName));
                setLoading(false);
                setError(null);
            }


        } catch (e) {
            setLoading(false);
            console.log(e);
            setError(e);
        }
    }

    useEffect(() => {
        fetchListOfUsers()
    }, []);

    console.log(users,filteredUsers);

    return (
        <div className="search-auto-complete-container">
            <input value={searchParam} onChange={handleChange} name="search-users" placeholder="search users here" />
            {loading && <h6>Loading...</h6>}
            {error && <h6>Error-{error}</h6>}

            {showDropdown && filteredUsers.length>0 && <Suggestions handleClickList={handleClick} suggestionUsers={filteredUsers} /> }
        </div>
    )
}