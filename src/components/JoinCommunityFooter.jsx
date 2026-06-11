import AssetImage from './AssetImage';

const socials = [
  {
    name: 'Telegram',
    href: '#',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
        <path d="M22 2L2 9l7 3 9-7-7 9 3 7 8-19z" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: '#',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Discord',
    href: '#',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
        <path d="M20.317 4.369A19.791 19.791 0 0016.558 3c-.211.375-.444.879-.608 1.282a18.27 18.27 0 00-3.9 0A12.64 12.64 0 0011.442 3a19.736 19.736 0 00-3.76 1.369C4.243 8.012 3.39 11.553 3.66 15.043a19.9 19.9 0 005.993 3.03c.483-.659.913-1.357 1.282-2.09a12.86 12.86 0 01-2.02-.97c.17-.124.336-.253.495-.385 3.897 1.793 8.118 1.793 11.967 0 .161.132.327.261.495.385-.643.382-1.32.71-2.022.971.37.733.799 1.43 1.283 2.09a19.84 19.84 0 005.997-3.03c.32-4.04-.546-7.55-2.813-10.674zM9.674 12.96c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.42 2.157-2.42 1.21 0 2.176 1.096 2.156 2.42 0 1.334-.955 2.419-2.156 2.419zm6.652 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.42 2.157-2.42 1.21 0 2.176 1.096 2.156 2.42 0 1.334-.946 2.419-2.156 2.419z" />
      </svg>
    ),
  },
  {
    name: 'Telegram2',
    href: '#',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function JoinCommunityFooter() {
  return (
    <footer className="bg-snekkyDark text-white border-y-4 border-snekkyYellow">
      <div className="px-4 sm:px-8 lg:px-16 py-10 sm:py-14 text-center max-w-3xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl uppercase mb-6">
          Join Community
        </h2>

        <div className="flex justify-center mb-6">
          <AssetImage
            src="/assets/snekky-mascot.png"
            alt="Snekky mascot"
            className="h-32 sm:h-40 w-auto object-contain"
          />
        </div>

        <p className="text-[10px] sm:text-xs text-white/70 leading-relaxed mb-6 max-w-xl mx-auto">
          This is a short explanation. Snekky is a fun and interactive platform.
          Keep it short, clear, and engaging to capture attention. Snekky is a
          fun and interactive platform. Keep it short, clear, and engaging to
          capture attention. This is a short explanation. Make it short and
          clear to keep students attentive. This is a short explanation.
        </p>

        <div className="flex justify-center gap-4 mb-6">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              aria-label={s.name}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition"
            >
              {s.icon}
            </a>
          ))}
        </div>

        <button className="bg-gradient-to-r from-snekkyOrange to-amber-700 text-white font-display text-sm sm:text-base uppercase px-8 py-2.5 rounded-full hover:scale-105 transition">
          FAQS
        </button>
      </div>

      <p className="text-center text-[10px] sm:text-xs text-white/50 pb-6">
        ©Copyright 2022 all right reserved by Snekky.
      </p>
    </footer>
  );
}