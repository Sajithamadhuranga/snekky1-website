export default function Hero() {
  return (
    <section id="home" className="bg-snekkyYellow flex items-center justify-center py-12 px-4 min-h-[300px] md:min-h-[400px] overflow-hidden">
      <h1
        className="flex items-center justify-center gap-1 sm:gap-2 md:gap-4"
        style={{
          fontFamily: "'Jokerman', cursive",
          fontWeight: 400,
          lineHeight: "100%",
          letterSpacing: "0.02em",
        }}
      >
        <span className="text-white text-6xl sm:text-8xl md:text-[120px] lg:text-[160px] drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)]">
          S
        </span>
        <span className="text-snekkyDark text-6xl sm:text-8xl md:text-[120px] lg:text-[160px]">
          N
        </span>
        <span className="text-white text-6xl sm:text-8xl md:text-[120px] lg:text-[160px] drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)]">
          E
        </span>

        {/* Mascot replacing the I */}
        <span className="relative inline-block w-20 h-24 sm:w-32 sm:h-36 md:w-44 md:h-52 lg:w-56 lg:h-64 -mx-1 sm:-mx-2 align-middle">
          <img
            src="/assets/snekky-mascot.png"
            alt="Snekky mascot"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full object-contain"
          />
        </span>

        <span className="text-white text-6xl sm:text-8xl md:text-[120px] lg:text-[160px] drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)]">
          K
        </span>
        <span className="text-snekkyDark text-6xl sm:text-8xl md:text-[120px] lg:text-[160px]">
          Y
        </span>
      </h1>
    </section>
  );
}