import { Link } from 'react-router'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-3 text-center">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <p className="text-slate-600">This page doesn't exist.</p>
      <Link to="/" className="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700">
        Go home
      </Link>
    </div>
  )
}
