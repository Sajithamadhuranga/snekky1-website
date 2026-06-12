import Card from './Card';
import AssetImage from './AssetImage';

const cardImages = Array.from({ length: 21 }, (_, i) => `/assets/cards/card-${(i % 14) + 1}.svg`);

export default function CardsSection() {
  return (
    <section id="cards" className="relative bg-snekkyYellow py-10 sm:py-14 lg:py-16 overflow-hidden">
      {/* Background grid of cards */}
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-2 sm:gap-3 px-2 sm:px-4">
        {cardImages.map((img, i) => (
          <Card
            key={img}
            image={img}
            alt={`Snekky card ${i + 1}`}
            className="aspect-square opacity-60 sm:opacity-25"
          />
        ))}
      </div>

      {/* Centered mascot overlay with button */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative pointer-events-auto">
          <AssetImage
            src="/assets/snekky-mascot-large.svg"
            alt="Snekky mascot"
            className="h-48 w-auto sm:h-64 md:h-80 lg:h-96 object-contain drop-shadow-2xl"
          />
          {/* Click here button positioned on mascot's tail */}
          <button className="absolute bottom-[14%] left-1/2 -translate-x-1/2 bg-text-sm sm:text-sm md:text-base font-semibold px-3 py-1.5 sm:px-6 sm:py-2 rounded-full -rotate-12 shadow-lg hover:scale-105 transition">
            Click here
          </button>
        </div>
      </div>

      {/* Tagline */}
      <div className="relative mt-6 sm:mt-8 text-center px-4">
        <h2 className="font-handdrawn text-2xl sm:text-3xl md:text-4xl text-snekkyDark italic">
          REACH FOR THE SNEKKY!
        </h2>
      </div>
    </section>
  );
}