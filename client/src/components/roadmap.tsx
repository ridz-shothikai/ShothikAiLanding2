export default function Roadmap() {
  const roadmapItems = [
    {
      quarter: "Q4 2024",
      title: "Studio 2.0 Launch",
      description: "Advanced AI models with multimodal capabilities, real-time collaboration features, and enhanced creative tools.",
      color: "brand-trust-green",
      side: "left"
    },
    {
      quarter: "Q1 2025",
      title: "Enterprise AI Suite",
      description: "Comprehensive enterprise platform with advanced analytics, custom model training, and enterprise-grade security features.",
      color: "brand-secondary",
      side: "right"
    },
    {
      quarter: "Q2 2025",
      title: "Mobile Applications",
      description: "Native iOS and Android apps bringing Shothik AI capabilities to mobile devices with offline functionality.",
      color: "brand-security-blue",
      side: "left"
    },
    {
      quarter: "Q3 2025",
      title: "Developer Platform",
      description: "Open API platform enabling third-party developers to build on Shothik AI infrastructure with comprehensive SDKs.",
      color: "brand-warning-amber",
      side: "right"
    },
    {
      quarter: "Q4 2025",
      title: "Global Expansion",
      description: "International market expansion with localized AI models, multi-language support, and regional compliance.",
      color: "brand-primary",
      side: "left"
    }
  ];

  return (
    <section id="roadmap" className="py-24 lg:py-32 bg-gradient-to-br from-brand-accent-light via-white to-brand-accent-highlight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="font-manrope font-bold text-4xl lg:text-6xl tracking-tight text-black mb-6">
            Our Roadmap
          </h2>
          <p className="font-inter text-xl text-brand-charcoal max-w-3xl mx-auto leading-relaxed">
            Discover what's coming next in our journey to democratize AI and expand our ecosystem
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-brand-secondary/30"></div>
          
          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div key={index} className="relative flex items-center">
                {item.side === "left" ? (
                  <>
                    <div className="flex-1 text-right pr-8">
                      <div className="bg-white p-6 rounded-2xl border border-slate-200/50 hover-scale">
                        <div className={`inline-block bg-${item.color}/10 text-${item.color} px-3 py-1 rounded-full text-sm font-medium mb-3`}>
                          {item.quarter}
                        </div>
                        <h3 className="font-manrope font-bold text-xl mb-3">{item.title}</h3>
                        <p className="text-brand-charcoal">{item.description}</p>
                      </div>
                    </div>
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-${item.color} rounded-full border-4 border-white shadow-lg`}></div>
                    <div className="flex-1 pl-8"></div>
                  </>
                ) : (
                  <>
                    <div className="flex-1 pr-8"></div>
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-${item.color} rounded-full border-4 border-white shadow-lg`}></div>
                    <div className="flex-1 text-left pl-8">
                      <div className="bg-white p-6 rounded-2xl border border-slate-200/50 hover-scale">
                        <div className={`inline-block bg-${item.color}/10 text-${item.color} px-3 py-1 rounded-full text-sm font-medium mb-3`}>
                          {item.quarter}
                        </div>
                        <h3 className="font-manrope font-bold text-xl mb-3">{item.title}</h3>
                        <p className="text-brand-charcoal">{item.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
