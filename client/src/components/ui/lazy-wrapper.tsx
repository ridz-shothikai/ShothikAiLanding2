import { lazy, Suspense, ComponentType } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

// Higher-order component for lazy loading with custom fallback
export function withLazyLoading<P extends object>(
  importFunc: () => Promise<{ default: ComponentType<P> }>,
  fallback?: ComponentType
) {
  const LazyComponent = lazy(importFunc);
  
  const FallbackComponent = fallback || (() => (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Skeleton className="h-8 w-64 mx-auto mb-4" />
          <Skeleton className="h-4 w-96 mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-40 rounded-lg" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  ));

  return function WrappedComponent(props: P) {
    return (
      <Suspense fallback={<FallbackComponent />}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
}

// Intersection observer wrapper for viewport-based lazy loading
export function withViewportLoading<P extends object>(
  Component: ComponentType<P>,
  options?: IntersectionObserverInit
) {
  return function ViewportComponent(props: P) {
    const [isVisible, setIsVisible] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasLoaded) {
            setIsVisible(true);
            setHasLoaded(true);
            observer.disconnect();
          }
        },
        {
          rootMargin: '100px 0px',
          threshold: 0.1,
          ...options
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, [hasLoaded, options]);

    return (
      <div ref={ref}>
        {isVisible ? (
          <Component {...props} />
        ) : (
          <div className="py-12">
            <Skeleton className="h-64 w-full rounded-lg" />
          </div>
        )}
      </div>
    );
  };
}

// Progressive loading component for images
export function ProgressiveImage({
  src,
  placeholder,
  alt,
  className = '',
  ...props
}: {
  src: string;
  placeholder?: string;
  alt: string;
  className?: string;
  [key: string]: any;
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(placeholder || '');

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageSrc(src);
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={imageSrc}
        alt={alt}
        className={`transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-60'
        }`}
        {...props}
      />
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse" />
      )}
    </div>
  );
}

import { useState, useEffect, useRef } from 'react';