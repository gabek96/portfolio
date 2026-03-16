import TechBadge from './TechBadge';

export default function ProjectCard({ project }) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 flex flex-col">
      <div className="mb-3">
        <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
          <h3 className="text-primary uppercase tracking-wider font-bold text-lg">
            {project.title}
          </h3>
          <span className="text-muted text-sm whitespace-nowrap">{project.date}</span>
        </div>
      </div>

      <div className="flex-1">
        {project.descriptions.map((desc, i) => (
          <p
            key={i}
            className="text-muted leading-relaxed mb-3 text-sm"
            dangerouslySetInnerHTML={{ __html: desc }}
          />
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-3">
        {project.tools.map((tool) => (
          <TechBadge key={tool} label={tool} />
        ))}
      </div>

      {Object.keys(project.links).length > 0 && (
        <div className="flex flex-wrap gap-3 mt-4">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-surface border border-border rounded-lg px-4 py-2 text-sm text-text hover:bg-border/50 hover:-translate-y-0.5 transition-all duration-200"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
          )}
          {project.links.website && (
            <a
              href={project.links.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-surface border border-border rounded-lg px-4 py-2 text-sm text-text hover:bg-border/50 hover:-translate-y-0.5 transition-all duration-200"
            >
              <i className="fas fa-globe"></i> Website
            </a>
          )}
          {project.links.youtube && (
            <a
              href={project.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-surface border border-border rounded-lg px-4 py-2 text-sm text-text hover:bg-border/50 hover:-translate-y-0.5 transition-all duration-200"
            >
              <i className="fab fa-youtube"></i> Demo
            </a>
          )}
        </div>
      )}
    </div>
  );
}
