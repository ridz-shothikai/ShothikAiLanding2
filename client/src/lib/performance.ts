import { useRef, useEffect, useState, useCallback } from 'react';

// Performance optimization utilities for lazy loading and preloading
export class PerformanceOptimizer {
  private static observer: IntersectionObserver | null = null;
  private static preloadedImages = new Set<string>();

  // Initialize intersection observer for lazy loading
  static initLazyLoading() {
    if (typeof window === 'undefined' || this.observer) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            
            // Handle lazy loading for images
            if (element.tagName === 'IMG') {
              const img = element as HTMLImageElement;
              const src = img.dataset.src;
              if (src && !img.src) {
                img.src = src;
                img.onload = () => {
                  img.classList.add('loaded');
                };
              }
            }
            
            // Handle lazy loading for background images
            if (element.dataset.bgSrc) {
              element.style.backgroundImage = `url(${element.dataset.bgSrc})`;
              element.classList.add('loaded');
            }
            
            this.observer?.unobserve(element);
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    );
  }

  // Observe element for lazy loading
  static observeElement(element: HTMLElement) {
    if (!this.observer) this.initLazyLoading();
    this.observer?.observe(element);
  }

  // Preload critical images
  static preloadImage(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.preloadedImages.has(src)) {
        resolve();
        return;
      }

      const img = new Image();
      img.onload = () => {
        this.preloadedImages.add(src);
        resolve();
      };
      img.onerror = reject;
      img.src = src;
    });
  }

  // Preload multiple images
  static async preloadImages(sources: string[]): Promise<void> {
    const promises = sources.map(src => this.preloadImage(src));
    await Promise.all(promises);
  }

  // Prefetch next page resources
  static prefetchRoute(route: string) {
    if (typeof window === 'undefined') return;

    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = route;
    document.head.appendChild(link);
  }

  // Optimize component rendering with requestIdleCallback
  static scheduleWork(callback: () => void) {
    if (typeof window === 'undefined') {
      callback();
      return;
    }

    if ('requestIdleCallback' in window) {
      requestIdleCallback(callback);
    } else {
      setTimeout(callback, 0);
    }
  }

  // Debounce function for performance optimization
  static debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }

  // Throttle function for scroll events
  static throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  // Get optimal image size based on device pixel ratio and viewport
  static getOptimalImageSize(baseWidth: number, baseHeight: number) {
    if (typeof window === 'undefined') {
      return { width: baseWidth, height: baseHeight };
    }

    const pixelRatio = window.devicePixelRatio || 1;
    const viewportWidth = window.innerWidth;
    
    // Scale down for smaller viewports
    let scaleFactor = 1;
    if (viewportWidth < 768) {
      scaleFactor = 0.5;
    } else if (viewportWidth < 1024) {
      scaleFactor = 0.75;
    }

    return {
      width: Math.round(baseWidth * scaleFactor * pixelRatio),
      height: Math.round(baseHeight * scaleFactor * pixelRatio)
    };
  }

  // Cleanup observer
  static cleanup() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}

// React hook for intersection observer
export function useIntersectionObserver(
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit
) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    observerRef.current = new IntersectionObserver(callback, {
      rootMargin: '100px 0px',
      threshold: 0.1,
      ...options
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [callback, options]);

  const observe = useCallback((element: HTMLElement | null) => {
    if (element && observerRef.current) {
      observerRef.current.observe(element);
    }
  }, []);

  const unobserve = useCallback((element: HTMLElement | null) => {
    if (element && observerRef.current) {
      observerRef.current.unobserve(element);
    }
  }, []);

  return { observe, unobserve };
}

// Hook for preloading resources when components mount
export function usePreloadResources() {
  useEffect(() => {
    // Preload critical platform page resources
    const platformRoutes = [
      '/platforms/doclyze',
      '/platforms/smartcrawl',
      '/platforms/engineering',
      '/platforms/teleport',
      '/platforms/police'
    ];

    // Prefetch platform pages on idle
    PerformanceOptimizer.scheduleWork(() => {
      platformRoutes.forEach(route => {
        PerformanceOptimizer.prefetchRoute(route);
      });
    });
  }, []);
}

// Hook for optimized scroll tracking
export function useOptimizedScrollTracking(callback: (percentage: number) => void) {
  useEffect(() => {
    const handleScroll = PerformanceOptimizer.throttle(() => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = Math.round((scrollTop / scrollHeight) * 100);
      callback(percentage);
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [callback]);
}