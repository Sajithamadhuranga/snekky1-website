import { useState } from 'react';

const links = ['Home', 'About Us', 'Tokenomics', 'How to Buy', 'Road Map', 'FAQS', 'Join Community'];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (label) => {
    const id = label.toLowerCase().replace(/\s+/g, '-');
    const section = document.getElementById(id === 'home' ? 'home' : id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#fff8df]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button type="button" onClick={() => scrollToSection('Home')} className="font-display text-3xl tracking-[0.2em] text-snekkyDark">
          SNEKKY
        </button>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <button
              key={link}
              type="button"
              onClick={() => scrollToSection(link)}
              className="text-sm font-medium text-snekkyDark transition hover:text-snekkyOrange"
            >
              {link}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-full border border-snekkyDark px-3 py-2 text-xl lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/10 bg-[#fff8df] px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <button
                key={link}
                type="button"
                onClick={() => scrollToSection(link)}
                className="text-left text-base font-medium text-snekkyDark"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
