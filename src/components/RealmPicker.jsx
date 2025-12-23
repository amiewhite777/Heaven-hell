import { useState } from 'react';

export default function RealmPicker({ onSelect }) {
  const [hovering, setHovering] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
      <div className="text-center max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Choose Your Realm
        </h1>
        <p className="text-slate-400 mb-12">Where will you find your people?</p>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Heaven */}
          <button
            onClick={() => onSelect('heaven')}
            onMouseEnter={() => setHovering('heaven')}
            onMouseLeave={() => setHovering(null)}
            className={`flex-1 p-10 rounded-3xl transition-all duration-500 transform ${
              hovering === 'heaven'
                ? 'bg-gradient-to-br from-amber-100 via-rose-100 to-sky-100 scale-105 shadow-2xl shadow-amber-300/50'
                : hovering === 'hell'
                  ? 'bg-slate-800/50 scale-95 opacity-50'
                  : 'bg-gradient-to-br from-amber-50/20 via-rose-50/20 to-sky-50/20 hover:scale-105'
            }`}
          >
            <div className="text-7xl mb-4">👼</div>
            <h2 className={`text-3xl font-bold mb-2 ${hovering === 'heaven' ? 'text-rose-600' : 'text-rose-300'}`}
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Heaven
            </h2>
            <p className={`${hovering === 'heaven' ? 'text-slate-600' : 'text-slate-400'}`}>
              Genuine connections.<br/>Relationships & friendships.
            </p>
          </button>

          {/* Hell */}
          <button
            onClick={() => onSelect('hell')}
            onMouseEnter={() => setHovering('hell')}
            onMouseLeave={() => setHovering(null)}
            className={`flex-1 p-10 rounded-3xl transition-all duration-500 transform ${
              hovering === 'hell'
                ? 'bg-gradient-to-br from-red-900 via-red-950 to-black scale-105 shadow-2xl shadow-red-900/50'
                : hovering === 'heaven'
                  ? 'bg-slate-800/50 scale-95 opacity-50'
                  : 'bg-gradient-to-br from-red-900/20 via-red-950/20 to-black/20 hover:scale-105'
            }`}
          >
            <div className="text-7xl mb-4">😈</div>
            <h2 className={`text-3xl font-bold mb-2 ${hovering === 'hell' ? 'text-red-500' : 'text-red-400'}`}
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Hell
            </h2>
            <p className={`${hovering === 'hell' ? 'text-red-200' : 'text-slate-400'}`}>
              No judgement.<br/>Casual & adventurous.
            </p>
          </button>
        </div>

        <button
          onClick={() => onSelect('both')}
          className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-rose-400 via-purple-500 to-red-600 text-white font-bold hover:scale-105 transition-all shadow-lg"
        >
          Why choose? Join Both ✨
        </button>
      </div>
    </div>
  );
}
