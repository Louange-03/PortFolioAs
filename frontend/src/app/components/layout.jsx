export const metadata = { title: "Portfolio - Esso Mawaki ASSIAH" };

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-[#0f1720] text-white">{children}</body>
    </html>
  );
}
