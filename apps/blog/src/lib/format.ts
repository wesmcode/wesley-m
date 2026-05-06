export const formatDate = (input: string | Date | null | undefined): string => {
  if (!input) return ''
  const d = typeof input === 'string' ? new Date(input) : input
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export const readingTimeLabel = (minutes: number | null | undefined): string => {
  const m = typeof minutes === 'number' && minutes > 0 ? minutes : 1
  return `${m} min read`
}
