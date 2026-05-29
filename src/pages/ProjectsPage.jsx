import { projects } from '../data/projects';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectCard from '../components/ui/ProjectCard';
import AnimatedSection from '../components/ui/AnimatedSection';

export default function ProjectsPage() {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-16">
      <SectionTitle>My Projects</SectionTitle>

      <div className="columns-1 md:columns-2 xl:columns-3 gap-5">
        {projects.map((project, i) => (
          <div key={project.id} className="break-inside-avoid mb-5">
            <AnimatedSection delay={i * 100}>
              <ProjectCard project={project} />
            </AnimatedSection>
          </div>
        ))}
      </div>
    </div>
  );
}
