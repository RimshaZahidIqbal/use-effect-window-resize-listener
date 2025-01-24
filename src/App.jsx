import React from 'react';
import WindowResize from './components/WindowResize';

function App() {
  return (
    <div className="App bg-gray-200 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
        Window Width: UseEffect
      </h1>
      <WindowResize />
    </div>
  );
}

export default App;
