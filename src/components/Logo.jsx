import { themes } from '../themes';

export default function Logo({ theme, size = 'large' }) {
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
