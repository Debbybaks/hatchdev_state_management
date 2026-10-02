import { useSelector } from 'react-redux'
import Navbar from './Navbar'
import Login from './Login'
import Sidebar from './Sidebar'
import UserPage from './UserPage'
import type { RootState } from './store'

const App = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn)

  return (
    <div className="min-h-screen lg:flex">
      <Sidebar />
      <div className="min-w-0 flex-1">
        <Navbar />
        <main className="mx-auto max-w-6xl p-5 sm:p-8 lg:p-10">
          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold text-slate-500">React • Redux Toolkit • TypeScript</p>
              <h2 className="mt-1 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">State that feels simple.</h2>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600">
              <span className={`h-2.5 w-2.5 rounded-full ${isLoggedIn ? 'bg-emerald-500' : 'bg-amber-400'}`} />
              {isLoggedIn ? 'Store populated' : 'Waiting for login'}
            </div>
          </div>
          <UserPage />
          {!isLoggedIn && <Login />}
        </main>
      </div>
    </div>
  )
}

export default App
