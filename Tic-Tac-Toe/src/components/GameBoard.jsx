import { useState } from "react";
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({onSelectSquare, activePlayerSymbol}) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function HandleSelectedSquare(rowIndex, columnIndex) {
        setGameBoard((previousGameBoard) => {
            const localGameBoard = [...previousGameBoard.map(innerArray => [...innerArray])];
            localGameBoard[rowIndex][columnIndex] = activePlayerSymbol;
            return localGameBoard
        });

        onSelectSquare();
    }

    return <ol id="game-board">
        {gameBoard.map((row, rowIndex) => 
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, columnIndex) => 
                        <li key={columnIndex}>
                            <button onClick={() => HandleSelectedSquare(rowIndex, columnIndex)}>
                                {playerSymbol}
                            </button>
                        </li>
                    )}
                </ol>
            </li>
        )}
    </ol>
}