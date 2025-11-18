// src/app/experiences/page.jsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

function Chevron({ open }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const EXPERIENCES = [
  {
    role: "Développeur Front",
    company: "HETIC, HACKHETIC en partenariat avec AWS",
    period: "Mai 2025 – Actuel",
    location: "Paris, France",
    type: "Hackathon",
    icon: "🚀",
    details: [
      "Développement front d'un outil de veille collaborative avec gestion de playlists",
      "Démo et présentation du projet devant un jury professionnel",
      "Collaboration avec l'équipe pour intégrer les services AWS"
    ],
    technologies: ["React", "AWS", "JavaScript"]
  },
  {
    role: "Développeur Front",
    company: "Projet Site Web Complexe Scolaire",
    period: "Avril 2025 – Actuel",
    location: "Paris, France",
    type: "Projet Personnel",
    icon: "💼",
    details: [
      "Maquettes et prototypes avancés sur Figma",
      "Intégration responsive avec React et bonnes pratiques UX/UI",
      "Structuration des pages et préparation des fonctionnalités dynamiques"
    ],
    technologies: ["React", "Figma", "Tailwind CSS"]
  },
  {
    role: "Designer & Développeur Front",
    company: "HETIC, Projet Design",
    period: "Mars 2025",
    location: "Paris, France",
    type: "Design UX/UI",
    icon: "🎨",
    details: [
      "Recherche utilisateur approfondie (interviews, sondages)",
      "Prototypage interactif et tests utilisateurs itératifs",
      "Amélioration continue du design basée sur les retours utilisateurs"
    ],
    technologies: ["Figma", "Design Thinking", "Tests Utilisateurs"]
  },
  {
    role: "Développeur Full-Stack",
    company: "HETIC, Projet Jeux Marvel",
    period: "Février 2025",
    location: "Paris, France",
    type: "Projet Jeu",
    icon: "🎮",
    details: [
      "Développement de fonctionnalités front-end et back-end",
      "Mise en place de composants UI interactifs",
      "Implémentation de la logique métier du jeu"
    ],
    technologies: ["React", "Node.js", "JavaScript"]
  },
  {
    role: "Développeur Front",
    company: "HETIC, Projet Site Web",
    period: "Janvier 2025",
    location: "Paris, France",
    type: "Premier Projet",
    icon: "🌟",
    details: [
      "Développement front-end avec HTML/CSS/JavaScript",
      "Implémentation d'animations et micro-interactions",
      "Intégration responsive et optimisation de l'accessibilité"
    ],
    technologies: ["HTML", "CSS", "JavaScript"]
  }
];

export default function Experiences() {
  const [openIndex, setOpenIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const toggle = (i) => setOpenIndex((curr) => (curr === i ? null : i));

  return (
    <div className="min-h-screen bg-[#0f1720] text-white relative overflow-hidden flex flex-col">
      {/* Arrière-plan avec les mêmes halos bleus */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl animate-pulse-slow" />
      <div className="pointer-events-none absolute left-1/3 top-1/4 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl animate-pulse-medium" />
      <div className="pointer-events-none absolute right-[-120px] bottom-[-120px] h-96 w-96 rounded-full bg-sky-700/10 blur-3xl animate-pulse-slow" />

      {/* Header */}
      <header className="w-full bg-[#0b0f16]/95 backdrop-blur border-b border-white/10 z-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300">
            <div className="h-7 w-7 rounded-full bg-white flex items-center justify-center">
              <span className="text-[#0b0f16] font-black text-sm">✦</span>
            </div>
            <span className="font-semibold text-white text-sm sm:text-base">PortFolio</span>
          </Link>

          <nav className="hidden sm:flex items-center gap-4 lg:gap-6 text-sm">
            <Link className="hover:text-white/80 transition-colors px-2 py-1 rounded" href="/">Accueil</Link>
            <Link className="hover:text-white/80 transition-colors px-2 py-1 rounded" href="/competences">Compétences</Link>
            <Link className="text-sky-400 px-2 py-1 rounded" href="/experiences">Expériences</Link>
            <Link className="hover:text-white/80 transition-colors px-2 py-1 rounded" href="/certifications">Certifications</Link>
          </nav>

          {/* Menu mobile hamburger */}
          <div className="sm:hidden">
            <button className="p-2 text-white/80">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl px-4 sm:px-6 py-8 sm:py-14 flex-1">
        {/* En-tête avec animation */}
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4">
            Mon <span className="text-sky-400">Parcours</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
            Découvrez mon évolution à travers des projets concrets qui ont façonné 
            ma passion pour le développement web.
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto rounded-full mb-1 sm:mb-2"></div>
          <div className="w-12 sm:w-16 h-1 bg-sky-400/50 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {EXPERIENCES.map((exp, i) => {
            const open = openIndex === i;
            return (
              <article
                key={`${exp.company}-${i}`}
                className={`rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 shadow-xl backdrop-blur transform transition-all duration-500 hover:scale-[1.02] hover:border-sky-500/30 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* En-tête de la carte */}
                <header className="p-4 sm:p-6 border-b border-white/10">
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    {/* Icône personnalisée */}
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-500/20 border border-sky-400/30 flex items-center justify-center text-base sm:text-lg">
                      {exp.icon}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                        <h2 className="text-white/90 font-bold text-base sm:text-lg">{exp.role}</h2>
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-sky-500/20 text-sky-400 border border-sky-400/30 w-fit">
                          {exp.type}
                        </span>
                      </div>
                      
                      <p className="text-white/70 font-medium text-sm sm:text-base mb-2 sm:mb-3">{exp.company}</p>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-white/60">
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Technologies utilisées */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {exp.technologies.map((tech, index) => (
                      <span 
                        key={tech}
                        className="px-2 sm:px-3 py-1 rounded-full text-xs bg-white/10 text-white/70 border border-white/10 hover:bg-sky-500/20 hover:border-sky-400/30 hover:text-sky-300 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Bouton Détails */}
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between rounded-lg bg-gradient-to-r from-sky-500/10 to-blue-500/10 hover:from-sky-500/20 hover:to-blue-500/20 transition-all duration-300 px-3 sm:px-4 py-2 sm:py-3 text-left group border border-sky-500/20 text-sm"
                    aria-expanded={open}
                  >
                    <span className="font-medium text-white/85 group-hover:text-white flex items-center gap-2">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Découvrir les détails
                    </span>
                    <span className="text-white/70 transition-all duration-300 group-hover:scale-110 group-hover:text-sky-400">
                      <Chevron open={open} />
                    </span>
                  </button>
                </header>

                {/* Contenu repliable */}
                {open && (
                  <div className="p-4 sm:p-6 animate-fade-in bg-gradient-to-b from-sky-500/5 to-transparent rounded-b-xl sm:rounded-b-2xl">
                    <ul className="space-y-2 sm:space-y-3">
                      {exp.details.map((d, j) => (
                        <li 
                          key={j} 
                          className="flex items-start gap-2 sm:gap-3 text-white/80 transition-all duration-300 hover:text-white hover:translate-x-1 sm:hover:translate-x-2 group text-sm sm:text-base"
                        >
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-sky-400 mt-1.5 sm:mt-2 flex-shrink-0 animate-pulse group-hover:scale-125 sm:group-hover:scale-150 transition-transform duration-300"></span>
                          <span className="leading-relaxed">{d}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Note personnelle selon le projet */}
                    {i === 0 && (
                      <div className="mt-3 sm:mt-4 p-2 sm:p-3 rounded-lg bg-sky-500/10 border border-sky-400/20">
                        <p className="text-xs sm:text-sm text-sky-300 flex items-center gap-2">
                          <span>💡</span>
                          Mon premier hackathon ! Une expérience intense qui m'a appris l'importance du travail d'équipe sous pression.
                        </p>
                      </div>
                    )}
                    
                    {i === 1 && (
                      <div className="mt-3 sm:mt-4 p-2 sm:p-3 rounded-lg bg-blue-500/10 border border-blue-400/20">
                        <p className="text-xs sm:text-sm text-blue-300 flex items-center gap-2">
                          <span>🚧</span>
                          Projet en cours - Je découvre les défis du développement d'une application complexe from scratch.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Section de conclusion personnelle */}
        <div className={`mt-8 sm:mt-12 bg-gradient-to-r from-sky-500/10 to-blue-500/10 border border-sky-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center backdrop-blur transform transition-all duration-700 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
        }`} style={{animationDelay: '600ms'}}>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white/90">Une évolution constante</h3>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            Chaque projet représente une nouvelle étape dans mon apprentissage. 
            De mes débuts en développement front-end à mes premières expériences full-stack, 
            je continue de repousser mes limites pour créer des solutions innovantes et élégantes.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-3 sm:mt-4 text-white/60 text-xs sm:text-sm">
            <span>✨ Passion</span>
            <span>⚡ Rapidité d'apprentissage</span>
            <span>🎨 Sens du détail</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto w-full bg-[#0b0f16] border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-14 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 text-sm text-white/80 py-2 sm:py-0">
          <div className="flex items-center gap-3 sm:gap-6 flex-wrap justify-center">
            <Link href="/" className="hover:text-white transition-colors text-xs sm:text-sm">Accueil</Link>
            <Link href="/competences" className="hover:text-white transition-colors text-xs sm:text-sm">Compétences</Link>
            <Link href="/experiences" className="hover:text-white transition-colors text-xs sm:text-sm">Expériences</Link>
            <Link href="/certifications" className="hover:text-white transition-colors text-xs sm:text-sm">Certifications</Link>
          </div>
          <div className="text-white/60 text-xs sm:text-sm">
            © 2024 Esso M. ASSIAH
          </div>
        </div>
      </footer>

      {/* Styles d'animation */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

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

        @keyframes pulseSlow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }

        @keyframes pulseMedium {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }

        .animate-pulse-medium {
          animation: pulseMedium 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}