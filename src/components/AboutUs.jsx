import AssetImage from './AssetImage';

export default function AboutUs() {
  return (
    <section id="about-us" className="grid lg:grid-cols-[1.1fr_0.9fr]">
      {/* Left - black panel */}
      <div className="relative bg-snekkyDark text-white px-6 py-12 sm:px-10 lg:px-16 lg:py-20 flex flex-col justify-center">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase mb-6 sm:mb-8">
          About Us
        </h2>
        <p className="text-xs sm:text-sm leading-relaxed text-white/80 max-w-xl">
          This is a short explanation. Snekky is a fun and interactive platform.
          Keep it short, clear, and engaging to capture attention. Snekky is a
          fun and interactive platform. Keep it short, clear, and engaging to
          capture attention. This is a short explanation. Snekky is a fun and
          interactive platform. Keep it short, clear, and engaging to capture
          attention. This is a short explanation. Make it short and clear to
          keep students attentive. This is a short explanation. Snekky is a fun
          and interactive platform. Keep it short, clear, and engaging to
          capture attention. This is a short explanation. Make it short and
          clear to keep students attentive. This is a short explanation. Snekky
          is a fun and interactive platform. Keep it short, clear, and engaging
          to capture attention. This is a short explanation. Make it short and
          clear to keep students attentive. This is a short explanation. Snekky
          is a fun and engaging platform. Keep it short, clear, and engaging to
          capture attention. This is a short explanation. Make it short and
          clear to keep students attentive.
        </p>

        {/* Back button */}
        <button
          aria-label="Go back"
          className="absolute bottom-6 left-6 sm:bottom-8 sm:left-10 lg:bottom-10 lg:left-16 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-snekkyOrange flex items-center justify-center hover:scale-105 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 sm:w-7 sm:h-7 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Right - yellow panel with mascot */}
      <div className="relative bg-snekkyYellow flex items-center justify-center min-h-[320px] sm:min-h-[400px] lg:min-h-[500px] px-6 py-12 order-first lg:order-last">
        <div className="relative">
          <AssetImage
            src="/assets/snekky-aboutus.svg"
            alt="Snekky character"
            className="h-64 sm:h-80 lg:h-[420px] w-auto object-contain drop-shadow-2xl"
          />
          {/* Click here button on tail */}
          <button className="absolute bottom-[10%] right-[10%] sm:right-[40%] bg- text-black text-xs sm:text-sm md:text-base font-semibold px-4 py-1.5 sm:px-5 sm:py-2 rounded-full -rotate-6 shadow-lg hover:scale-105 transition">
            Click here
          </button>
        </div>
      </div>
    </section>
  );
}