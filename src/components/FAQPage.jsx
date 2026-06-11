const faqs = [
  {
    question: 'What is Snekky?',
    answer: 'Snekky is a fun, community-first meme project that brings playful branding and crypto utility together.',
  },
  {
    question: 'How do I buy?',
    answer: 'Use a wallet like MetaMask, fund it with ETH, and swap through your preferred DEX.',
  },
  {
    question: 'Is the token safe?',
    answer: 'The project is designed with a simple structure and transparent community communication.',
  },
];

export default function FAQPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="rounded-[2rem] border border-black/10 bg-white/80 p-8 shadow-xl lg:p-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-snekkyOrange">FAQs</p>
        <h2 className="mb-8 font-display text-4xl uppercase text-snekkyDark sm:text-5xl">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.question} className="rounded-[1.25rem] border border-black/10 bg-[#fff8df] p-5">
              <h3 className="text-xl font-semibold text-snekkyDark">{item.question}</h3>
              <p className="mt-2 leading-8 text-snekkyDark/80">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
