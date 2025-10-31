import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-[#0b0f16]/95 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-full bg-white flex items-center justify-center">
            <span className="text-[#0b0f16] font-black text-sm">✦</span>
          </div>
          <span className="font-semibold">Logo</span>
        </div>
        <nav className="flex items-center gap-6 text-sm">
          <Link className="hover:text-white/80" href="/">Accueil</Link>
          <Link className="hover:text-white/80" href="/competences">Compétences</Link>
          <Link className="hover:text-white/80" href="/experiences">Expériences</Link>
          <Link className="hover:text-white/80" href="/certifications">Certifications</Link>
        </nav>
      </div>
    </header>
  );
}
