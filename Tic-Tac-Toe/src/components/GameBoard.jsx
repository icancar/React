export default function GameBoard({onSelectSquare, board}) {
    
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function HandleSelectedSquare(rowIndex, columnIndex) {
    //     setGameBoard((previousGameBoard) => {
    //         const localGameBoard = [...previousGameBoard.map(innerArray => [...innerArray])];
    //         localGameBoard[rowIndex][columnIndex] = activePlayerSymbol;
    //         return localGameBoard
    //     });

    //     onSelectSquare();
    // }

    return <ol id="game-board">
        {board.map((row, rowIndex) => 
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, columnIndex) => 
                        <li key={columnIndex}>
                            <button onClick={() => onSelectSquare(rowIndex, columnIndex)} disabled={playerSymbol !== null}>
                                {playerSymbol}
                            </button>
                        </li>
                    )}
                </ol>
            </li>
        )}
    </ol>
}