import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function CounterWithState() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl mb-4">Count: {state.count}</h2>
      <button
        onClick={() => dispatch({ type: 'increment' })}
        className="bg-green-500 text-white px-4 py-2 rounded mr-2"
      >
        Increase
      </button>
      <button
        onClick={() => dispatch({ type: 'decrement' })}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Decrease
      </button>
    </div>
  );
}

export default CounterWithState;
