import { skills } from '../data/skills';
import { clubs } from '../data/clubs';
import SectionTitle from '../components/ui/SectionTitle';
import SkillCard from '../components/ui/SkillCard';
import ClubCard from '../components/ui/ClubCard';
import AnimatedSection from '../components/ui/AnimatedSection';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* About Me */}
      <AnimatedSection>
        <SectionTitle>About Me</SectionTitle>
        <div className="space-y-4 mb-16">
          <p className="text-text text-lg leading-relaxed">
            I am a Senior at Iowa State University majoring in Software Engineering, expected to
            graduate in May 2026. My field of interest is Software Development, where I apply my
            skills and knowledge to create innovative applications.
          </p>
          <p className="text-text text-lg leading-relaxed">
            I pride myself on being creative and a team player. In every project I have worked on,
            I have always been able to carry out my tasks and effectively communicate with my
            teammates to ensure we are all on the same page. I take on team leadership roles to
            keep my teams actively communicating and meeting together as we move forward.
          </p>
          <p className="text-text text-lg leading-relaxed">
            I am proficient in C, Java, JavaScript, HTML/CSS, PHP, Python, React, React Native,
            Spring Boot, Git, MySQL, AWS, Postman, Netlify, and Vite. I enjoy learning new things,
            diving into problems to solve, and building cool stuff.
          </p>
        </div>
      </AnimatedSection>

      {/* Clubs & Organizations */}
      <AnimatedSection delay={100}>
        <SectionTitle>Clubs & Organizations</SectionTitle>
        <div className="flex flex-col gap-5 mb-16">
          {clubs.map((club, i) => (
            <AnimatedSection key={club.name} delay={150 + i * 100}>
              <ClubCard club={club} />
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      {/* Technical Skills */}
      <AnimatedSection delay={200}>
        <SectionTitle>Technical Skills</SectionTitle>
        <div className="flex flex-wrap gap-6 justify-center">
          {skills.map((skill, i) => (
            <AnimatedSection key={skill.name} delay={250 + i * 50}>
              <SkillCard name={skill.name} icon={skill.icon} />
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
