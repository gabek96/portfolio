import AnimatedSection from '../components/ui/AnimatedSection';

export default function HomePage() {
  const basePath = import.meta.env.BASE_URL;

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center gap-10 min-h-[70vh]">
      <AnimatedSection className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text font-heading mb-4">
          Hi, I'm <span className="text-primary">Gabriel Kiveu</span>!
        </h1>
        <p className="text-xl md:text-2xl text-muted font-light leading-relaxed mb-8">
          Welcome to my portfolio!
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href="#/projects"
            className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-dark hover:-translate-y-0.5 transition-all duration-200"
          >
            View Projects
          </a>
          <a
            href={`${basePath}Gabriel_Kiveu_Resume.pdf`}
            download
            className="border border-primary text-primary px-6 py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition-all duration-200"
          >
            Download Resume
          </a>
        </div>
      </AnimatedSection>

      <AnimatedSection className="flex-shrink-0" delay={200}>
        <img
          src={`${basePath}images/cwe.jpeg`}
          alt="Gabriel Kiveu"
          className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl object-cover border-2 border-border ring-4 ring-primary/20 shadow-2xl"
        />
      </AnimatedSection>
    </section>
  );
}
