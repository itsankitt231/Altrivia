export default function RoadmapItem({ week, title, description, buildType }) {
  return (
    <div className="relative group">
      {/* Dot */}
      <span className="absolute -left-[11px] top-2 h-5 w-5 rounded-full bg-[#ef5a3c] shadow-md shadow-[#ef5a3c]/40" />

      {/* Card */}
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8 transition-all duration-700 group-hover:translate-x-2">
        <span className="text-sm text-[#ef5a3c] font-medium">
          {week}
        </span>

        <h3 className="mt-2 text-2xl text-text-main">
          {title}
        </h3>

        <p className="mt-3 text-text-muted leading-relaxed">
          {description}
        </p>

        <div className="mt-4 inline-block rounded-full bg-[#ef5a3c]/10 text-[#ef5a3c] px-4 py-1 text-sm">
          Build: {buildType}
        </div>
      </div>
    </div>
  );
}
