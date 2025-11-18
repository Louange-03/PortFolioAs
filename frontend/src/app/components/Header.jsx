// Créer un composant Header responsive
'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#0b0f16]/95 backdrop-blur border-b border-white/10 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="h-7 w-7 rounded-full bg-white flex items-center justify-center">
            <span className="text-[#0b0f16] font-black text-sm">✦</span>
          </div>
          <span className="font-semibold text-white">PortFolio</span>
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link className="text-sky-400 px-2 py-1 rounded transition-colors" href="/">Accueil</Link>
          <Link className="text-white/80 hover:text-white px-2 py-1 rounded transition-colors" href="/competences">Compétences</Link>
          <Link className="text-white/80 hover:text-white px-2 py-1 rounded transition-colors" href="/experiences">Expériences</Link>
          <Link className="text-white/80 hover:text-white px-2 py-1 rounded transition-colors" href="/certifications">Certifications</Link>
        </nav>

        {/* Menu mobile */}
        <button 
          className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Menu mobile dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0b0f16] border-t border-white/10 animate-fade-in">
          <nav className="flex flex-col p-4 space-y-3">
            <Link 
              className="text-sky-400 py-3 px-4 rounded-lg bg-sky-500/10 border border-sky-500/20 transition-colors font-medium" 
              href="/" 
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              className="text-white/80 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-colors" 
              href="/competences" 
              onClick={() => setIsMenuOpen(false)}
            >
              Compétences
            </Link>
            <Link 
              className="text-white/80 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-colors" 
              href="/experiences" 
              onClick={() => setIsMenuOpen(false)}
            >
              Expériences
            </Link>
            <Link 
              className="text-white/80 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-colors" 
              href="/certifications" 
              onClick={() => setIsMenuOpen(false)}
            >
              Certifications
            </Link>
          </nav>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </header>
  );
}