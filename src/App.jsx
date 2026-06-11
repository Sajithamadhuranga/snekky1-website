import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardsSection from './components/CardsSection';
import AboutUs from './components/AboutUs';
import JoinCommunity from './components/JoinCommunity';
import HowToBuy from './components/HowToBuy';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Metaverse from './components/Metaverse';
import JoinCommunityFooter from './components/JoinCommunityFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(242,193,46,0.24),_transparent_45%)] text-snekkyDark">
      <Navbar />
      <main>
        <section className="scroll-mt-24 pb-6 sm:pb-8 lg:pb-10">
          <Hero />
        </section>

        <section className="scroll-mt-24 py-6 sm:py-8 lg:py-10">
          <CardsSection />
        </section>

        <section className="scroll-mt-24 py-6 sm:py-8 lg:py-10">
          <AboutUs />
        </section>

        <section id="more" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <div className="rounded-[2rem] border border-black/10 bg-white/60 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur sm:p-6 lg:p-8">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="font-display text-3xl uppercase text-snekkyDark sm:text-4xl">
                More from Snekky
              </h2>
            </div>
            <div className="space-y-8">
              <JoinCommunity />
              <HowToBuy />
              <Tokenomics />
              <Roadmap />
              <Metaverse />
            </div>
          </div>
        </section>
      </main>
      <JoinCommunityFooter />
    </div>
  );
}
