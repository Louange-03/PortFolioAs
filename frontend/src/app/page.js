// src/app/page.jsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

/* ===== Icônes ===== */
function IconMail(props){return(<svg viewBox="0 0 24 24" width="20" height="20" fill="none" {...props}><path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/></svg>)}
function IconPhone(props){return(<svg viewBox="0 0 24 24" width="20" height="20" fill="none" {...props}><path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h2a2 2 0 0 1 2 1.72 12.66 12.66 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-1.37a2 2 0 0 1 2.11-.45 12.66 12.66 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>)}
function IconLinkedIn(props){return(<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}><path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.06c.63-1.2 2.17-2.46 4.47-2.46 4.78 0 5.66 3.14 5.66 7.22V24h-5V16.2c0-1.86-.03-4.25-2.6-4.25-2.6 0-3 2.03-3 4.12V24h-5z"/></svg>)}
function IconGitHub(props){return(<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}><path d="M12 .5A12 12 0 0 0 0 12.7c0 5.4 3.4 10 8 11.6.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.2-1.6-1.2-1.6-1-.7 0-.7 0-.7 1.1.1 1.6 1.2 1.6 1.2 1 .1.9 2 .9 2 1.1 2 3.1 1.4 3.8 1.1.1-.8.4-1.4.7-1.8-2.6-.3-5.3-1.4-5.3-6a4.8 4.8 0 0 1 1.3-3.3c-.1-.3-.6-1.6.1-3.3 0 0 1-.3 3.3 1.3a11.4 11.4 0 0 1 6 0C17 5.5 18 5.8 18 5.8c.7 1.7.2 3 .1 3.3a4.8 4.8 0 0 1 1.3 3.3c0 4.6-2.8 5.7-5.4 6 .4.3.8 1 .8 2.2v3.2c0 .3.3.7.9.6 4.6-1.6 8-6.2 8-11.6A12 12 0 0 0 12 .5z"/></svg>)}

/* ===== VISUELS PRO ===== */
function ProLaptopSVG({ className }) {
  return (
    <svg viewBox="0 0 200 140" className={className} fill="none">
      <defs>
        <linearGradient id="proGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#38BDF8"/>
          <stop offset="1" stopColor="#0EA5E9"/>
        </linearGradient>
      </defs>
      
      <g transform="skewX(-5)">
        <rect x="45" y="15" width="130" height="80" rx="8" fill="#0B1622" stroke="url(#proGradient)" strokeWidth="2"/>
        <rect x="55" y="25" width="110" height="60" rx="4" fill="#152535"/>
        
        <rect x="65" y="35" width="40" height="4" rx="2" fill="#38BDF8" opacity="0.8"/>
        <rect x="65" y="45" width="60" height="3" rx="1.5" fill="#38BDF8" opacity="0.6"/>
        <rect x="65" y="52" width="45" height="3" rx="1.5" fill="#38BDF8" opacity="0.4"/>
        <circle cx="85" cy="65" r="3" fill="#0EA5E9" opacity="0.7"/>
        <rect x="75" y="62" width="20" height="6" rx="3" fill="#0EA5E9" opacity="0.3"/>
      </g>
      
      <rect x="60" y="95" width="100" height="8" rx="3" fill="#1E293B" stroke="url(#proGradient)" strokeWidth="1.5"/>
      <rect x="75" y="103" width="70" height="4" rx="2" fill="#374151"/>
    </svg>
  );
}

function ProHeadphonesSVG({ className }) {
  return (
    <svg viewBox="0 0 160 140" className={className} fill="none">
      <defs>
        <linearGradient id="hpGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#38BDF8"/>
          <stop offset="1" stopColor="#0EA5E9"/>
        </linearGradient>
      </defs>
      
      <path d="M30 65 Q80 40 130 65" stroke="url(#hpGradient)" strokeWidth="8" strokeLinecap="round" fill="none"/>
      
      <g>
        <circle cx="40" cy="75" r="20" fill="#1E293B" stroke="url(#hpGradient)" strokeWidth="2.5"/>
        <circle cx="40" cy="75" r="12" fill="#374151" stroke="url(#hpGradient)" strokeWidth="1.5"/>
        <circle cx="36" cy="71" r="2" fill="#38BDF8" opacity="0.6"/>
      </g>
      
      <g>
        <circle cx="120" cy="75" r="20" fill="#1E293B" stroke="url(#hpGradient)" strokeWidth="2.5"/>
        <circle cx="120" cy="75" r="12" fill="#374151" stroke="url(#hpGradient)" strokeWidth="1.5"/>
        <circle cx="116" cy="71" r="2" fill="#38BDF8" opacity="0.6"/>
      </g>
    </svg>
  );
}

/* ===== DONNÉES PERSONNELLES ===== */
const INFO = {
  name: "Esso M. ASSIAH",
  title: "DÉVELOPPEUR FRONT-END & BACK-END",
  city: "Paris, France",
  email: "assiahlouange@gmail.com",
  phone: "+33 X XX XX XX XX",
  linkedin: "https://www.linkedin.com/in/esso-mawaki-assiah-7742852a9/Esso Mawaki ASSIAH",
  github: "https://github.com/Louange-03",
  stats: [
    { number: "3+", label: "Années d'Expérience" },
    { number: "13+", label: "Projets Complétés" },
    { number: "Plusieurs", label: "Retours Positifs" }
  ]
};

export default function Home() {
  const [show, setShow] = useState(false);
  const [laptopVisible, setLaptopVisible] = useState(false);
  const [headphonesVisible, setHeadphonesVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => { 
    const t = setTimeout(() => setShow(true), 100);
    
    // Animations séquencées
    const t1 = setTimeout(() => setTitleVisible(true), 300);
    const t2 = setTimeout(() => setLaptopVisible(true), 800);
    const t3 = setTimeout(() => setHeadphonesVisible(true), 1200);
    
    return () => {
      clearTimeout(t);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0f1720] text-white relative overflow-hidden flex flex-col">
      {/* Arrière-plan animé */}
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl animate-pulse-slow" />
      <div className="absolute left-1/3 top-1/4 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl animate-pulse-medium" />
      <div className="absolute right-[-120px] bottom-[-120px] h-96 w-96 rounded-full bg-sky-700/10 blur-3xl animate-pulse-slow" />
      
      {/* Grille subtile animée */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* NAVBAR */}
      <header className="w-full bg-[#0b0f16]/95 backdrop-blur border-b border-white/10 z-20">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-full bg-white flex items-center justify-center">
              <span className="text-[#0b0f16] font-black text-sm">✦</span>
            </div>
            <span className="font-semibold">PortFolio</span>
          </div>

          <nav className="flex items-center gap-6 text-sm">
            <Link className="text-sky-400" href="/">Accueil</Link>
            <Link className="hover:text-white/80" href="/competences">Compétences</Link>
            <Link className="hover:text-white/80" href="/experiences">Expériences</Link>
            <Link className="hover:text-white/80" href="/certifications">Certifications</Link>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="mx-auto max-w-7xl px-6 pt-14 pb-20 flex-1">
        {/* Titre avec animation spectaculaire */}
        <section className={`text-center transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="overflow-hidden">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight animate-slide-up">
              Salut, moi c'est <span className="text-sky-400 animate-gradient bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">{INFO.name}</span>
            </h1>
          </div>
          <div className="overflow-hidden">
            <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl mx-auto animate-slide-up-delayed">
              {INFO.title}. Je conçois des interfaces modernes et développe des applications 
              full-stack performantes et évolutives.
            </p>
          </div>
        </section>

        {/* Scène centrale avec animations impressionnantes */}
        <section className="relative mt-12 flex items-center justify-center">
          <div className="relative w-full max-w-4xl mx-auto">
            
            {/* PC avec animation "apparition depuis le bas" */}
            <div className={`absolute -left-8 md:-left-20 top-2 md:top-0 transition-all duration-1000 ${laptopVisible ? 'opacity-95 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-50'}`}>
              <ProLaptopSVG className="w-44 md:w-64" />
            </div>

            {/* Photo au centre avec animation zoom */}
            <div className={`relative z-10 mx-auto w-44 h-44 md:w-56 md:h-56 rounded-full ring-4 ring-sky-500/20 shadow-2xl overflow-hidden transition-all duration-1000 ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <img
                src="/photo1.jpg"
                alt={INFO.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-full items-center justify-center text-white/60">
                <span className="text-lg font-semibold">Photo</span>
              </div>
              <div className="absolute -right-2 -bottom-2 bg-gradient-to-r from-sky-600 to-sky-500 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg animate-pulse">
                Full-Stack
              </div>
            </div>

            {/* Casque avec animation "glissement depuis la droite" */}
            <div className={`absolute -right-6 md:-right-16 top-8 md:top-4 transition-all duration-1000 ${headphonesVisible ? 'opacity-95 translate-x-0' : 'opacity-0 translate-x-20'}`}>
              <ProHeadphonesSVG className="w-40 md:w-56" />
            </div>

            {/* Halo pulsant */}
            <div className="absolute left-0 right-0 -bottom-8 mx-auto h-12 w-3/4 rounded-full bg-sky-900/40 blur-3xl animate-pulse-slow" />
          </div>
        </section>

        {/* Barre de contacts avec animation stagger */}
        <section className={`mt-12 flex flex-wrap items-center justify-center gap-3 transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { href: `mailto:${INFO.email}`, icon: IconMail, text: INFO.email },
            { href: `tel:${INFO.phone.replace(/\s/g,'')}`, icon: IconPhone, text: INFO.phone },
            { href: INFO.linkedin, icon: IconLinkedIn, text: "louange03" },
            { href: INFO.github, icon: IconGitHub, text: "louange03" }
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              className="group flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition-all duration-300 hover:border-sky-500/30 hover:scale-105 animate-stagger"
              style={{ animationDelay: `${index * 100 + 1500}ms` }}
            >
              <item.icon/>
              <span className="max-w-[160px] truncate">{item.text}</span>
            </a>
          ))}
        </section>

        {/* CTA avec animation */}
        <section className={`mt-8 text-center transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a 
            href="/cv.pdf" 
            download 
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-sky-700 to-sky-600 hover:from-sky-600 hover:to-sky-500 px-6 py-3 transition-all shadow-lg hover:shadow-xl hover:scale-105 animate-bounce-gentle"
          >
            <span>Télécharger mon CV</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16l-4-4m0 0l4-4m-4 4h8m-8 4h8m4 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
        </section>

        {/* SECTION "ABOUT ME" OPTIMISÉE */}
        <section className="mt-20">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl backdrop-blur">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              
              {/* Partie Texte - Plus compacte */}
              <div className="space-y-4">
                <div className="overflow-hidden">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 animate-slide-up">
                    HELLO
                    <br />
                    <span className="text-sky-400 animate-gradient bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                      I'M {INFO.name.split(' ')[0].toUpperCase()}
                    </span>
                  </h2>
                </div>
                
                <p className="text-white/80 leading-relaxed text-sm md:text-base">
                  Développeur FRONT & BACK passionné dédié à la création d'expériences digitales 
                  exceptionnelles. Avec un œil attentif aux détails et une approche centrée sur 
                  l'utilisateur, je transforme les idées en solutions intuitives et performantes.
                </p>

                {/* Stats compactes */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {INFO.stats.map((stat, index) => (
                    <div 
                      key={index} 
                      className="text-center p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 animate-stagger"
                      style={{ animationDelay: `${index * 100 + 2000}ms` }}
                    >
                      <div className="text-xl md:text-2xl font-bold text-sky-400">{stat.number}</div>
                      <div className="text-xs text-white/70 mt-1 leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Boutons compacts */}
                <div className="flex gap-3 pt-2">
                  <Link 
                    href="/projets" 
                    className="flex-1 bg-sky-700 hover:bg-sky-600 text-white py-2 px-4 rounded-lg text-center transition-all hover:scale-105 text-sm"
                  >
                    Voir mes Projets
                  </Link>
                  <Link 
                    href="/contact" 
                    className="flex-1 border border-white/20 hover:bg-white/10 py-2 px-4 rounded-lg text-center transition-all hover:scale-105 text-sm"
                  >
                    Me Contacter
                  </Link>
                </div>
              </div>

              {/* Partie Photo - Réduite et mieux intégrée */}
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-sky-900/50 to-sky-700/30 aspect-[4/5] max-w-[280px] mx-auto">
                  <img
                    src="/photo2.jpg"
                    alt={INFO.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback stylisé */}
                  <div className="hidden w-full h-full bg-gradient-to-br from-sky-900 to-sky-700 rounded-xl flex items-center justify-center text-white/60">
                    <div className="text-center p-4">
                      <div className="text-3xl mb-2">👨‍💻</div>
                      <div className="font-semibold">{INFO.name.split(' ')[0]}</div>
                      <div className="text-sm mt-1">Développeur</div>
                    </div>
                  </div>
                </div>
                
                {/* Éléments décoratifs subtils */}
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-sky-500/20 rounded-full blur-lg"></div>
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-sky-400/10 rounded-full blur-md"></div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="mt-auto w-full bg-[#0b0f16] border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between text-sm text-white/80">
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <Link href="/competences" className="hover:text-white transition-colors">Compétences</Link>
            <Link href="/experiences" className="hover:text-white transition-colors">Expériences</Link>
            <Link href="/certifications" className="hover:text-white transition-colors">Certifications</Link>
          </div>
          <div className="flex items-center gap-5">
            <a href={INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors hover:scale-110"><IconLinkedIn/></a>
            <a href={INFO.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors hover:scale-110"><IconGitHub/></a>
            <a href={`mailto:${INFO.email}`} className="hover:text-white transition-colors hover:scale-110"><IconMail/></a>
          </div>
        </div>
      </footer>

      {/* Animations CSS améliorées */}
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

        @keyframes pulseSlow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }

        @keyframes pulseMedium {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        @keyframes bounceGentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes staggerAppear {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
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

        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }

        .animate-pulse-medium {
          animation: pulseMedium 3s ease-in-out infinite;
        }

        .animate-bounce-gentle {
          animation: bounceGentle 2s ease-in-out infinite;
        }

        .animate-stagger {
          opacity: 0;
          animation: staggerAppear 0.6s ease-out forwards;
        }

        /* Flottements améliorés */
        @keyframes floatSlow { 
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        @keyframes floatMid { 
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-1deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        @keyframes floatFast { 
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }

        .animate-float-slow { animation: floatSlow 8s ease-in-out infinite; }
        .animate-float-mid { animation: floatMid 7s ease-in-out infinite; }
        .animate-float-fast { animation: floatFast 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
}