import { useSelector } from 'react-redux'
import type { RootState } from './store'

const initialsFrom = (name: string) =>
  name.trim().split(/\s+/).slice(0, 2).map((part) => part[0]?.toUpperCase()).join('') || 'GU'

const UserProfile = ({ compact = false }: { compact?: boolean }) => {
  const user = useSelector((state: RootState) => state.user)

  if (!user.isLoggedIn) {
    return (
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-200 text-sm font-bold text-slate-600">GU</div>
        {!compact && <div><p className="text-sm font-semibold text-slate-800">Guest user</p><p className="text-xs text-slate-500">Sign in to continue</p></div>}
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-500 text-sm font-bold text-white shadow-lg">
        {initialsFrom(user.name)}
      </div>
      {!compact && <div className="min-w-0"><p className="truncate text-sm font-semibold text-slate-900">{user.name}</p><p className="truncate text-xs text-slate-500">{user.email}</p></div>}
    </div>
  )
}

export default UserProfile
