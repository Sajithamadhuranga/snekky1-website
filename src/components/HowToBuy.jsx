import AssetImage from './AssetImage';

const steps = [
  {
    title: '01 MAKE WALLET',
    desc: 'This is a short explanation. make it short and clear to keep students attentive.',
    image: '/assets/howtobuy-1.png',
  },
  {
    title: '02 GET SOME ETH',
    desc: 'This is a short explanation. make it short and clear to keep students attentive.',
    image: '/assets/howtobuy-2.png',
  },
];

export default function HowToBuy() {
  return (
    <section id="how-to-buy" className="bg-snekkyDark text-white py-10 sm:py-14">
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-center uppercase mb-8 sm:mb-10">
        How to Buy
      </h2>

      <div className="px-4 sm:px-8 lg:px-16 grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.title}
            className="flex items-stretch gap-4 rounded-2xl overflow-hidden bg-gradient-to-br from-snekkyOrange to-amber-800"
          >
            <AssetImage
              src={step.image}
              alt={step.title}
              className="w-24 h-24 sm:w-28 sm:h-28 object-cover flex-shrink-0"
            />
            <div className="flex flex-col justify-center py-3 pr-4">
              <h3 className="font-display text-sm sm:text-base mb-1 text-snekkyYellow">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-snug">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}