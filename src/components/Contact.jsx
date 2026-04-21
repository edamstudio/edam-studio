export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#f7f4ef] px-6 py-24 text-[#2f2a26] md:px-10 lg:px-16"
    >
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#8a7f74]">
            Contact
          </p>

          <h2 className="mb-6 font-serif text-3xl font-light md:text-5xl">
            이담 스튜디오와 함께하세요
          </h2>

          <p className="max-w-xl text-sm leading-7 text-[#6f665e] md:text-base">
            촬영 문의와 예약 상담은 언제든 편하게 남겨주세요.
            가장 자연스럽고 오래 남는 순간을
            이담 스튜디오만의 시선으로 기록합니다.
          </p>
        </div>

        <div className="space-y-8">
          <div className="border-b border-[#ddd4cb] pb-6">
            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#8a7f74]">
              Instagram
            </p>
            <a
              href="https://www.instagram.com/studio_edam/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg transition hover:opacity-60"
            >
              @studio_edam
            </a>
          </div>

          <div className="border-b border-[#ddd4cb] pb-6">
            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#8a7f74]">
              KakaoTalk
            </p>
            <a
              href="http://pf.kakao.com/_ZUUGn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg transition hover:opacity-60"
            >
              카카오 채널 바로가기
            </a>
          </div>

          <div className="border-b border-[#ddd4cb] pb-6">
            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#8a7f74]">
              Phone
            </p>
            <a
              href="tel:01093535275"
              className="text-lg transition hover:opacity-60"
            >
              010-9353-5275
            </a>
          </div>

          <div className="border-b border-[#ddd4cb] pb-6">
            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#8a7f74]">
              E-mail
            </p>
            <a
              href="mailto:studio_edam@kakao.com"
              className="text-lg transition hover:opacity-60"
            >
              studio_edam@kakao.com
            </a>
          </div>

          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#8a7f74]">
              Location
            </p>
            <p className="text-lg">충청북도 청주시 · EDAM STUDIO</p>
          </div>
        </div>
      </div>
    </section>
  );
}