import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-8">
      <div className="container mx-auto">
        {/* Liens du footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div>
            <h3 className="font-bold mb-2">Navigation</h3>
            <nav className="flex flex-col space-y-1">
              <Link href="/" className="hover:text-blue-300 transition">Accueil</Link>
              <Link href="/competences" className="hover:text-blue-300 transition">Compétences</Link>
              <Link href="/experiences" className="hover:text-blue-300 transition">Expériences</Link>
              <Link href="/projets" className="hover:text-blue-300 transition">Projets</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">Contact</h3>
            <nav className="flex flex-col space-y-1">
              <a href="mailto:email@example.com" className="hover:text-blue-300 transition">Email</a>
              <a href="#" className="hover:text-blue-300 transition">LinkedIn</a>
              <a href="#" className="hover:text-blue-300 transition">GitHub</a>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-4 text-center">
          <p>&copy; 2024 Mon Portfolio. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}