import { YouTubeEmbed, VideoGallery } from '@/components/ui/youtube-embed';

export default function VideoShowcase() {
  // Replace these with your actual YouTube video IDs
  const featuredVideo = {
    id: 'dQw4w9WgXcQ', // Replace with your main video ID
    title: 'Shothik AI - Revolutionizing Digital Solutions',
    description: 'Discover how our AI-powered platforms are transforming businesses across industries.'
  };

  const showcaseVideos = [
    {
      id: 'dQw4w9WgXcQ', // Replace with actual video IDs
      title: 'DocLyze Platform Demo',
      description: 'See how DocLyze transforms document processing with AI'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'SmartCrawl in Action',
      description: 'Advanced web scraping and data extraction capabilities'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Engineering Platform Overview',
      description: 'Comprehensive engineering solutions for modern businesses'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Client Success Stories',
      description: 'Real results from our satisfied customers'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            See Our Solutions in Action
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Watch how Shothik AI's innovative platforms are transforming businesses 
            and delivering real results for our clients.
          </p>
        </div>

        {/* Featured Video */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <YouTubeEmbed
              videoId={featuredVideo.id}
              title={featuredVideo.title}
              className="mb-6"
            />
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                {featuredVideo.title}
              </h3>
              <p className="text-slate-600 text-lg">
                {featuredVideo.description}
              </p>
            </div>
          </div>
        </div>

        {/* Video Gallery */}
        <div>
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Platform Demonstrations
          </h3>
          <VideoGallery videos={showcaseVideos} />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-slate-600 mb-6">
              Schedule a personalized demo to see how our AI solutions can work for you.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}