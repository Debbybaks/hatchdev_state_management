import UserProfile from './UserProfile'

const Navbar = () => (
  <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-slate-200/80 bg-white/80 px-5 backdrop-blur-xl sm:px-8">
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">HatchDev Assignment</p>
      <h1 className="mt-1 text-lg font-bold text-slate-900">State Management Dashboard</h1>
    </div>
    <div className="hidden sm:block"><UserProfile /></div>
    <div className="sm:hidden"><UserProfile compact /></div>
  </header>
)

export default Navbar
