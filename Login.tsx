import { useState, type FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from './userSlice'

const Login = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (name.trim() && email.trim()) dispatch(setUser({ name: name.trim(), email: email.trim() }))
  }

  return (
    <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
      <div className="grid md:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-slate-950 p-8 text-white sm:p-10">
          <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-sky-200">Redux in action</span>
          <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl">One login. One global state. Every component stays in sync.</h2>
          <p className="mt-4 text-sm leading-6 text-slate-300">Enter your details to update the Redux store. Your profile will instantly appear across the dashboard.</p>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {['Dispatch','Reducer','Selector'].map((x,i)=><div key={x} className="rounded-2xl border border-white/10 bg-white/5 p-3"><p className="text-xs font-bold text-sky-300">0{i+1}</p><p className="mt-2 text-xs font-semibold">{x}</p></div>)}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 sm:p-10">
          <p className="text-sm font-bold text-indigo-600">Welcome back</p>
          <h3 className="mt-2 text-2xl font-black text-slate-950">Sign in to your workspace</h3>
          <p className="mt-2 text-sm text-slate-500">This project demonstrates client-side state management.</p>

          <label className="mt-8 block">
            <span className="mb-2 block text-sm font-semibold text-slate-700">Full name</span>
            <input value={name} onChange={e=>setName(e.target.value)} required placeholder="e.g. Deborah Bakare" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" />
          </label>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-semibold text-slate-700">Email address</span>
            <input value={email} onChange={e=>setEmail(e.target.value)} required type="email" placeholder="you@example.com" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" />
          </label>

          <button type="submit" className="mt-7 w-full rounded-2xl bg-slate-950 px-5 py-3.5 text-sm font-bold text-white hover:bg-indigo-600">Enter dashboard →</button>
        </form>
      </div>
    </section>
  )
}

export default Login
