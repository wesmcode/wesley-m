'use client'

import { useEffect, useRef, useCallback, type ReactNode } from 'react'

interface CarouselProps {
  children: ReactNode
  liveRegionId: string
}

export function CarouselContainer({ children, liveRegionId }: CarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const currentRef = useRef(0)
  const suppressRef = useRef(false)

  const setActive = useCallback((index: number) => {
    const container = containerRef.current
    if (!container) return
    currentRef.current = index
    const cards = container.querySelectorAll<HTMLElement>('.about-card')
    cards.forEach((card, i) => card.classList.toggle('is-active', i === index))
    const live = document.getElementById(liveRegionId)
    if (live) {
      const title = cards[index]?.querySelector('h3')?.textContent?.trim() ?? ''
      live.textContent = `Card ${index + 1} of ${cards.length}: ${title}`
    }
  }, [liveRegionId])

  const scrollTo = useCallback((i: number) => {
    const container = containerRef.current
    if (!container) return
    const card = container.querySelectorAll<HTMLElement>('.about-card')[i]
    if (!card) return
    const cr = container.getBoundingClientRect()
    const cardR = card.getBoundingClientRect()
    const delta = (cardR.left + cardR.width / 2) - (cr.left + cr.width / 2)
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    suppressRef.current = true
    container.scrollBy({ left: delta, behavior: reduced ? 'auto' : 'smooth' })
    setTimeout(() => { suppressRef.current = false }, 600)
    setActive(i)
  }, [setActive])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const cards = container.querySelectorAll('.about-card')
    if (!cards.length) return
    setActive(0)

    const onKey = (e: KeyboardEvent) => {
      const len = cards.length
      if (e.key === 'ArrowRight') { e.preventDefault(); scrollTo((currentRef.current + 1) % len) }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); scrollTo((currentRef.current - 1 + len) % len) }
    }
    let raf = false
    const onScroll = () => {
      if (suppressRef.current || raf) return
      raf = true
      requestAnimationFrame(() => {
        raf = false
        const cr = container.getBoundingClientRect()
        const center = cr.left + cr.width / 2
        let closest = 0, best = Infinity
        cards.forEach((card, i) => {
          const r = card.getBoundingClientRect()
          const d = Math.abs(r.left + r.width / 2 - center)
          if (d < best) { best = d; closest = i }
        })
        if (closest !== currentRef.current) setActive(closest)
      })
    }
    container.addEventListener('keydown', onKey)
    container.addEventListener('scroll', onScroll, { passive: true })
    return () => { container.removeEventListener('keydown', onKey); container.removeEventListener('scroll', onScroll) }
  }, [setActive, scrollTo])

  return (
    <div className="about-cards" id="about-cards" ref={containerRef} role="region" tabIndex={0} aria-label="What I bring" aria-roledescription="carousel">
      {children}
    </div>
  )
}
