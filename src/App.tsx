import React from 'react';
import Chessboard from 'chessboardjsx';
// @ts-ignore
import Chess from 'chessjs'

import Chessboard from './components/Chessboard'
import './App.css';

import './tailwind.generated.css'

function App() {
  const onGetPosition = React.useCallback((position) => {
    console.log("@Position: ", position)
  }, [])

  return (
    <div className="c-layout grid grid-cols-3">
    <div className="container xl mx-auto">
      <h1 className="font-sans text-lg text-purple-700 text-center">Hello Chess people!</h1>
      <Chessboard getPosition={onGetPosition} position="start"/>
      <div className="flex justify-center items-center p-5">
        <Chessboard />
      </div>
    </div>
  );
}

export default App;
