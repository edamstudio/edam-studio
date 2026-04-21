import hero from "../assets/hero.jpg";

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center">
      <img
        src={hero}
        alt="EDAM Studio"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 text-center px-6 text-white">
        <p className="text-sm md:text-base tracking-[0.3em] mb-6">
          EDAM STUDIO
        </p>
        <h1 className="text-3xl md:text-6xl font-light leading-tight">
          가장 소중한 순간을
        </h1>
        <p className="mt-6 text-sm md:text-base text-white/90">
          Wedding & Profile Studio
        </p>
      </div>
    </section>
  );
}

export default Hero;