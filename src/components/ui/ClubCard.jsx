export default function ClubCard({ club }) {
  const basePath = import.meta.env.BASE_URL;

  return (
    <div className="bg-club-card border border-border rounded-xl p-5 flex items-start gap-5 hover:-translate-y-1 transition-all duration-300">
      <img
        src={`${basePath}${club.image}`}
        alt={`${club.name} Logo`}
        className="w-14 h-14 object-contain rounded-lg flex-shrink-0"
      />
      <div className="flex-1">
        <h3 className="text-primary uppercase tracking-wider font-bold text-lg mb-1">
          {club.name}
        </h3>
        {club.role && (
          <p className="text-text font-semibold italic mb-2">{club.role}</p>
        )}
        {club.descriptions.map((desc, i) => (
          <p key={i} className="text-muted leading-relaxed text-sm mb-1">
            {desc}
          </p>
        ))}
      </div>
    </div>
  );
}
