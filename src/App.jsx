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

        <section id="join-community" className="scroll-mt-24">
          <JoinCommunity />
        </section>

        <section id="how-to-buy" className="scroll-mt-24">
          <HowToBuy />
        </section>

        <section id="tokenomics" className="scroll-mt-24">
          <Tokenomics />
        </section>

        <section id="road-map" className="scroll-mt-24">
          <Roadmap />
        </section>

        <section id="metaverse" className="scroll-mt-24">
          <Metaverse />
        </section>
      </main>
      <JoinCommunityFooter />
    </div>
  );
}