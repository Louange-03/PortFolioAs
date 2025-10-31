import Link from "next/link";
import { IconLinkedIn, IconGitHub } from "./Icons";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b0f16] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex items-center gap-6 text-sm text-white/80">
          <Link href="/" className="hover:text-white">Accueil</Link>
          <Link href="/competences" className="hover:text-white">Compétences</Link>
          <Link href="/experiences" className="hover:text-white">Expériences</Link>
          <Link href="/certifications" className="hover:text-white">Certifications</Link>
        </div>
        <div className="flex items-center gap-5 text-white/80">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white"><IconLinkedIn/></a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white"><IconGitHub/></a>
        </div>
      </div>
    </footer>
  );
}
