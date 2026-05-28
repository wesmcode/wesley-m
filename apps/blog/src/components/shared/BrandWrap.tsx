import { urls } from '@/lib/urls'

interface BrandWrapProps {
  variant: 'top-bar' | 'footer'
}

export function BrandWrap({ variant }: BrandWrapProps) {
  const className = variant === 'top-bar' ? 'top-bar-brand' : 'footer-brand'

  return (
    <div className="brand-wrap">
      <a href={urls.home} className={className}>
        <span className="brand-full">Wesley Melo</span>
        <span className="brand-short" aria-hidden="true">
          W<span className="brand-diamond" />M
        </span>
      </a>
    </div>
  )
}
