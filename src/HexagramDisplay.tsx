import React from 'react';
import { generateYaoLines } from './hexagram-data';
import type { Hexagram } from './hexagram-data';

interface HexagramDisplayProps {
  hexagram: Hexagram;
}

const HexagramDisplay: React.FC<HexagramDisplayProps> = ({ hexagram }) => {
  const yaoLines = generateYaoLines(hexagram.binary);
  
  return (
    <div className="hexagram-display">
      <div className="hexagram-header">
        <h2 className="hexagram-name">{hexagram.chineseName}</h2>
        <div className="hexagram-symbol">{hexagram.symbol}</div>
      </div>
      
      <div className="hexagram-lines">
        {yaoLines.map((line, index) => (
          <div key={index} className="yao-line">
            <div className="line-number">{6 - index}</div>
            <div className={`line-symbol ${line === '———' ? 'yang-line' : 'yin-line'}`}>
              {line}
            </div>
          </div>
        ))}
      </div>
      
      <div className="hexagram-info">
        <div className="hexagram-judgment">
          <h4>卦辞</h4>
          <p>{hexagram.judgment}</p>
        </div>
        <div className="hexagram-meaning">
          <h4>卦意</h4>
          <p>{hexagram.meaning}</p>
        </div>
      </div>
    </div>
  );
};

export default HexagramDisplay;