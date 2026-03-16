import { workExperience } from '../data/workExperience';
import SectionTitle from '../components/ui/SectionTitle';
import TimelineItem from '../components/ui/TimelineItem';
import AnimatedSection from '../components/ui/AnimatedSection';

export default function WorkPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <SectionTitle>Work Experience</SectionTitle>

      {/* Timeline */}
      <div className="relative py-8">
        {/* Vertical line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary to-accent max-md:left-[30px]" />

        {workExperience.map((job, i) => (
          <AnimatedSection key={job.id} delay={i * 150}>
            <TimelineItem job={job} index={i} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
