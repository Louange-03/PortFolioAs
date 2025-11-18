// src/app/certifications/page.jsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

function IconChevron({ open }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconMenu(props){return(<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>)}
function IconClose(props){return(<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>)}

/* ===== TES VRAIES CERTIFICATIONS ===== */
const CERTIFICATIONS = [
  {
    title: "FCP Fortimanager 7.4 Administrator",
    organization: "Fortinet",
    date: "29/01/2024",
    type: "Self-Paced",
    category: "Cybersécurité",
    details: [
      "Administration avancée des firewalls FortiGate",
      "Gestion centralisée des politiques de sécurité",
      "Monitoring et reporting des équipements réseau"
    ]
  },
  {
    title: "NGL Linux Essentials",
    organization: "Network General League",
    date: "22/01/2024",
    type: "Certification",
    category: "Systèmes",
    details: [
      "Fondamentaux de l'administration Linux",
      "Gestion des fichiers et permissions",
      "Scripting bash et automatisation"
    ]
  },
  {
    title: "Cyber Security Essentials",
    organization: "Security Academy",
    date: "09/01/2024",
    type: "Certification",
    category: "Cybersécurité",
    details: [
      "Principes fondamentaux de la sécurité informatique",
      "Protection contre les menaces courantes",
      "Bonnes pratiques de sécurisation"
    ]
  },
  {
    title: "FCA-FortiGate 7.4 Operator",
    organization: "Fortinet",
    date: "25/12/2023",
    type: "Self-Paced",
    category: "Réseaux",
    details: [
      "Configuration de base des firewalls FortiGate",
      "Gestion des politiques et règles de sécurité",
      "Monitoring du trafic réseau"
    ]
  },
  {
    title: "FCA-Introduction to the Threat Landscape 2.0",
    organization: "Fortinet",
    date: "14/12/2023",
    type: "Self-Paced",
    category: "Cybersécurité",
    details: [
      "Panorama des cybermenaces actuelles",
      "Techniques d'attaque et méthodes de défense",
      "Veille stratégique en sécurité"
    ]
  }
];

const EDUCATION = [
  {
    title: "Bachelor Développement Web",
    school: "HETIC",
    period: "2024 – 2027",
    location: "Paris, France",
    details: [
      "Développement full-stack moderne",
      "Architecture cloud et DevOps",
      "Design UX/UI et méthodologies agiles"
    ]
  }
];

export default function Certifications() {
  const [openCert, setOpenCert] = useState(0);
  const [openEdu, setOpenEdu] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleCert = (i) => setOpenCert((curr) => (curr === i ? null : i));
  const toggleEdu = (i) => setOpenEdu((curr) => (curr === i ? null : i));

  return (
    <div className="min-h-screen bg-[#0f1720] text-white relative overflow-hidden flex flex-col">
      {/* Arrière-plan animé IDENTIQUE à l'accueil */}
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl animate-pulse-slow" />
      <div className="absolute left-1/3 top-1/4 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl animate-pulse-medium" />
      <div className="absolute right-[-120px] bottom-[-120px] h-96 w-96 rounded-full bg-sky-700/10 blur-3xl animate-pulse-slow" />
      
      {/* Grille subtile animée IDENTIQUE */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* NAVBAR - IDENTIQUE à l'accueil avec menu fonctionnel */}
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
            <Link className="hover:text-white/80 px-2 py-1 rounded transition-colors" href="/competences">Compétences</Link>
            <Link className="hover:text-white/80 px-2 py-1 rounded transition-colors" href="/experiences">Expériences</Link>
            <Link className="text-sky-400 px-2 py-1 rounded" href="/certifications">Certifications</Link>
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
                className="hover:text-white/80 py-2 px-3 rounded-lg transition-colors hover:bg-white/5" 
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
                className="text-sky-400 py-2 px-3 rounded-lg bg-white/5" 
                href="/certifications"
                onClick={() => setIsMenuOpen(false)}
              >
                Certifications
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-8 sm:py-14 flex-1">
        {/* En-tête avec animations */}
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4 animate-slide-up">
            Mes <span className="text-sky-400 animate-gradient bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Certifications</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 mb-4 sm:mb-6 max-w-2xl mx-auto px-2 animate-slide-up-delayed">
            Validation de mes compétences techniques à travers des certifications reconnues 
            dans le domains de la cybersécurité, du réseaux et des systèmes.
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto rounded-full animate-slide-up-delayed"></div>
        </div>

        {/* Section Certifications */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-6 sm:mb-8 animate-slide-up">
            <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-400/20">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white/90">Certifications Professionnelles</h2>
          </div>

          <div className="grid gap-4 sm:gap-6">
            {CERTIFICATIONS.map((cert, i) => {
              const open = openCert === i;
              return (
                <article
                  key={cert.title}
                  className={`bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl shadow-xl backdrop-blur transform transition-all duration-500 hover:scale-[1.02] hover:border-sky-500/30 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                          <h3 className="text-base sm:text-lg font-bold text-white/90">{cert.title}</h3>
                          <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium border w-fit ${
                            cert.category === 'Cybersécurité' 
                              ? 'bg-red-500/20 text-red-400 border-red-400/30'
                              : cert.category === 'Réseaux'
                              ? 'bg-blue-500/20 text-blue-400 border-blue-400/30'
                              : 'bg-green-500/20 text-green-400 border-green-400/30'
                          }`}>
                            {cert.category}
                          </span>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/60 mb-2 sm:mb-3">
                          <span className="flex items-center gap-1 sm:gap-2">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            {cert.organization}
                          </span>
                          <span className="flex items-center gap-1 sm:gap-2">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {cert.date}
                          </span>
                          <span className="flex items-center gap-1 sm:gap-2">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {cert.type}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => toggleCert(i)}
                        className="flex items-center justify-between gap-2 sm:gap-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 px-3 sm:px-4 py-2 text-left group border border-white/10 hover:border-sky-500/30 text-xs sm:text-sm mt-2 sm:mt-0 hover:scale-105"
                        aria-expanded={open}
                      >
                        <span className="font-medium text-white/85 group-hover:text-white">
                          Compétences
                        </span>
                        <span className="text-white/70 transition-all duration-300 group-hover:scale-110">
                          <IconChevron open={open} />
                        </span>
                      </button>
                    </div>

                    {open && (
                      <div className="mt-3 sm:mt-4 p-3 sm:p-4 rounded-lg bg-white/5 border border-white/10 animate-fade-in">
                        <ul className="space-y-2">
                          {cert.details.map((detail, j) => (
                            <li 
                              key={j}
                              className="flex items-start gap-2 sm:gap-3 text-white/80 text-xs sm:text-sm leading-relaxed"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Section Éducation */}
        <section>
          <div className="flex items-center gap-3 mb-6 sm:mb-8 animate-slide-up">
            <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-400/20">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14v6m0 0l-3-3m3 3l3-3" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white/90">Formation Académique</h2>
          </div>

          <div className="grid gap-4 sm:gap-6">
            {EDUCATION.map((edu, i) => {
              const open = openEdu === i;
              return (
                <article
                  key={edu.title}
                  className={`bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl shadow-xl backdrop-blur transform transition-all duration-500 hover:scale-[1.02] hover:border-blue-500/30 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ animationDelay: '600ms' }}
                >
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-bold text-white/90 mb-1 sm:mb-2">{edu.title}</h3>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/60 mb-2 sm:mb-3">
                          <span className="flex items-center gap-1 sm:gap-2">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            {edu.school}
                          </span>
                          <span className="flex items-center gap-1 sm:gap-2">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {edu.period}
                          </span>
                          <span className="flex items-center gap-1 sm:gap-2">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            {edu.location}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => toggleEdu(i)}
                        className="flex items-center justify-between gap-2 sm:gap-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 px-3 sm:px-4 py-2 text-left group border border-white/10 hover:border-blue-500/30 text-xs sm:text-sm mt-2 sm:mt-0 hover:scale-105"
                        aria-expanded={open}
                      >
                        <span className="font-medium text-white/85 group-hover:text-white">
                          Programme
                        </span>
                        <span className="text-white/70 transition-all duration-300 group-hover:scale-110">
                          <IconChevron open={open} />
                        </span>
                      </button>
                    </div>

                    {open && (
                      <div className="mt-3 sm:mt-4 p-3 sm:p-4 rounded-lg bg-white/5 border border-white/10 animate-fade-in">
                        <ul className="space-y-2">
                          {edu.details.map((detail, j) => (
                            <li 
                              key={j}
                              className="flex items-start gap-2 sm:gap-3 text-white/80 text-xs sm:text-sm leading-relaxed"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      {/* FOOTER - IDENTIQUE à l'accueil */}
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

      {/* Styles d'animation COMPLETS identiques à l'accueil */}
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