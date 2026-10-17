import { useState } from 'react'
import Avatar from '../components/Avatar'
import FormInput from '../components/FormInput'
import PostCard from '../components/PostCard'
import { currentUser, posts } from '../data/mockData'

type Tab = 'posts' | 'about' | 'password'

const tabs: { id: Tab; label: string }[] = [
  { id: 'posts', label: 'Posts' },
  { id: 'about', label: 'About' },
  { id: 'password', label: 'Change password' },
]

export default function Profile() {
  const [activeTab, setActiveTab] = useState<Tab>('posts')
  const myPosts = posts.filter((p) => p.user._id === currentUser._id)

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {/* Cover + avatar */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="h-40 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 sm:h-52" />
        <div className="flex flex-col items-center gap-4 px-6 pb-4 sm:flex-row sm:items-end">
          <div className="relative -mt-14">
            <div className="rounded-full ring-4 ring-white">
              <Avatar name={currentUser.name} photo={currentUser.photo} size="xl" />
            </div>
            {/* TODO: PUT /users/upload-photo */}
            <label
              title="Change photo"
              className="absolute right-1 bottom-1 flex size-8 cursor-pointer items-center justify-center rounded-full bg-slate-200 text-sm hover:bg-slate-300"
            >
              📷
              <input type="file" accept="image/*" className="hidden" />
            </label>
          </div>
          <div className="text-center sm:mb-2 sm:text-left">
            <h1 className="text-2xl font-bold text-slate-900">{currentUser.name}</h1>
            <p className="text-sm text-slate-500">{myPosts.length} posts</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-t border-slate-100 px-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`border-b-2 px-4 py-3 text-sm font-semibold transition ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'posts' && (
        <div className="mx-auto max-w-xl space-y-4">
          {myPosts.length ? (
            myPosts.map((post) => <PostCard key={post._id} post={post} />)
          ) : (
            <p className="rounded-xl bg-white p-8 text-center text-slate-500">You haven't posted anything yet.</p>
          )}
        </div>
      )}

      {activeTab === 'about' && (
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="mb-4 text-lg font-semibold text-slate-900">About</h2>
          <dl className="divide-y divide-slate-100 text-sm">
            {[
              ['Name', currentUser.name],
              ['Email', currentUser.email],
              ['Date of birth', currentUser.dateOfBirth],
              ['Gender', currentUser.gender],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between py-3">
                <dt className="text-slate-500">{label}</dt>
                <dd className="font-medium capitalize text-slate-900">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      {activeTab === 'password' && (
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">Change password</h2>
          <p className="mt-1 text-sm text-slate-500">Use at least 8 characters with letters, numbers and symbols.</p>

          {/* TODO: PATCH /users/change-password, then save the new token */}
          <form onSubmit={(e) => e.preventDefault()} className="mt-6 max-w-md space-y-4">
            <FormInput id="currentPassword" label="Current password" type="password" placeholder="••••••••" />
            <FormInput id="newPassword" label="New password" type="password" placeholder="••••••••" />
            <FormInput id="confirmPassword" label="Confirm new password" type="password" placeholder="••••••••" />
            <button type="submit" className="rounded-lg bg-blue-600 px-6 py-2.5 font-semibold text-white hover:bg-blue-700">
              Update password
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
