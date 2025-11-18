import Link from "next/link";
import { IconLinkedIn, IconGitHub } from "./Icons";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b0f16] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-center sm:text-left">
        {/* Navigation links - responsive */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 text-sm text-white/80">
          <Link href="/" className="hover:text-white transition-colors text-xs sm:text-sm">Accueil</Link>
          <Link href="/competences" className="hover:text-white transition-colors text-xs sm:text-sm">Compétences</Link>
          <Link href="/experiences" className="hover:text-white transition-colors text-xs sm:text-sm">Expériences</Link>
          <Link href="/certifications" className="hover:text-white transition-colors text-xs sm:text-sm">Certifications</Link>
        </div>
        
        {/* Social icons - responsive */}
        <div className="flex items-center justify-center sm:justify-end gap-4 sm:gap-5 text-white/80">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-white transition-colors hover:scale-110"
          >
            <IconLinkedIn/>
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-white transition-colors hover:scale-110"
          >
            <IconGitHub/>
          </a>
        </div>
      </div>
    </footer>
  );
}