export const metadata = {
  title: "Portfolio - Esso Mawaki ASSIAH",
  description: "Portfolio de Esso Mawaki ASSIAH, Développeur Full-Stack & Cloud passionné par la création d'expériences web modernes et performantes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-[#0f1720] text-white antialiased">
        {children}
      </body>
    </html>
  );
}