import AssetImage from './AssetImage';

const phases = [
  {
    badge: 'AI CREATOR',
    desc: 'Imagine any scene of snekky Mars to help him explore the next universe...',
    cta: 'TRY IT OUT',
    image: '/assets/roadmap-1.png',
  },
  {
    badge: 'ETH STAKING',
    desc: 'Stake your ETH to earn more',
    cta: 'GET STARTED',
    image: '/assets/roadmap-2.png',
  },
  {
    badge: 'MISSION SOLANA',
    desc: 'Bridge your $ELON tokens to and from the Solana blockchain',
    cta: 'GET STARTED',
    image: '/assets/roadmap-3.png',
  },
];

export default function Roadmap() {
  return (
    <section
      id="road-map"
      className="bg-snekkyDark py-8 sm:py-10 px-4 sm:px-8 lg:px-16 border-y-4 border-snekkyYellow"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {phases.map((phase) => (
          <div
            key={phase.badge}
            className="rounded-2xl overflow-hidden bg-gradient-to-b from-amber-700 to-amber-950"
          >
            {/* Image with badge overlay */}
            <div className="relative">
              <AssetImage
                src={phase.image}
                alt={phase.badge}
                className="w-full h-40 sm:h-48 object-"
              />
              <span className="absolute bottom-3 left-3 bg-snekkyDark text-snekkyYellow text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full -rotate-3 shadow-lg">
                {phase.badge}
              </span>
            </div>

            {/* Text content */}
            <div className="p-4 sm:p-5 text-center">
              <p className="text-xs sm:text-sm text-white/90 mb-4 leading-relaxed">
                {phase.desc}
              </p>
              <button className="bg-snekkyDark text-snekkyYellow text-xs sm:text-sm font-bold uppercase px-5 py-2 rounded-full hover:scale-105 transition border border-snekkyYellow/40">
                {phase.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}