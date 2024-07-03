import { useEffect, useState } from "react"
import "./tic-tact-toe.css"
export default function TicTactToe() {

    const [squares, setSquares] = useState(Array(9).fill(''));
    const [isXTurn, setIsXTurn] = useState(true);
    const [status, setStatus] = useState("");


    console.log(squares)


    function Square({ value, onClick }) {
        return <button onClick={onClick} className="square">{value}</button>
    }
    function handleClick(getCurrentSquare) {
        let copy = [...squares];
        if (getWinner(copy) || copy[getCurrentSquare]) return;
        copy[getCurrentSquare] = isXTurn ? "X" : "O";
        setIsXTurn(!isXTurn);
        setSquares(copy);
    }
    function getWinner(squares) {
        const winningPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < winningPatterns.length; i++) {
            const [x, y, z] = winningPatterns[i];
            if (squares[x] === squares[y] && squares[y] === squares[z]) {
                return squares[x];
            }
        }
        return null;

    }

    function handleRestart() {
        setSquares(Array(9).fill(''));
        setIsXTurn(true);
        setStatus("");
        
    }

    useEffect(() => {
        if (!getWinner(squares) && squares.every((e) => e !== "")) {
            setStatus("This is draw! Please restart the game");
        } else if (getWinner(squares)) {
            setStatus(`The winner is ${isXTurn ? "O" : "X"} Please restart the game`);
        } else {
            setStatus(`Next Player is ${isXTurn ? "X" : "O"}`);
        }
    }, [squares, isXTurn])
    return (
        <div>
            <div className="tic-tact-toe-container">
                <div className="row">
                    <Square value={squares[0]} onClick={() => handleClick(0)} />
                    <Square value={squares[1]} onClick={() => handleClick(1)} />
                    <Square value={squares[2]} onClick={() => handleClick(2)} />
                </div>
                <div className="row">
                    <Square value={squares[3]} onClick={() => handleClick(3)} />
                    <Square value={squares[4]} onClick={() => handleClick(4)} />
                    <Square value={squares[5]} onClick={() => handleClick(5)} />
                </div>
                <div className="row">
                    <Square value={squares[6]} onClick={() => handleClick(6)} />
                    <Square value={squares[7]} onClick={() => handleClick(7)} />
                    <Square value={squares[8]} onClick={() => handleClick(8)} />
                </div>
            </div>
            <div>
                <h1>{status}</h1>
                <button onClick={handleRestart}>Restart</button>
            </div>
        </div>

    )
}