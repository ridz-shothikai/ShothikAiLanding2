import { Star } from 'lucide-react';

export default function SuccessStories() {
  const testimonials = [
    {
      name: "Dr. Emily Carter",
      role: "Chief Medical Officer, Regional Health Network",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote: "Teleport has revolutionized our patient documentation. 99% transcription accuracy saves our doctors 3 hours daily, allowing more patient focus time."
    },
    {
      name: "James Wilson",
      role: "Engineering Manager, BuildTech Corp",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote: "Engineering Insights Platform reduced our drawing analysis time by 70%. The smart BOM extraction and code compliance features are game-changers."
    },
    {
      name: "Detective Maria Santos",
      role: "Investigation Unit, Metro Police Department",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote: "The Police Investigation Suite streamlined our case management. Automated report generation saves 4 hours per case while improving accuracy."
    },
    {
      name: "David Chen",
      role: "Legal Operations Director, LawFirm Partners",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote: "Doclyze transformed our document workflow. 80% faster access and smart categorization eliminated manual filing, saving 15 hours weekly."
    }
  ];

  const stats = [
    { value: "50K+", label: "Documents Processed" },
    { value: "99.7%", label: "Semantic Accuracy" },
    { value: "80%", label: "Time Savings" },
    { value: "5", label: "Enterprise Platforms" }
  ];

  return (
    <section id="success-stories" className="py-24 lg:py-32 bg-gradient-to-b from-brand-accent-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="font-manrope font-bold text-4xl lg:text-6xl tracking-tight text-black mb-6">
            Success Stories
          </h2>
          <p className="font-inter text-xl text-brand-charcoal max-w-3xl mx-auto leading-relaxed">
            See how organizations worldwide are transforming their operations with Shothik AI
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-manrope font-thin text-5xl lg:text-6xl text-brand-primary mb-2">
                {stat.value}
              </div>
              <div className="text-brand-charcoal">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200/50 hover-scale">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={testimonial.image}
                  alt={`${testimonial.name} - ${testimonial.role}`}
                  className="w-16 h-16 rounded-full object-cover" 
                />
                <div>
                  <div className="font-semibold text-lg">{testimonial.name}</div>
                  <div className="text-brand-light-gray">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-brand-charcoal leading-relaxed mb-4">
                "{testimonial.quote}"
              </p>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-warning-amber fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
