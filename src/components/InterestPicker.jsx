import { useState } from 'react';
import { themes } from '../themes';
import { interests, hellInterests } from '../mockData';
import Logo from './Logo';

export default function InterestPicker({ onComplete, theme }) {
  const t = themes[theme];
  const [selected, setSelected] = useState([]);
  const availableInterests = theme === 'hell' ? hellInterests : interests;

  const toggle = (interest) => {
    if (selected.includes(interest)) {
      setSelected(selected.filter(i => i !== interest));
    } else if (selected.length < 8) {
      setSelected([...selected, interest]);
    }
  };

  return (
    <div className={`min-h-screen ${t.bg} flex items-center justify-center p-6`}>
      <div className={`${t.card} ${t.glow} rounded-3xl p-8 max-w-lg w-full`}>
        <Logo theme={theme} size="small" />

        <h2 className={`text-2xl font-bold ${t.text} mt-6 text-center`}>
          What are you into?
        </h2>
        <p className={`${t.textMuted} text-center mt-2`}>
          Pick up to 8 interests to find your Colony
        </p>

        <div className="flex flex-wrap gap-2 mt-6 justify-center">
          {availableInterests.map(interest => (
            <button
              key={interest}
              onClick={() => toggle(interest)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 border ${
                selected.includes(interest) ? t.tagSelected : t.tag
              }`}
            >
              {interest}
            </button>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <span className={t.textMuted}>{selected.length}/8 selected</span>
          <button
            onClick={() => selected.length >= 3 && onComplete(selected)}
            disabled={selected.length < 3}
            className={`px-8 py-3 rounded-2xl font-bold ${t.button} transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`}
          >
            Find My Colony →
          </button>
        </div>
      </div>
    </div>
  );
}
