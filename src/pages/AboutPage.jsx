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
            I was just a kid from Olathe who loved video games and computers. I wasn't thinking about a career — I just liked the technology. 
            It wasn't until I got to Iowa State that something clicked, and I realized I didn't just want to use the things people build. 
            I wanted to build them myself.
          </p>
          <p className="text-text text-lg leading-relaxed">
            At Iowa State's Student Innovation Center, I designed and maintain the Makerspace Tracker — a full-stack PHP and MySQL platform that serves over 6,000 students and staff. 
            It's the kind of project that taught me more than any course could: real users, real edge cases, and real consequences when something breaks.
          </p>
          <p className="text-text text-lg leading-relaxed">
           My time at ISU also taught me that the best engineers aren't just problem solvers — they're community builders. 
           As Programs Chair for NSBE at both the chapter and zone level, I've organized regional conferences, co-founded Ladies of NSBE, and launched the Shadow Initiative to help incoming students find their footing. 
           These roles pushed me to lead with empathy, communicate across difference, and build things that outlast me.
          </p>
          <p className="text-text text-lg leading-relaxed">
            I'm a Software Engineering graduate from Iowa State, and I'm looking for roles in the Kansas City metro where I can build products that matter and grow alongside people who care about doing it right.
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
