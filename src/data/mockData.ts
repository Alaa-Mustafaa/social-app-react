// Static mock data — replace with real API responses later.

export interface User {
  _id: string
  name: string
  email: string
  photo?: string
  dateOfBirth: string
  gender: 'male' | 'female'
}

export interface Comment {
  _id: string
  content: string
  commentCreator: Pick<User, '_id' | 'name' | 'photo'>
  createdAt: string
}

export interface Post {
  _id: string
  body: string
  image?: string
  user: Pick<User, '_id' | 'name' | 'photo'>
  createdAt: string
  likes: number
  comments: Comment[]
}

export const currentUser: User = {
  _id: 'u1',
  name: 'Alaa Mustafa',
  email: 'alaa@example.com',
  dateOfBirth: '2000-05-12',
  gender: 'male',
}

const sara = { _id: 'u2', name: 'Sara Ahmed' }
const omar = { _id: 'u3', name: 'Omar Khaled' }
const mona = { _id: 'u4', name: 'Mona Hassan' }

export const posts: Post[] = [
  {
    _id: 'p1',
    body: 'Just finished my first full-stack project with React and Node.js! 🚀 Learned so much about authentication and REST APIs.',
    image: 'https://picsum.photos/seed/code/800/450',
    user: sara,
    createdAt: '2026-10-16T08:30:00Z',
    likes: 42,
    comments: [
      { _id: 'c1', content: 'Congrats Sara! 👏', commentCreator: omar, createdAt: '2026-10-16T09:00:00Z' },
      { _id: 'c2', content: 'Can you share the repo?', commentCreator: mona, createdAt: '2026-10-16T09:20:00Z' },
    ],
  },
  {
    _id: 'p2',
    body: 'Tip of the day: keep your components small and focused. If a component does more than one thing, split it.',
    user: omar,
    createdAt: '2026-10-15T17:10:00Z',
    likes: 18,
    comments: [
      { _id: 'c3', content: 'Totally agree!', commentCreator: currentUser, createdAt: '2026-10-15T18:00:00Z' },
    ],
  },
  {
    _id: 'p3',
    body: 'Weekend trip to Dahab 🌊 Highly recommended for anyone who needs a break from screens.',
    image: 'https://picsum.photos/seed/sea/800/450',
    user: currentUser,
    createdAt: '2026-10-14T12:00:00Z',
    likes: 73,
    comments: [],
  },
]
