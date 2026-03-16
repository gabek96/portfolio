import { projects } from '../data/projects';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectCard from '../components/ui/ProjectCard';
import AnimatedSection from '../components/ui/AnimatedSection';

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <SectionTitle>My Projects</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <AnimatedSection key={project.id} delay={i * 100}>
            <ProjectCard project={project} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
