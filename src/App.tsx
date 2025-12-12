import React, { useState } from 'react';
import TrigramSelector from './TrigramSelector';
import HexagramDisplay from './HexagramDisplay';
import { findHexagram } from './hexagram-data';
import './App.css';

function App() {
  const [upperTrigram, setUpperTrigram] = useState<number | null>(null);
  const [lowerTrigram, setLowerTrigram] = useState<number | null>(null);
  
  const resultHexagram = (upperTrigram && lowerTrigram) 
    ? findHexagram(upperTrigram, lowerTrigram)
    : null;

  const handleReset = () => {
    setUpperTrigram(null);
    setLowerTrigram(null);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>易经六十四卦</h1>
        <p>选择上卦和下卦，查看组合后的卦象</p>
      </header>

      <main className="app-main">
        <div className="selectors-container">
          <TrigramSelector
            label="上卦选择"
            selectedTrigram={upperTrigram}
            onTrigramChange={setUpperTrigram}
          />
          
          <TrigramSelector
            label="下卦选择"
            selectedTrigram={lowerTrigram}
            onTrigramChange={setLowerTrigram}
          />
        </div>

        <div className="actions">
          <button 
            className="reset-button" 
            onClick={handleReset}
            disabled={!upperTrigram && !lowerTrigram}
          >
            重置选择
          </button>
        </div>

        <div className="result-container">
          {resultHexagram ? (
            <HexagramDisplay hexagram={resultHexagram} />
          ) : (
            <div className="placeholder">
              <h3>请选择上卦和下卦</h3>
              <p>选择一个上卦和一个下卦来查看组合后的卦象</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
