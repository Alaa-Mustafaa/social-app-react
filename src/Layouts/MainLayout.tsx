import { Outlet } from 'react-router'
import Navbar from './components/Navbar'

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-6">
        <Outlet />
      </main>
    </>
  )
}
