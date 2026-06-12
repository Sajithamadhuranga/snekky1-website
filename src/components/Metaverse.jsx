import AssetImage from './AssetImage';

const items = [
  {
    title: 'SNEKKY METAVERSE',
    desc: 'Stake your $ELON tokens to get land on Mars. Build and earn while playing the online multiplayer mission with friends',
   
    video: '/assets/metaverse-1.mp4',
    cta: 'LEARN MORE',
    badge: 'COMING SOON',
  },
  {
    title: 'RUFUS L2',
    desc: 'Rufus Testnet, an Arbitrum Nitro L2 blockchain, is in beta.',
    image: '/assets/metaverse-2.png',
    cta: 'LEARN MORE',
    badge: 'NOW LIVE',
  },
];

export default function Metaverse() {
  return (
    <section id="metaverse" className="bg-snekkyYellow py-8 sm:py-10 px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col gap-4 sm:gap-6 max-w-5xl mx-auto">
        {items.map((item) => (
          <div
            key={item.title}
            className="grid sm:grid-cols-2 rounded-2xl overflow-hidden bg-gradient-to-br from-amber-700 to-amber-950"
          >
            {/* Media (video if provided, else image) with badge */}
            <div className="relative">
              {item.video ? (
                <video
                  className="w-full h-48 sm:h-full object-cover"
                  poster={item.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={item.video} type="video/mp4" />
                </video>
              ) : (
                <AssetImage
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 sm:h-full object-cover"
                />
              )}
              <span className="absolute bottom-3 right-3 bg-snekkyDark text-snekkyYellow text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full -rotate-3 shadow-lg">
                {item.badge}
              </span>
            </div>

            {/* Text content */}
            <div className="flex flex-col justify-center p-5 sm:p-8 text-white">
              <h3 className="font-display text-xl sm:text-2xl text-snekkyYellow mb-3 uppercase">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm italic text-white/90 mb-5 leading-relaxed">
                {item.desc}
              </p>
              <button className="self-start bg-snekkyDark text-snekkyYellow text-xs sm:text-sm font-bold uppercase px-5 py-2 rounded-full hover:scale-105 transition border border-snekkyYellow/40">
                {item.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}