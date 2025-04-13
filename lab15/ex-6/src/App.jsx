import React from 'react';
import CounterWithState from './components/CounterWithState';
import CounterWithReducer from './components/CounterWithReducer';

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <CounterWithState />
      <CounterWithReducer />
    </div>
  );
}

export default App;
