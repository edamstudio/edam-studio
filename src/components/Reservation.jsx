import { useState } from "react";

const categories = [
  "WEDDING",
  "STUDIO",
  "SNAP",
  "FILM",
  "PROFILE",
];

export default function Reservation() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    category: "WEDDING",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 📩 이메일 내용 구성
    const subject = `[예약 문의] ${form.name}`;
    const body = `
이름: ${form.name}
연락처: ${form.phone}
촬영 종류: ${form.category}
희망 날짜: ${form.date}

문의 내용:
${form.message}
    `;

    window.location.href = `mailto:studio_edam@kakao.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="reservation"
      className="bg-[#2f2a26] px-6 py-24 text-white md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-3xl text-center">

        {/* 타이틀 */}
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/60">
          Reservation
        </p>

        <h2 className="mb-10 font-serif text-3xl font-light md:text-5xl">
          소중한 순간을 예약하세요
        </h2>

        {/* 폼 */}
        <form onSubmit={handleSubmit} className="space-y-6 text-left">

          {/* 이름 */}
          <div>
            <label className="mb-2 block text-xs tracking-[0.2em] text-white/70">
              NAME
            </label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              className="w-full border-b border-white/30 bg-transparent py-3 outline-none"
              placeholder="홍길동"
            />
          </div>

          {/* 연락처 */}
          <div>
            <label className="mb-2 block text-xs tracking-[0.2em] text-white/70">
              PHONE
            </label>
            <input
              type="tel"
              name="phone"
              required
              onChange={handleChange}
              className="w-full border-b border-white/30 bg-transparent py-3 outline-none"
              placeholder="010-0000-0000"
            />
          </div>

          {/* 촬영 종류 */}
          <div>
            <label className="mb-2 block text-xs tracking-[0.2em] text-white/70">
              CATEGORY
            </label>
            <select
              name="category"
              onChange={handleChange}
              className="w-full border-b border-white/30 bg-transparent py-3 outline-none"
            >
              {categories.map((c) => (
                <option key={c} value={c} className="text-black">
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* 날짜 */}
          <div>
            <label className="mb-2 block text-xs tracking-[0.2em] text-white/70">
              DATE
            </label>
            <input
              type="date"
              name="date"
              required
              onChange={handleChange}
              className="w-full border-b border-white/30 bg-transparent py-3 outline-none"
            />
          </div>

          {/* 문의 */}
          <div>
            <label className="mb-2 block text-xs tracking-[0.2em] text-white/70">
              MESSAGE
            </label>
            <textarea
              name="message"
              rows="4"
              onChange={handleChange}
              className="w-full border-b border-white/30 bg-transparent py-3 outline-none resize-none"
              placeholder="촬영 내용이나 요청사항을 입력해주세요."
            />
          </div>

          {/* 버튼 */}
          <div className="pt-6 flex flex-col items-center gap-4">

            {/* 이메일 제출 */}
            <button
              type="submit"
              className="border border-white px-10 py-3 text-sm tracking-[0.3em] transition hover:bg-white hover:text-black"
            >
              EMAIL REQUEST
            </button>

            {/* 카카오 바로가기 */}
            <a
              href="http://pf.kakao.com/_ZUUGn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white/40 px-8 py-3 text-xs tracking-[0.25em] text-white/80 transition hover:bg-white hover:text-black"
            >
              KAKAO TALK
            </a>

          </div>
        </form>
      </div>
    </section>
  );
}