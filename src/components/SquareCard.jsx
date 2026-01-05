export default function SquareCard({ title, description, icon: Icon }) {
  return (
    <div className="w-full flex items-center gap-4 px-5 py-4 rounded-lg bg-white/10">
      <Icon className="w-5 h-5 text-[#EF5A3C] flex-shrink-0" />
      <p className="text-lg text-neutral-200">
        {description}
      </p>
    </div>
  );
}
