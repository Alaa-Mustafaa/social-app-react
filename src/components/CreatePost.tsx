import Avatar from './Avatar'
import { ImageIcon } from './Icons'
import { currentUser } from '../data/mockData'

export default function CreatePost() {
  return (
    <form
      onSubmit={(e) => e.preventDefault() /* TODO: POST /posts */}
      className="rounded-xl border border-slate-200 bg-white p-4"
    >
      <div className="flex gap-3">
        <Avatar name={currentUser.name} photo={currentUser.photo} />
        <textarea
          rows={2}
          placeholder={`What's on your mind, ${currentUser.name.split(' ')[0]}?`}
          className="flex-1 resize-none rounded-lg bg-slate-100 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-200"
        />
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
        <label className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100">
          <ImageIcon className="size-5 text-green-600" />
          Photo
          <input type="file" accept="image/*" className="hidden" />
        </label>
        <button type="submit" className="rounded-full bg-blue-600 px-5 py-1.5 text-sm font-semibold text-white hover:bg-blue-700">
          Post
        </button>
      </div>
    </form>
  )
}
