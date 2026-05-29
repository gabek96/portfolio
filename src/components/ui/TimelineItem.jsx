import TechBadge from './TechBadge';

export default function TimelineItem({ job, index }) {
  const isRight = index % 2 === 0;

  return (
    <div className="relative mb-16 w-full flex items-center">
      {/* Year badge */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-9 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide z-10 whitespace-nowrap max-md:left-[30px]">
        {job.timelineYear}
      </div>

      {/* Dot */}
      <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-primary border-4 border-background rounded-full z-10 shadow-[0_0_15px_rgba(40,152,193,0.5)] max-md:left-[30px]" />

      {/* Content */}
      <div
        className={`w-[45%] max-md:w-[calc(100%-80px)] max-md:ml-[80px] max-md:pr-0 ${
          isRight
            ? 'ml-[55%] pl-10 max-md:pl-5'
            : 'mr-[55%] pr-10 max-md:mr-0 max-md:pl-5'
        }`}
      >
        <div className="bg-card border border-border border-l-4 border-l-primary rounded-xl p-6 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
          <div className="mb-3">
            <h3 className="text-primary uppercase tracking-wider font-bold text-base mb-1">
              {job.title}
            </h3>
            <div className="flex justify-between items-center flex-wrap gap-2">
              <span className="text-text font-bold text-sm">{job.company}</span>
              <span className="text-muted text-sm">{job.date}</span>
            </div>
          </div>

          {job.bullets.map((bullet, i) => (
            <p
              key={i}
              className="text-muted leading-relaxed mb-3 text-sm"
              dangerouslySetInnerHTML={{ __html: bullet }}
            />
          ))}

          <div className="flex flex-wrap gap-2 mt-3">
            {job.tools.map((tool) => (
              <TechBadge key={tool} label={tool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
