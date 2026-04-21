import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Reservation", href: "#reservation" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-white/90 backdrop-blur border-b border-black/5"
            : "bg-transparent"
        }`}
      >
        <div className="relative h-20">
          {/* Logo */}
          <div className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 leading-none">
            <a href="#" className="flex flex-col items-center" onClick={closeMenu}>
              <div
                className={`font-serif text-[28px] md:text-[40px] tracking-[0.08em] transition-colors duration-300 ${
                  scrolled || menuOpen ? "text-[#3a2f2a]" : "text-white"
                }`}
              >
                EDAM
              </div>

              <div
                className={`mt-1 text-[10px] md:text-[13px] tracking-[0.45em] text-center transition-colors duration-300 ${
                  scrolled || menuOpen ? "text-[#3a2f2a]" : "text-white"
                }`}
              >
                STUDIO
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="h-full px-6 md:px-10 flex items-center justify-end">
            <nav
              className={`hidden md:flex gap-10 text-sm tracking-[0.2em] transition-colors duration-300 ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative transition hover:opacity-70"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative z-[60] flex h-10 w-10 items-center justify-center md:hidden"
              aria-label="Toggle menu"
            >
              <div className="relative h-5 w-6">
                <span
                  className={`absolute left-0 top-0 h-[1.5px] w-6 origin-center transition-all duration-300 ${
                    scrolled || menuOpen ? "bg-[#3a2f2a]" : "bg-white"
                  } ${menuOpen ? "translate-y-[9px] rotate-45" : ""}`}
                />
                <span
                  className={`absolute left-0 top-[9px] h-[1.5px] w-6 transition-all duration-300 ${
                    scrolled || menuOpen ? "bg-[#3a2f2a]" : "bg-white"
                  } ${menuOpen ? "opacity-0" : "opacity-100"}`}
                />
                <span
                  className={`absolute left-0 top-[18px] h-[1.5px] w-6 origin-center transition-all duration-300 ${
                    scrolled || menuOpen ? "bg-[#3a2f2a]" : "bg-white"
                  } ${menuOpen ? "-translate-y-[9px] -rotate-45" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[78%] max-w-[320px] bg-[#f7f4ef] px-8 pt-28 shadow-2xl transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="border-b border-[#ddd4cb] pb-3 text-sm tracking-[0.22em] text-[#3a2f2a] transition hover:opacity-60"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-12 border-t border-[#ddd4cb] pt-8">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#8a7f74]">
            Instagram
          </p>
          <a
            href="https://www.instagram.com/studio_edam/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-[#3a2f2a] transition hover:opacity-60"
          >
            @studio_edam
          </a>

          <p className="mt-8 mb-2 text-xs uppercase tracking-[0.3em] text-[#8a7f74]">
            KakaoTalk
          </p>
          <a
            href="http://pf.kakao.com/_ZUUGn"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-[#3a2f2a] transition hover:opacity-60"
          >
            Kakao Channel
          </a>
        </div>
      </div>
    </>
  );
}