import Link from 'next/link'

interface BrandWrapProps {
  variant: 'top-bar' | 'footer'
}

export function BrandWrap({ variant }: BrandWrapProps) {
  const className = variant === 'top-bar' ? 'top-bar-brand' : 'footer-brand'

  return (
    <div className="brand-wrap">
      <Link href="/" className={className}>
        <span className="brand-full">Wesley Melo</span>
        <span className="brand-short" aria-hidden="true">
          W<span className="brand-diamond" />M
        </span>
      </Link>
    </div>
  )
}
