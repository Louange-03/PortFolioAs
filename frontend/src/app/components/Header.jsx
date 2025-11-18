"use client"; // Important pour les interactions

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo et titre */}
        <div className="flex items-center">
          {/* Remplacez par votre logo */}
          <div className="w-8 h-8 bg-blue-500 rounded mr-2"></div>
          <h1 className="text-xl font-bold">Portfolio</h1>
        </div>

        {/* Menu Desktop - visible sur grands écrans */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-300 transition">Accueil</Link>
          <Link href="/competences" className="hover:text-blue-300 transition">Compétences</Link>
          <Link href="/experiences" className="hover:text-blue-300 transition">Expériences</Link>
          <Link href="/projets" className="hover:text-blue-300 transition">Projets</Link>
        </nav>

        {/* Bouton Menu Mobile - visible sur petits écrans */}
        <button 
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Menu Mobile - s'affiche quand on clique */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-gray-700 rounded-lg p-4">
          <nav className="flex flex-col space-y-3">
            <Link 
              href="/" 
              className="hover:text-blue-300 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              href="/competences" 
              className="hover:text-blue-300 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Compétences
            </Link>
            <Link 
              href="/experiences" 
              className="hover:text-blue-300 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Expériences
            </Link>
            <Link 
              href="/projets" 
              className="hover:text-blue-300 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Projets
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}