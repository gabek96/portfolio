import AnimatedSection from '../components/ui/AnimatedSection';

export default function HomePage() {
  const basePath = import.meta.env.BASE_URL;

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center gap-10 min-h-[70vh]">
      <AnimatedSection className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text font-heading mb-2">
          Hi, I'm <span className="text-primary">Gabriel Kiveu</span>!
        </h1>
        <div className="flex gap-4 justify-center md:justify-start mb-4">
          <a
            href="https://github.com/gabek96"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary-dark hover:-translate-y-1 transition-all duration-200"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.006.404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-kiveu/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary-dark hover:-translate-y-1 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
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
