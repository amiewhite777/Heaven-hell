import { themes } from '../themes';

export default function MemberCard({ member, theme, onClick }) {
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
