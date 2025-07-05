import { useState } from 'react'

export default function App(){
function Square({ value, onClick }) {
  return <button onClick={onClick}>{value}</button>;
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    if (squares[i]) return;
    const newSquares = [...squares];
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <div>
      {squares.map((val, i) => (
        <Square key={i} value={val} onClick={() => handleClick(i)} />
      ))}
    </div>
  );
}
return <Board/>;
}

