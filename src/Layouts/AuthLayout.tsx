import { Outlet } from 'react-router'

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="grid w-full max-w-4xl items-center gap-10 md:grid-cols-2">
        <div className="hidden md:block">
          <span className="flex size-14 items-center justify-center rounded-xl bg-blue-600 text-3xl font-bold text-white">L</span>
          <h1 className="mt-6 text-4xl font-bold text-slate-900">Linked Posts</h1>
          <p className="mt-3 text-lg text-slate-600">
            Connect with friends, share your moments and join the conversation.
          </p>
        </div>
        <Outlet />
      </div>
    </div>
  )
}
