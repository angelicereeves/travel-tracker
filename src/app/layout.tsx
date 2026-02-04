import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Our Travels",
  description: "A living scrapbook of our moves and adventures.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <NavBar />
        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
      </body>
    </html>
  );
}
