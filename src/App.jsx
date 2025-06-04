import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center space-x-4">
        <button onClick={decrement} className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 disabled:bg-red-300" disabled={count === 0}>
          -
        </button>
        <span className="text-4xl font-bold">{count}</span>
        <button onClick={increment} className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">
          +
        </button>
      </div>
    </div>
  )
}

export default App
