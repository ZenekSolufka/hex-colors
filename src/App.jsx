import React, { useState } from 'react';
import InputForm from './components/InputForm';
import ColorDisplay from './components/ColorDisplay';
import History from './components/History';
import './App.css';

const App = () => {
  const [colorData, setColorData] = useState(null);
  const [history, setHistory] = useState([]); // Nowy stan dla historii

  const handleColorUpdate = (data) => {
    setColorData(data);
    setHistory((prevHistory) => [data, ...prevHistory]); // Dodaj nowy kolor do historii
  };

  return (
    <div className='wrap'>
    <div className="app">
      <h1>What The Hex</h1>
      <div className="main-content">
        <div>
          <InputForm onColorUpdate={handleColorUpdate} />
          {colorData && <ColorDisplay colorData={colorData} />}
        </div>
      </div>
    </div>
    <div>
    <History history={history} />
    </div>
    </div>
  );
};

export default App;
