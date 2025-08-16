import { useState, useRef, useEffect, memo } from 'react'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  placeholder?: string
  webpSrc?: string
  width?: number
  height?: number
  priority?: boolean
  sizes?: string
  onLoad?: () => void
  onError?: () => void
}

const LazyImage = memo(({
  src,
  alt,
  className = '',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y0ZjRmNCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OTk5OSI+TG9hZGluZy4uLjwvdGV4dD48L3N2Zz4=',
  webpSrc,
  width,
  height,
  priority = false,
  sizes = '100vw',
  onLoad,
  onError
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)
  const [imageSrc, setImageSrc] = useState(placeholder)

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.01
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [priority])

  // Load image when in view
  useEffect(() => {
    if (!isInView || isLoaded) return

    const img = new Image()
    
    // Handle load
    img.onload = () => {
      setImageSrc(src)
      setIsLoaded(true)
      onLoad?.()
    }
    
    // Handle error
    img.onerror = () => {
      setHasError(true)
      onError?.()
    }
    
    // Support WebP with fallback
    img.src = webpSrc && supportsWebP() ? webpSrc : src
  }, [isInView, src, webpSrc, onLoad, onError, isLoaded])

  // Check WebP support
  const supportsWebP = () => {
    if (typeof window === 'undefined') return false
    
    const canvas = document.createElement('canvas')
    canvas.width = 1
    canvas.height = 1
    
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
  }

  // Error fallback
  if (hasError) {
    return (
      <div 
        className={`bg-amber-100 border border-amber-200 text-amber-800 p-4 rounded-lg ${className}`}
        style={{ width, height }}
      >
        <span className="text-sm">Image failed to load</span>
      </div>
    )
  }

  return (
    <picture className={className}>
      {/* WebP source for modern browsers */}
      {webpSrc && (
        <source 
          srcSet={isInView ? webpSrc : undefined} 
          type="image/webp" 
          sizes={sizes}
        />
      )}
      
      {/* Fallback image */}
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-70'
        } ${className}`}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        sizes={sizes}
        style={{
          aspectRatio: width && height ? `${width}/${height}` : undefined,
        }}
        onLoad={() => {
          if (imageSrc !== placeholder) {
            setIsLoaded(true)
            onLoad?.()
          }
        }}
        onError={() => {
          setHasError(true)
          onError?.()
        }}
      />
      
      {/* Loading indicator */}
      {!isLoaded && isInView && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-amber-50 animate-pulse"
          style={{ width, height }}
        >
          <div className="w-6 h-6 border-2 border-amber-300 border-t-amber-600 rounded-full animate-spin" />
        </div>
      )}
    </picture>
  )
})

LazyImage.displayName = 'LazyImage'

export default LazyImage