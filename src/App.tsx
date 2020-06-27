import React from 'react';

import Chessboard from './components/Chessboard'
import ExploreSidebar from './components/ExploreSidebar'
import GuideSidebar from  './components/GuideSidebar'

import './App.css';

import './tailwind.generated.css'


function App() {
  return (
    <div className="c-layout grid grid-cols-3">
      <ExploreSidebar />
      <div className="flex justify-center items-center p-5">
        <Chessboard />
      </div>
      <GuideSidebar />
    </div>
  );
}

export default App;
