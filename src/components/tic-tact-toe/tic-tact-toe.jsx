import { useState } from "react"
import "./tic-tact-toe.css"
export default function TicTactToe() {

    const [squares,setSquares] = useState(Array(9).fill(''));

    console.log(squares)

    function Square({ value }) {
        return <button className="square">{value}</button>
    }
    return (
        <div className="tic-tact-toe-container">
            <div className="row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="row">
                <Square />
                <Square />
                <Square />
            </div>
        </div>
    )
}