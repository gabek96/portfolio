import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skills } from '../data/skills';
import { clubs } from '../data/clubs';
import SectionTitle from '../components/ui/SectionTitle';
import ClubCard from '../components/ui/ClubCard';
import AnimatedSection from '../components/ui/AnimatedSection';

const SKILL_GROUPS = [
  { label: 'Languages',    col: 'md:col-span-2', color: '#496580', names: ['C', 'Java', 'JavaScript', 'HTML/CSS', 'PHP', 'Python'] },
  { label: 'Frameworks',   col: 'md:col-span-1', color: '#c17c3a', names: ['React', 'React Native', 'Node.js', 'Nest.js'] },
  { label: 'Databases',    col: 'md:col-span-1', color: '#7c3aed', names: ['MySQL', 'PostgreSQL', 'MongoDB'] },
  { label: 'Cloud & Tools',col: 'md:col-span-2', color: '#2e7d6e', names: ['AWS', 'Google Cloud', 'Git'] },
];

function BentoSkills({ skills }) {
  const byName = Object.fromEntries(skills.map(s => [s.name, s]));
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {SKILL_GROUPS.map(group => (
        <div
          key={group.label}
          className={`${group.col} bg-card border border-border rounded-xl p-5 transition-colors duration-200`}
          style={{ borderLeftColor: group.color, borderLeftWidth: '4px' }}
        >
          <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: group.color }}>{group.label}</p>
          <div className="flex flex-wrap gap-2">
            {group.names.map(name => {
              const skill = byName[name];
              return (
                <span
                  key={name}
                  className="inline-flex items-center gap-1.5 bg-card-light border border-border/60 rounded-lg px-2.5 py-1.5 text-xs text-text hover:-translate-y-0.5 transition-transform duration-150 cursor-default"
                >
                  {skill && <FontAwesomeIcon icon={skill.icon} style={{ color: group.color }} />}
                  {name}
                </span>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
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
        <BentoSkills skills={skills} />
      </AnimatedSection>
    </div>
  );
}
