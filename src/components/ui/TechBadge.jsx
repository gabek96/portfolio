export default function TechBadge({ label }) {
  return (
    <span className="bg-primary text-white rounded-full px-3 py-1 text-sm font-medium inline-block">
      {label}
    </span>
  );
}
