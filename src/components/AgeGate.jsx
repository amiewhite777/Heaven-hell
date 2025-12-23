import { useState } from 'react';
import { themes } from '../themes';
import Logo from './Logo';

export default function AgeGate({ onVerify, theme }) {
  const [dob, setDob] = useState({ day: '', month: '', year: '' });
  const [error, setError] = useState('');
  const t = themes[theme];

  const verify = () => {
    const birthDate = new Date(dob.year, dob.month - 1, dob.day);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age >= 18) {
      onVerify(true);
    } else {
      setError('You must be 18 or older to enter');
    }
  };

  return (
    <div className={`min-h-screen ${t.bg} flex items-center justify-center p-6`}>
      <div className={`${t.card} ${t.glow} rounded-3xl p-10 max-w-md w-full text-center`}>
        <Logo theme={theme} />
        <p className={`mt-6 ${t.textMuted}`}>Enter your date of birth</p>

        <div className="flex gap-3 mt-6">
          <input
            type="number"
            placeholder="DD"
            maxLength={2}
            className={`w-1/3 p-4 rounded-xl ${t.input} text-center text-xl font-bold border-2 outline-none transition-all`}
            value={dob.day}
            onChange={e => setDob({ ...dob, day: e.target.value })}
          />
          <input
            type="number"
            placeholder="MM"
            maxLength={2}
            className={`w-1/3 p-4 rounded-xl ${t.input} text-center text-xl font-bold border-2 outline-none transition-all`}
            value={dob.month}
            onChange={e => setDob({ ...dob, month: e.target.value })}
          />
          <input
            type="number"
            placeholder="YYYY"
            maxLength={4}
            className={`w-1/3 p-4 rounded-xl ${t.input} text-center text-xl font-bold border-2 outline-none transition-all`}
            value={dob.year}
            onChange={e => setDob({ ...dob, year: e.target.value })}
          />
        </div>

        {error && <p className="text-red-500 mt-4 text-sm">{error}</p>}

        <button
          onClick={verify}
          className={`w-full mt-8 p-4 rounded-2xl font-bold text-lg ${t.button} transition-all transform hover:scale-[1.02] active:scale-[0.98]`}
        >
          Verify Age
        </button>

        <p className={`mt-6 text-xs ${t.textMuted}`}>
          By continuing, you confirm you are 18+ and agree to our Terms of Service
        </p>
      </div>
    </div>
  );
}
