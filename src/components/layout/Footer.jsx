export default function Footer() {
  return (
    <footer className="bg-card-light border-t border-border mt-16">
      {/* CTA */}
      <div className="px-6 md:px-12 lg:px-20 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-text font-heading mb-1">
            Let's build something{' '}
            <span style={{
              color: '#496580',
            }}>together.</span>
          </h2>
        </div>
        <a
          href="mailto:kiveugabe@gmail.com"
          className="flex-shrink-0 bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-dark hover:-translate-y-0.5 transition-all duration-200"
        >
          Let's Talk →
        </a>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border px-6 md:px-12 lg:px-20 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-muted text-sm">© {new Date().getFullYear()} Gabriel Kiveu</p>
        <div className="flex gap-5">
          <a href="https://github.com/gabek96" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary text-sm transition-colors duration-200">GitHub</a>
          <a href="https://www.linkedin.com/in/gabriel-kiveu/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary text-sm transition-colors duration-200">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
