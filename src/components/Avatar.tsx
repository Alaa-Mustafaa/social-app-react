interface AvatarProps {
  name: string
  photo?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const sizes = {
  sm: 'size-8 text-xs',
  md: 'size-10 text-sm',
  lg: 'size-14 text-lg',
  xl: 'size-28 text-3xl',
}

export default function Avatar({ name, photo, size = 'md' }: AvatarProps) {
  if (photo) {
    return <img src={photo} alt={name} className={`${sizes[size]} shrink-0 rounded-full object-cover`} />
  }

  const initials = name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <div className={`${sizes[size]} flex shrink-0 items-center justify-center rounded-full bg-blue-600 font-semibold text-white`}>
      {initials}
    </div>
  )
}
