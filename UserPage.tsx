import { useSelector } from 'react-redux'
import type { RootState } from './store'

const UserPage = () => {
  const user = useSelector((state: RootState) => state.user)

  if (!user.isLoggedIn) {
    return (
      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        {[
          ['Global state','Redux Toolkit','A single source of truth for user data.'],
          ['Typed app','TypeScript','Predictable state with clear types.'],
          ['Fast UI','React + Vite','Instant updates with a lightweight setup.']
        ].map(([a,b,c]) => <div key={b} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-500">{a}</p><p className="mt-3 text-lg font-black">{b}</p><p className="mt-2 text-sm text-slate-500">{c}</p></div>)}
      </div>
    )
  }

  const firstName = user.name.split(' ')[0]

  return (
    <>
      <section className="mb-6 rounded-[2rem] bg-gradient-to-br from-indigo-600 via-indigo-500 to-sky-500 p-7 text-white shadow-xl sm:p-9">
        <p className="text-sm font-semibold text-indigo-100">Authentication state: active</p>
        <h2 className="mt-2 text-3xl font-black sm:text-4xl">Good to see you, {firstName}.</h2>
        <p className="mt-3 text-sm text-indigo-50">Your data is stored globally with Redux Toolkit and reflected across the dashboard.</p>
      </section>
      <div className="grid gap-4 sm:grid-cols-3">
        {[['Status','Logged in'],['Store slice','user'],['Sync','Instant']].map(([a,b]) => <div key={a} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">{a}</p><p className="mt-3 text-2xl font-black">{b}</p></div>)}
      </div>
    </>
  )
}

export default UserPage
