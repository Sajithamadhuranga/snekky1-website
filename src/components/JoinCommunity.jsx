import AssetImage from './AssetImage';

const updates = [
  {
    image: '/assets/update-1.png',
    text: 'we are excited to share all the new partnerships we make as we blast off to mars. There is no stopping us!',
  },
  {
    image: '/assets/update-2.png',
    text: 'we are excited to share all the new partnerships we make as we blast off to mars. There is no stopping us!',
  },
  {
    image: '/assets/update-3.png',
    text: 'we are excited to share all the new partnerships we make as we blast off to mars. There is no stopping us!',
  },
];

export default function JoinCommunity() {
  return (
    <section id="join-community" className="relative bg-snekkyYellow text-snekkyDark overflow-hidden">
      {/* Black triangle in top-left corner */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-snekkyDark pointer-events-none"
        style={{ clipPath: 'polygon(0 0, 40% 0, 0 40%)' }}
      />

      {/* Top area */}
      <div className="relative px-6 sm:px-10 lg:px-16 pt-10 pb-16 sm:pb-24 overflow-hidden">
        {/* Back button */}
        <button
          aria-label="Go back"
          className="absolute top-6 left-6 sm:top-8 sm:left-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-snekkyOrange flex items-center justify-center hover:scale-105 transition z-20"
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

        {/* Diagonal #SNEKKY ribbon */}
        <div className="absolute -inset-x-1/4 top-0 -rotate-[12deg] origin-top-left">
          <div className="bg-gradient-to-r from-snekkyOrange to-amber-700 py-3 sm:py-4">
            <p className="font-display text-sm sm:text-lg lg:text-xl uppercase tracking-[0.4em] whitespace-nowrap text-snekkyYellow text-center">
              #SNEKKY &nbsp;&nbsp; #I'M SNEKKY &nbsp;&nbsp; #SNEKKY &nbsp;&nbsp; #I'M SNEKKY &nbsp;&nbsp; #SNEKKY
            </p>
          </div>
        </div>

        {/* Title */}
        <h2 className="relative z-10 font-display text-3xl sm:text-5xl lg:text-6xl text-center mt-4 sm:mt-6 mb-10 sm:mb-14">
          Join the Snekky
        </h2>

        {/* Content row */}
        <div className="relative z-10 grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center">
          {/* Left text */}
          <div className="text-center lg:text-left">
            <h3 className="font-display text-white sm:text-4xl uppercase mb-3 leading-snug">
              Join Me and Together We Will Reach the Stars
            </h3>
            <p className="text-xs sm:text-sm text-white max-w-sm mx-auto lg:mx-0">
              Follow the story of snekky. Mars as he explores the greatest mysteries
              of the universe and seeks to return to the planet he once called home
              with the help of his friendly AI, made during his intergalactic travels.
            </p>
          </div>

          {/* Mascot */}
          <div className="flex justify-center">
            <AssetImage
              src="/assets/snekky-cowboy.png"
              alt="Snekky cowboy"
              className="h-40 sm:h-56 lg:h-64 w-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Follow buttons */}
          <div className="flex flex-col gap-4 items-center lg:items-end">
            <button className="w-full max-w-xs flex items-center justify-between gap-3 rounded-full bg-gradient-to-r from-snekkyOrange to-amber-700 px-6 py-3 font-semibold text-white hover:scale-105 transition">
              Follow
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 2L2 9l7 3 9-7-7 9 3 7 8-19z" />
              </svg>
            </button>
            <button className="w-full max-w-xs flex items-center justify-between gap-3 rounded-full bg-gradient-to-r from-snekkyOrange to-amber-700 px-6 py-3 font-semibold text-white hover:scale-105 transition">
              Follow
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom area */}
      <div className="relative px-6 sm:px-10 lg:px-16 py-12 sm:py-16">
        <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-center">
          {/* Left mascot + vertical text */}
          <div className="relative flex items-center justify-center lg:justify-start gap-2 sm:gap-4">
            <AssetImage
              src="/assets/snekky-cowboy.png"
              alt="Snekky media"
              className="h-48 sm:h-64 lg:h-80 w-auto object-contain"
            />
            <div className="hidden sm:flex flex-col gap-6 font-display text-2xl lg:text-3xl uppercase">
              <span className="[writing-mode:vertical-rl]">SNEKKY</span>
              <span className="[writing-mode:vertical-rl] self-end">MEDIA</span>
            </div>
          </div>

          {/* Update cards */}
          <div className="flex flex-col gap-4">
            {updates.map((update, i) => (
              <div
                key={i}
                className="flex items-stretch gap-4 rounded-2xl bg-snekkyOrange p-3 sm:p-4"
              >
                <AssetImage
                  src={update.image}
                  alt=""
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover flex-shrink-0"
                />
                <div className="flex flex-col justify-center text-white">
                  <p className="text-xs sm:text-sm leading-relaxed text-white/90 mb-1">
                    {update.text}
                  </p>
                  <span className="text-xs sm:text-sm font-bold text-snekkyYellow">
                    CHECK IT OUT!
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}