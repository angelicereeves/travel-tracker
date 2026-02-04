import Link from "next/link";

const navLink =
  "px-4 py-2 rounded-full text-sm font-semibold text-sky-900 hover:bg-sky-100 transition";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-sky-100">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="h-11 w-11 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 text-white grid place-items-center text-xl shadow-md">
            ✈️
          </span>
          <div className="leading-tight">
            <div className="font-bold tracking-tight text-sky-900">
              Follow Alexys and AJ on our Travels
            </div>
            <div className="text-xs text-sky-600">
              life & adventures
            </div>
          </div>
        </Link>

        <nav className="flex items-center gap-2">
          <Link className={navLink} href="/timeline">
            Timeline
          </Link>
          <Link className={navLink} href="/visited">
            Visited
          </Link>
          <Link className={navLink} href="/map">
            Map
          </Link>

        </nav>
      </div>
    </header>
  );
}
