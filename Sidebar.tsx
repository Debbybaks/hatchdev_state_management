import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from './userSlice'
import type { RootState } from './store'
import UserProfile from './UserProfile'

const Sidebar = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn)

  return (
    <aside className="hidden min-h-screen w-72 flex-col bg-slate-950 p-6 text-white lg:flex">
      <div className="flex items-center gap-3 px-1">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-400 font-black">S</div>
        <div><p className="text-lg font-black">StateSpace</p><p className="text-xs text-slate-400">Redux Toolkit demo</p></div>
      </div>

      <nav className="mt-10 space-y-2">
        {['Overview','State','Activity'].map((item, i) => (
          <button key={item} type="button" className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-semibold ${i===0 ? 'bg-white text-slate-950' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}>
            {item}
          </button>
        ))}
      </nav>

      <div className="mt-auto rounded-3xl border border-white/10 bg-white/5 p-4">
        <UserProfile />
        {isLoggedIn && <button onClick={() => dispatch(logoutUser())} className="mt-4 w-full rounded-2xl bg-white/10 px-4 py-2.5 text-sm font-semibold hover:bg-white/15">Log out</button>}
      </div>
    </aside>
  )
}

export default Sidebar
