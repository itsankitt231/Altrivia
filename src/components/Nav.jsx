export default function Nav() {
  return (
    <nav className="w-full py-8 px-8 flex justify-between items-center">
      <div className="text-2xl font-bold">Altrivia</div>
      <div className="flex items-center space-x-6">
        <div className="space-x-8 hidden md:flex">
          <a href="#programs" className="hover:underline">Programs</a>
          <a href="#curriculum" className="hover:underline">Curriculum</a>
          <a href="#mentors" className="hover:underline">Mentors</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
        </div>
      </div>
      <div>
        <button className="bg-[#EE593B] hover:bg-primary/80 text-white px-6 py-3 rounded transition-colors">Apply</button>
      </div>
    </nav>
  );
}
