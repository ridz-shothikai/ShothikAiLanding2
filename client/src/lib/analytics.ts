declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    clarity?: (...args: any[]) => void;
    dataLayer?: any[];
    GTM_ID?: string;
    FB_PIXEL_ID?: string;
    CLARITY_ID?: string;
  }
}

export interface AnalyticsEvent {
  eventName: string;
  properties?: Record<string, any>;
}

export class Analytics {
  private static maxScrollDepth = 0;
  private static startTime = Date.now();

  static trackEvent(eventName: string, properties: Record<string, any> = {}) {
    try {
      // Google Analytics 4 event tracking
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, properties);
      }
      
      // Facebook Pixel custom event tracking (using trackCustom for non-standard events)
      if (typeof window !== 'undefined' && window.fbq) {
        if (['mindmap_interaction', 'scroll_depth', 'button_click'].includes(eventName)) {
          window.fbq('trackCustom', eventName, properties);
        } else {
          window.fbq('track', eventName, properties);
        }
      }
      
      // Microsoft Clarity custom events
      if (typeof window !== 'undefined' && window.clarity) {
        window.clarity('event', eventName);
      }
      
      console.log('Event tracked:', eventName, properties);
    } catch (error) {
      console.warn('Analytics tracking failed:', error);
    }
  }

  static trackButtonClick(buttonText: string, section: string) {
    this.trackEvent('button_click', {
      button_text: buttonText,
      section: section
    });
  }

  static trackMindMapInteraction(nodeType: string) {
    this.trackEvent('mindmap_interaction', {
      node_type: nodeType
    });
  }

  static trackScrollDepth(percentage: number) {
    if (percentage > this.maxScrollDepth) {
      this.maxScrollDepth = percentage;
      
      // Track scroll milestones
      if ([25, 50, 75, 90].includes(percentage)) {
        this.trackEvent('scroll_depth', {
          percentage: percentage
        });
      }
    }
  }

  static trackPageExit() {
    const timeOnPage = Math.round((Date.now() - this.startTime) / 1000);
    this.trackEvent('time_on_page', {
      seconds: timeOnPage
    });
  }

  static initScrollTracking() {
    if (typeof window === 'undefined') return;

    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);
      
      this.trackScrollDepth(scrollPercentage);
    });

    window.addEventListener('beforeunload', () => {
      this.trackPageExit();
    });
  }
}
