import { useState, useEffect } from 'react';

// Mock data for Colony members
const mockMembers = [
  { id: 1, name: 'Alex', age: 28, bio: 'Artist & coffee enthusiast. Looking for deep conversations.', interests: ['art', 'music', 'philosophy'], online: true, hasPhoto: true },
  { id: 2, name: 'Jordan', age: 25, bio: 'Software dev by day, drummer by night.', interests: ['music', 'tech', 'hiking'], online: true, hasPhoto: true },
  { id: 3, name: 'Sam', age: 31, bio: 'Writer. Cat parent. Hopeless romantic.', interests: ['books', 'cats', 'cinema'], online: false, hasPhoto: true },
  { id: 4, name: 'Riley', age: 27, bio: 'Yoga instructor seeking adventure partner.', interests: ['yoga', 'travel', 'cooking'], online: true, hasPhoto: true },
  { id: 5, name: 'Casey', age: 29, bio: 'Photographer. Night owl. Always curious.', interests: ['photography', 'art', 'nightlife'], online: false, hasPhoto: true },
  { id: 6, name: 'Morgan', age: 26, bio: 'Plant parent extraordinaire. Let\'s get brunch.', interests: ['plants', 'food', 'design'], online: true, hasPhoto: true },
  { id: 7, name: 'Quinn', age: 30, bio: 'Architect with too many hobbies.', interests: ['design', 'climbing', 'wine'], online: true, hasPhoto: false },
  { id: 8, name: 'Avery', age: 24, bio: 'Just moved here. Show me around?', interests: ['exploring', 'music', 'dancing'], online: true, hasPhoto: true },
];

const interests = [
  'Art', 'Music', 'Film', 'Books', 'Gaming', 'Fitness', 'Yoga', 'Hiking',
  'Travel', 'Food', 'Cooking', 'Wine', 'Coffee', 'Tech', 'Design', 'Photography',
  'Dancing', 'Nightlife', 'Plants', 'Cats', 'Dogs', 'Philosophy', 'Science', 'Politics'
];

const hellInterests = [
  'Kink', 'BDSM', 'Poly', 'ENM', 'Casual', 'FWB', 'Parties', 'Fetish',
  'Dom', 'Sub', 'Switch', 'Voyeur', 'Exhib', 'Groups', 'Couples', 'Singles',
  ...interests.slice(0, 8)
];

// Theme configurations
const themes = {
  heaven: {
    name: 'Heaven',
    bg: 'bg-gradient-to-br from-amber-50 via-rose-50 to-sky-100',
    card: 'bg-white/70 backdrop-blur-xl border border-white/50',
    cardHover: 'hover:bg-white/90 hover:shadow-xl hover:shadow-rose-200/30',
    primary: 'bg-gradient-to-r from-rose-400 to-amber-400',
    primaryText: 'text-rose-600',
    accent: 'text-amber-600',
    button: 'bg-gradient-to-r from-rose-400 to-amber-400 hover:from-rose-500 hover:to-amber-500 text-white shadow-lg shadow-rose-300/50',
    buttonSecondary: 'bg-white/50 hover:bg-white/80 text-rose-600 border border-rose-200',
    input: 'bg-white/60 border-rose-200 focus:border-rose-400 focus:ring-rose-300',
    tag: 'bg-rose-100 text-rose-700 border border-rose-200',
    tagSelected: 'bg-gradient-to-r from-rose-400 to-amber-400 text-white border-transparent',
    online: 'bg-emerald-400',
    text: 'text-slate-800',
    textMuted: 'text-slate-500',
    glow: 'shadow-2xl shadow-amber-200/50',
    icon: '👼',
    font: "'Cormorant Garamond', serif",
  },
  hell: {
    name: 'Hell',
    bg: 'bg-gradient-to-br from-black via-red-950 to-black',
    card: 'bg-black/60 backdrop-blur-xl border border-red-900/50',
    cardHover: 'hover:bg-red-950/40 hover:shadow-xl hover:shadow-red-900/30',
    primary: 'bg-gradient-to-r from-red-600 to-orange-600',
    primaryText: 'text-red-500',
    accent: 'text-orange-500',
    button: 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white shadow-lg shadow-red-900/50',
    buttonSecondary: 'bg-red-950/50 hover:bg-red-900/50 text-red-400 border border-red-800',
    input: 'bg-black/60 border-red-900 focus:border-red-500 focus:ring-red-800 text-white placeholder-red-300/50',
    tag: 'bg-red-950 text-red-400 border border-red-800',
    tagSelected: 'bg-gradient-to-r from-red-600 to-orange-600 text-white border-transparent',
    online: 'bg-orange-500',
    text: 'text-white',
    textMuted: 'text-red-300/70',
    glow: 'shadow-2xl shadow-red-900/50',
    icon: '😈',
    font: "'Bebas Neue', sans-serif",
  }
};

// Components
function Logo({ theme, size = 'large' }) {
  const t = themes[theme];
  const sizeClasses = size === 'large' ? 'text-6xl mb-2' : 'text-3xl';
  
  return (
    <div className="text-center">
      <div className={`${sizeClasses} animate-pulse`}>{t.icon}</div>
      <h1 
        className={`${size === 'large' ? 'text-5xl' : 'text-2xl'} font-bold tracking-wider ${t.primaryText}`}
        style={{ fontFamily: t.font }}
      >
        {t.name}
      </h1>
    </div>
  );
}

function AgeGate({ onVerify, theme }) {
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

function RealmPicker({ onSelect }) {
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

function InterestPicker({ onComplete, theme }) {
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

function MemberCard({ member, theme, onClick }) {
  const t = themes[theme];
  
  return (
    <button
      onClick={onClick}
      className={`${t.card} ${t.cardHover} rounded-2xl p-4 text-left transition-all duration-300 transform hover:scale-[1.02] w-full`}
    >
      <div className="flex items-start gap-4">
        <div className="relative">
          <div className={`w-16 h-16 rounded-2xl ${theme === 'heaven' ? 'bg-gradient-to-br from-rose-200 to-amber-200' : 'bg-gradient-to-br from-red-800 to-orange-800'} flex items-center justify-center text-2xl`}>
            {member.hasPhoto ? '🧑' : '👤'}
          </div>
          {member.online && (
            <div className={`absolute -bottom-1 -right-1 w-5 h-5 ${t.online} rounded-full border-2 ${theme === 'heaven' ? 'border-white' : 'border-black'}`}></div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className={`font-bold ${t.text}`}>{member.name}</h3>
            <span className={t.textMuted}>{member.age}</span>
          </div>
          <p className={`${t.textMuted} text-sm mt-1 line-clamp-2`}>{member.bio}</p>
          <div className="flex gap-1 mt-2 flex-wrap">
            {member.interests.slice(0, 3).map(interest => (
              <span key={interest} className={`${t.tag} text-xs px-2 py-0.5 rounded-full`}>
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </button>
  );
}

function ColonyView({ theme, onBack }) {
  const t = themes[theme];
  const [view, setView] = useState('browse'); // 'browse' or 'chat'
  const [selectedMember, setSelectedMember] = useState(null);
  const onlineCount = mockMembers.filter(m => m.online).length;
  
  return (
    <div className={`min-h-screen ${t.bg}`}>
      {/* Header */}
      <div className={`${t.card} border-b sticky top-0 z-10`}>
        <div className="max-w-lg mx-auto p-4">
          <div className="flex items-center justify-between">
            <button onClick={onBack} className={`${t.textMuted} hover:${t.text}`}>
              ← Back
            </button>
            <Logo theme={theme} size="small" />
            <div className={`flex items-center gap-2 ${t.textMuted}`}>
              <div className={`w-2 h-2 ${t.online} rounded-full animate-pulse`}></div>
              {onlineCount} online
            </div>
          </div>
          
          {/* View Toggle */}
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => setView('browse')}
              className={`flex-1 py-2 rounded-xl font-medium transition-all ${
                view === 'browse' ? t.button : t.buttonSecondary
              }`}
            >
              Browse
            </button>
            <button
              onClick={() => setView('chat')}
              className={`flex-1 py-2 rounded-xl font-medium transition-all ${
                view === 'chat' ? t.button : t.buttonSecondary
              }`}
            >
              Colony Chat
            </button>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-lg mx-auto p-4">
        {view === 'browse' ? (
          <>
            <div className={`text-center py-6 ${t.textMuted}`}>
              <p className="text-lg font-medium">Your Colony</p>
              <p className="text-sm mt-1">{mockMembers.length} people who share your interests</p>
            </div>
            
            <div className="space-y-3">
              {mockMembers.map(member => (
                <MemberCard 
                  key={member.id} 
                  member={member} 
                  theme={theme}
                  onClick={() => setSelectedMember(member)}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="py-6">
            <div className={`${t.card} rounded-2xl p-6 text-center`}>
              <p className={`text-4xl mb-4`}>💬</p>
              <p className={`${t.text} font-medium`}>Colony Chat</p>
              <p className={`${t.textMuted} text-sm mt-2`}>
                Real-time group chat with your Colony.<br/>
                Say hi, see who vibes, slide into DMs.
              </p>
              <div className={`mt-6 p-4 rounded-xl ${theme === 'heaven' ? 'bg-rose-50' : 'bg-red-950/50'}`}>
                <p className={`${t.textMuted} text-sm italic`}>
                  "Hey everyone! Just joined 👋"
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Profile Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-end justify-center z-50 p-4">
          <div className={`${t.card} rounded-3xl p-6 max-w-lg w-full max-h-[80vh] overflow-auto`}>
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-4">
                <div className={`w-20 h-20 rounded-2xl ${theme === 'heaven' ? 'bg-gradient-to-br from-rose-200 to-amber-200' : 'bg-gradient-to-br from-red-800 to-orange-800'} flex items-center justify-center text-3xl`}>
                  {selectedMember.hasPhoto ? '🧑' : '👤'}
                </div>
                <div>
                  <h2 className={`text-2xl font-bold ${t.text}`}>{selectedMember.name}, {selectedMember.age}</h2>
                  <div className={`flex items-center gap-2 ${t.textMuted}`}>
                    {selectedMember.online && (
                      <>
                        <div className={`w-2 h-2 ${t.online} rounded-full`}></div>
                        Online now
                      </>
                    )}
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setSelectedMember(null)}
                className={`${t.textMuted} text-2xl hover:${t.text}`}
              >
                ×
              </button>
            </div>
            
            <p className={`${t.text} mt-6`}>{selectedMember.bio}</p>
            
            <div className="flex gap-2 mt-4 flex-wrap">
              {selectedMember.interests.map(interest => (
                <span key={interest} className={`${t.tag} px-3 py-1 rounded-full text-sm`}>
                  {interest}
                </span>
              ))}
            </div>
            
            <div className="flex gap-3 mt-8">
              <button className={`flex-1 py-3 rounded-2xl font-bold ${t.buttonSecondary} transition-all`}>
                Wave 👋
              </button>
              <button className={`flex-1 py-3 rounded-2xl font-bold ${t.button} transition-all`}>
                Message
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Main App
export default function App() {
  const [stage, setStage] = useState('realm'); // 'realm', 'age', 'interests', 'colony'
  const [realm, setRealm] = useState('heaven');
  const [verified, setVerified] = useState(false);
  const [interests, setInterests] = useState([]);
  
  const handleRealmSelect = (selectedRealm) => {
    if (selectedRealm === 'both') {
      setRealm('heaven'); // Start with Heaven
    } else {
      setRealm(selectedRealm);
    }
    setStage('age');
  };
  
  const handleAgeVerify = (isVerified) => {
    if (isVerified) {
      setVerified(true);
      setStage('interests');
    }
  };
  
  const handleInterestsComplete = (selectedInterests) => {
    setInterests(selectedInterests);
    setStage('colony');
  };
  
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Bebas+Neue&display=swap" rel="stylesheet" />
      
      {stage === 'realm' && (
        <RealmPicker onSelect={handleRealmSelect} />
      )}
      
      {stage === 'age' && (
        <AgeGate onVerify={handleAgeVerify} theme={realm} />
      )}
      
      {stage === 'interests' && (
        <InterestPicker onComplete={handleInterestsComplete} theme={realm} />
      )}
      
      {stage === 'colony' && (
        <ColonyView theme={realm} onBack={() => setStage('interests')} />
      )}
    </>
  );
}
