export default function Footer() {
  return (
    <footer className="bg-[#2f2a26] px-6 py-16 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="mb-4 leading-none">
              <div className="font-serif text-[26px] tracking-[0.08em]">
                EDAM
              </div>
              <div className="mt-1 text-[10px] tracking-[0.45em] text-white/70">
                STUDIO
              </div>
            </div>

            <p className="max-w-xs text-sm leading-6 text-white/60">
              가장 자연스럽고 오래 남는 순간을
              이담 스튜디오만의 시선으로 기록합니다.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/60">
              Menu
            </p>

            <ul className="space-y-2 text-sm">
              <li>
                <a href="#portfolio" className="transition hover:opacity-60">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="transition hover:opacity-60">
                  About
                </a>
              </li>
              <li>
                <a href="#reservation" className="transition hover:opacity-60">
                  Reservation
                </a>
              </li>
              <li>
                <a href="#contact" className="transition hover:opacity-60">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/60">
              Info
            </p>

            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a
                  href="https://www.instagram.com/studio_edam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:opacity-60"
                >
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="http://pf.kakao.com/_ZUUGn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:opacity-60"
                >
                  Kakao Channel
                </a>
              </li>

              <li>
                <a href="tel:01093535275" className="transition hover:opacity-60">
                  010-9353-5275
                </a>
              </li>

              <li>
                <a
                  href="mailto:studio_edam@kakao.com"
                  className="transition hover:opacity-60"
                >
                  studio_edam@kakao.com
                </a>
              </li>

              <li>충청북도 청주시 · EDAM STUDIO</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} EDAM STUDIO. All rights reserved.
        </div>
      </div>
    </footer>
  );
}