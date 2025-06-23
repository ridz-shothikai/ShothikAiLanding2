import { useState, useEffect } from 'react';
import { Play, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
  autoplay?: boolean;
  showControls?: boolean;
  startTime?: number;
  endTime?: number;
  aspectRatio?: 'video' | 'square' | 'wide';
}

export function YouTubeEmbed({
  videoId,
  title = 'YouTube Video',
  className,
  autoplay = false,
  showControls = true,
  startTime,
  endTime,
  aspectRatio = 'video'
}: YouTubeEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showPlayer, setShowPlayer] = useState(autoplay);
  const [thumbnailUrl, setThumbnailUrl] = useState('');

  useEffect(() => {
    // Load high-quality thumbnail with fallback
    const img = new Image();
    img.onload = () => setThumbnailUrl(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);
    img.onerror = () => setThumbnailUrl(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
    img.src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  }, [videoId]);

  const handlePlay = () => {
    setShowPlayer(true);
    setIsLoading(true);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  // Build YouTube embed URL with parameters
  const embedUrl = () => {
    const params = new URLSearchParams({
      autoplay: showPlayer ? '1' : '0',
      controls: showControls ? '1' : '0',
      modestbranding: '1',
      rel: '0',
      iv_load_policy: '3',
      color: 'white',
      playsinline: '1'
    });

    if (startTime) params.append('start', startTime.toString());
    if (endTime) params.append('end', endTime.toString());

    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  };

  const aspectRatioClasses = {
    video: 'aspect-video', // 16:9
    square: 'aspect-square', // 1:1
    wide: 'aspect-[21/9]' // Ultra wide
  };

  return (
    <div className={cn(
      'relative overflow-hidden rounded-xl bg-slate-100 shadow-lg',
      aspectRatioClasses[aspectRatio],
      className
    )}>
      {!showPlayer ? (
        // Thumbnail with play button
        <div className="relative w-full h-full group cursor-pointer" onClick={handlePlay}>
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          
          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
          
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-red-600 hover:bg-red-700 text-white rounded-full p-4 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
              <Play className="w-8 h-8 ml-1" fill="currentColor" />
            </div>
          </div>
          
          {/* Video title overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h3 className="text-white font-semibold text-lg leading-tight">
              {title}
            </h3>
          </div>
        </div>
      ) : (
        // YouTube iframe
        <div className="relative w-full h-full">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
              <Loader2 className="w-8 h-8 animate-spin text-slate-600" />
            </div>
          )}
          
          <iframe
            src={embedUrl()}
            title={title}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            onLoad={handleIframeLoad}
          />
        </div>
      )}
    </div>
  );
}

// Helper function to extract video ID from YouTube URL
export function extractYouTubeId(url: string): string | null {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

// Video gallery component for multiple videos
interface VideoGalleryProps {
  videos: Array<{
    id: string;
    title: string;
    description?: string;
  }>;
  className?: string;
}

export function VideoGallery({ videos, className }: VideoGalleryProps) {
  return (
    <div className={cn('grid gap-6 md:grid-cols-2 lg:grid-cols-3', className)}>
      {videos.map((video) => (
        <div key={video.id} className="space-y-3">
          <YouTubeEmbed
            videoId={video.id}
            title={video.title}
          />
          <div>
            <h4 className="font-semibold text-slate-900 leading-tight">
              {video.title}
            </h4>
            {video.description && (
              <p className="text-sm text-slate-600 mt-1">
                {video.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}