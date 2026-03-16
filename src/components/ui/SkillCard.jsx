export default function SkillCard({ name, icon }) {
  return (
    <div className="bg-card-light rounded-2xl w-28 h-28 flex flex-col items-center justify-center text-text shadow-lg shadow-primary/10 hover:shadow-primary/40 hover:-translate-y-1.5 transition-all duration-300 cursor-default">
      <i className={`${icon} text-3xl mb-2`}></i>
      <span className="text-xs text-muted uppercase tracking-wide">{name}</span>
    </div>
  );
}
