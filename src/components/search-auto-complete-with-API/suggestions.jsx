export default function Suggestions({suggestionUsers,handleClickList}) {
    return (<div>
        <ul>
            {suggestionUsers.map((e, i) => <li key={i} onClick={()=>handleClickList(e)}>{e}</li>)}
        </ul>
    </div>);


}