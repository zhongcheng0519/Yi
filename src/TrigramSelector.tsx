import React from 'react';
import { BASE_HEXAGRAMS } from './hexagram-data';
import type { BaseHexagram } from './hexagram-data';

interface TrigramSelectorProps {
  label: string;
  selectedTrigram: number | null;
  onTrigramChange: (trigramId: number) => void;
}

const TrigramSelector: React.FC<TrigramSelectorProps> = ({
  label,
  selectedTrigram,
  onTrigramChange
}) => {
  return (
    <div className="trigram-selector">
      <h3 className="selector-label">{label}</h3>
      <div className="trigram-grid">
        {BASE_HEXAGRAMS.map((trigram) => (
          <button
            key={trigram.id}
            className={`trigram-button ${selectedTrigram === trigram.id ? 'selected' : ''}`}
            onClick={() => onTrigramChange(trigram.id)}
            title={`${trigram.name} - ${trigram.description}`}
          >
            <div className="trigram-symbol">{trigram.symbol}</div>
            <div className="trigram-name">{trigram.name}</div>
            <div className="trigram-description">{trigram.description}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TrigramSelector;