import type { ErrorMessageProps } from "../types/ErrorMessageProps"

export default function ErrorMessage({ message }: ErrorMessageProps) {
  if (!message) return null

  return (
    <p className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
      {message}
    </p>
  )
}
