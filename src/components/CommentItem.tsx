import Avatar from './Avatar'
import type { Comment } from '../data/mockData'
import { timeAgo } from '../data/timeAgo'

export default function CommentItem({ comment }: { comment: Comment }) {
  const { commentCreator, content, createdAt } = comment

  return (
    <div className="flex gap-2">
      <Avatar name={commentCreator.name} photo={commentCreator.photo} size="sm" />
      <div className="flex-1">
        <div className="rounded-xl bg-slate-100 px-3 py-2">
          <p className="text-sm font-semibold text-slate-900">{commentCreator.name}</p>
          <p className="text-sm text-slate-700">{content}</p>
        </div>
        <div className="mt-1 flex gap-3 px-3 text-xs text-slate-500">
          <span>{timeAgo(createdAt)}</span>
          <button className="font-medium hover:text-blue-600">Edit</button>
          <button className="font-medium hover:text-red-600">Delete</button>
        </div>
      </div>
    </div>
  )
}
