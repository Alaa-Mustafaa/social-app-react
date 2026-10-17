import { Link } from 'react-router'
import Avatar from '../components/Avatar'
import CreatePost from '../components/CreatePost'
import PostCard from '../components/PostCard'
import { currentUser, posts } from '../data/mockData'

export default function Home() {
  return (
    <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
      {/* Left sidebar: mini profile card */}
      <aside className="hidden lg:block">
        <div className="sticky top-20 overflow-hidden rounded-xl border border-slate-200 bg-white text-center">
          <div className="h-16 bg-gradient-to-r from-blue-500 to-indigo-500" />
          <div className="-mt-7 flex justify-center">
            <div className="rounded-full ring-4 ring-white">
              <Avatar name={currentUser.name} photo={currentUser.photo} size="lg" />
            </div>
          </div>
          <div className="p-4">
            <Link to="/profile" className="font-semibold text-slate-900 hover:underline">
              {currentUser.name}
            </Link>
            <p className="text-xs text-slate-500">{currentUser.email}</p>
          </div>
          <div className="border-t border-slate-100 p-3 text-xs text-slate-500">
            <div className="flex justify-between">
              <span>Your posts</span>
              <span className="font-semibold text-blue-600">
                {posts.filter((p) => p.user._id === currentUser._id).length}
              </span>
            </div>
          </div>
        </div>
      </aside>

      {/* Feed */}
      <section className="mx-auto w-full max-w-xl space-y-4">
        <CreatePost />
        {/* TODO: GET /posts */}
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </section>
    </div>
  )
}
