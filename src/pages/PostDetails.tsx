import { Link, useParams } from 'react-router'
import PostCard from '../components/PostCard'
import { posts } from '../data/mockData'

export default function PostDetails() {
  const { id } = useParams()
  // TODO: GET /posts/:id
  const post = posts.find((p) => p._id === id)

  return (
    <div className="mx-auto max-w-xl space-y-4">
      <Link to="/" className="inline-block text-sm font-medium text-blue-600 hover:underline">
        ← Back to feed
      </Link>
      {post ? (
        <PostCard post={post} showAllComments />
      ) : (
        <p className="rounded-xl bg-white p-8 text-center text-slate-500">Post not found.</p>
      )}
    </div>
  )
}
