// src/app/competences/page.jsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

/* ===== Icônes animées pour chaque catégorie ===== */
function IconWeb({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

function IconFramework({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  );
}

function IconDatabase({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
    </svg>
  );
}

function IconTools({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function IconSecurity({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function IconSkills({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function IconMenu(props){return(<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>)}
function IconClose(props){return(<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>)}

/* ===== Données des compétences ===== */
const groups = [
  {
    icon: IconWeb,
    heading: "Langages Web",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "PHP"],
  },
  {
    icon: IconFramework,
    heading: "Frameworks & Librairies",
    items: ["React", "Next.js", "Node.js", "Tailwind CSS"],
  },
  {
    icon: IconDatabase,
    heading: "Bases de Données",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    icon: IconTools,
    heading: "Environnements & Outils",
    items: ["Windows", "Linux", "Cloud (Azure)", "Git", "VS Code", "Figma"],
  },
  {
    icon: IconSecurity,
    heading: "Réseaux & Sécurité",
    items: ["TCP/IP", "Protocoles réseau", "Sécurité des applications web", "Tests d'intrusion (bases)"],
  },
  {
    icon: IconSkills,
    heading: "Compétences Générales",
    items: [
      "Développement Front-End",
      "Développement Back-End",
      "Conception d'UI/UX",
      "Résolution de problèmes",
      "Communication interpersonnelle",
    ],
  },
];

const intro = {
  title: "Aperçu des Compétences Techniques et Interpersonnelles",
  text: "Une présentation organisée de mes aptitudes clés, couvrant les langages de programmation, les frameworks, les outils et les compétences générales.",
};

/* ===== Composant Dot animé ===== */
function Dot({ delay = 0 }) {
  return (
    <span 
      className="mt-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full border border-sky-400/40 animate-pulse"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-sky-400/80" />
    </span>
  );
}

export default function Competences() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f1720] text-white relative overflow-hidden flex flex-col">
      {/* Arrière-plan animé IDENTIQUE */}
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl animate-pulse-slow" />
      <div className="absolute left-1/3 top-1/4 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl animate-pulse-medium" />
      <div className="absolute right-[-120px] bottom-[-120px] h-96 w-96 rounded-full bg-sky-700/10 blur-3xl animate-pulse-slow" />
      
      {/* Grille subtile animée IDENTIQUE */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* NAVBAR - IDENTIQUE avec menu fonctionnel */}
      <header className="w-full bg-[#0b0f16]/95 backdrop-blur border-b border-white/10 z-50 sticky top-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="h-7 w-7 rounded-full bg-white flex items-center justify-center">
              <span className="text-[#0b0f16] font-black text-sm">✦</span>
            </div>
            <span className="font-semibold text-sm sm:text-base">PortFolio</span>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden sm:flex items-center gap-4 lg:gap-6 text-sm">
            <Link className="hover:text-white/80 px-2 py-1 rounded transition-colors" href="/">Accueil</Link>
            <Link className="text-sky-400 px-2 py-1 rounded" href="/competences">Compétences</Link>
            <Link className="hover:text-white/80 px-2 py-1 rounded transition-colors" href="/experiences">Expériences</Link>
            <Link className="hover:text-white/80 px-2 py-1 rounded transition-colors" href="/certifications">Certifications</Link>
          </nav>

          {/* Menu mobile hamburger FONCTIONNEL */}
          <div className="sm:hidden">
            <button 
              className="p-2 hover:bg-white/10 rounded transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>

        {/* Menu mobile - OUVRE ET FERME CORRECTEMENT */}
        {isMenuOpen && (
          <div className="sm:hidden bg-[#0b0f16] border-t border-white/10 py-4 px-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                className="hover:text-white/80 py-2 px-3 rounded-lg transition-colors hover:bg-white/5" 
                href="/"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                className="text-sky-400 py-2 px-3 rounded-lg bg-white/5" 
                href="/competences"
                onClick={() => setIsMenuOpen(false)}
              >
                Compétences
              </Link>
              <Link 
                className="hover:text-white/80 py-2 px-3 rounded-lg transition-colors hover:bg-white/5" 
                href="/experiences"
                onClick={() => setIsMenuOpen(false)}
              >
                Expériences
              </Link>
              <Link 
                className="hover:text-white/80 py-2 px-3 rounded-lg transition-colors hover:bg-white/5" 
                href="/certifications"
                onClick={() => setIsMenuOpen(false)}
              >
                Certifications
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-8 sm:py-14 flex-1">
        {/* Titre principal avec animation */}
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4 animate-slide-up">
            Mes <span className="text-sky-400 animate-gradient bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Compétences</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 mb-4 sm:mb-6 max-w-2xl mx-auto px-2 animate-slide-up-delayed">
            Découvrez l'étendue de mes compétences techniques et interpersonnelles 
            acquises au fil de mes expériences et formations.
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto rounded-full animate-slide-up-delayed"></div>
        </div>

        {/* Carte centrale avec animation */}
        <div className={`mx-auto w-full max-w-6xl transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Bandeau d'intro avec animation */}
          <div className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl shadow-xl backdrop-blur mb-6 sm:mb-8 transform transition-all duration-500 hover:scale-[1.02] hover:border-sky-500/30">
            <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 border-b border-white/10 rounded-t-xl sm:rounded-t-2xl">
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-white/90 mb-2 sm:mb-3">{intro.title}</h2>
              <p className="text-white/70 leading-relaxed text-sm sm:text-base">{intro.text}</p>
            </div>
          </div>

          {/* Grille des compétences */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {groups.map((group, groupIndex) => {
              const IconComponent = group.icon;
              return (
                <div
                  key={group.heading}
                  className={`bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur transform transition-all duration-500 hover:scale-105 hover:border-sky-500/30 hover:bg-white/10 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ animationDelay: `${groupIndex * 100}ms` }}
                >
                  {/* En-tête de catégorie avec icône */}
                  <div className="flex items-center gap-3 mb-3 sm:mb-4 pb-3 border-b border-white/10">
                    <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-400/20">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-white/90">{group.heading}</h3>
                  </div>

                  {/* Liste des compétences */}
                  <ul className="space-y-2 sm:space-y-3">
                    {group.items.map((item, itemIndex) => (
                      <li 
                        key={item} 
                        className="flex items-start gap-2 sm:gap-3 text-white/85 transition-all duration-300 hover:text-white hover:translate-x-1 text-sm"
                      >
                        <Dot delay={itemIndex * 100} />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Section supplémentaire avec animation */}
          <div className={`mt-8 sm:mt-12 bg-gradient-to-r from-sky-500/10 to-blue-500/10 border border-sky-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center backdrop-blur transform transition-all duration-700 ${
            isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
          }`} style={{animationDelay: '600ms'}}>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white/90">📈 En constante évolution</h3>
            <p className="text-white/70 text-sm sm:text-base">
              Je me forme continuellement aux nouvelles technologies et bonnes pratiques 
              pour rester à la pointe du développement web moderne.
            </p>
          </div>
        </div>
      </main>

      {/* FOOTER - IDENTIQUE */}
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

      {/* Styles d'animation COMPLETS identiques */}
      <style jsx global>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

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

        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animate-slide-up-delayed {
          animation: slideUp 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }

        .animate-pulse-medium {
          animation: pulseMedium 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}