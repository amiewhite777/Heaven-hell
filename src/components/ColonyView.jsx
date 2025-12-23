import { useState } from 'react';
import { themes } from '../themes';
import { mockMembers } from '../mockData';
import Logo from './Logo';
import MemberCard from './MemberCard';

export default function ColonyView({ theme, onBack }) {
  const t = themes[theme];
  const [view, setView] = useState('browse');
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
