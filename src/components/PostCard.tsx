import { useState } from 'react'
import { Link } from 'react-router'
import Avatar from './Avatar'
import CommentItem from './CommentItem'
import { CommentIcon, DotsIcon, LikeIcon, ShareIcon } from './Icons'
import { currentUser, type Post } from '../data/mockData'
import { timeAgo } from '../data/timeAgo'

interface PostCardProps {
  post: Post
  showAllComments?: boolean
}

export default function PostCard({ post, showAllComments = false }: PostCardProps) {
  const [liked, setLiked] = useState(false)
  const [commentsOpen, setCommentsOpen] = useState(showAllComments)

  const visibleComments = showAllComments ? post.comments : post.comments.slice(0, 1)

  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      {/* Header */}
      <div className="flex items-start justify-between p-4 pb-2">
        <div className="flex gap-3">
          <Avatar name={post.user.name} photo={post.user.photo} />
          <div>
            <p className="font-semibold text-slate-900">{post.user.name}</p>
            <Link to={`/posts/${post._id}`} className="text-xs text-slate-500 hover:underline">
              {timeAgo(post.createdAt)} · 🌐
            </Link>
          </div>
        </div>
        {post.user._id === currentUser._id && (
          <button className="rounded-full p-1.5 text-slate-500 hover:bg-slate-100" title="Edit / delete post">
            <DotsIcon />
          </button>
        )}
      </div>

      {/* Body */}
      <p className="whitespace-pre-line px-4 pb-3 text-sm text-slate-800">{post.body}</p>
      {post.image && <img src={post.image} alt="" className="max-h-[480px] w-full object-cover" />}

      {/* Counters */}
      <div className="flex justify-between px-4 py-2 text-xs text-slate-500">
        <span>👍 {post.likes + (liked ? 1 : 0)}</span>
        <button onClick={() => setCommentsOpen(true)} className="hover:underline">
          {post.comments.length} comments
        </button>
      </div>

      {/* Actions */}
      <div className="mx-4 grid grid-cols-3 border-y border-slate-100 py-1">
        <button
          onClick={() => setLiked(!liked)}
          className={`flex items-center justify-center gap-2 rounded-lg py-2 text-sm font-medium hover:bg-slate-100 ${
            liked ? 'text-blue-600' : 'text-slate-600'
          }`}
        >
          <LikeIcon filled={liked} /> Like
        </button>
        <button
          onClick={() => setCommentsOpen(!commentsOpen)}
          className="flex items-center justify-center gap-2 rounded-lg py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
        >
          <CommentIcon /> Comment
        </button>
        <button className="flex items-center justify-center gap-2 rounded-lg py-2 text-sm font-medium text-slate-600 hover:bg-slate-100">
          <ShareIcon /> Share
        </button>
      </div>

      {/* Comments */}
      {commentsOpen && (
        <div className="space-y-3 p-4">
          <form onSubmit={(e) => e.preventDefault() /* TODO: POST /comments */} className="flex gap-2">
            <Avatar name={currentUser.name} photo={currentUser.photo} size="sm" />
            <input
              placeholder="Add a comment..."
              className="flex-1 rounded-full border border-slate-300 px-4 py-1.5 text-sm outline-none focus:border-blue-500"
            />
          </form>

          {visibleComments.map((comment) => (
            <CommentItem key={comment._id} comment={comment} />
          ))}

          {!showAllComments && post.comments.length > 1 && (
            <Link to={`/posts/${post._id}`} className="block text-sm font-medium text-slate-600 hover:underline">
              View all {post.comments.length} comments
            </Link>
          )}
        </div>
      )}
    </article>
  )
}
