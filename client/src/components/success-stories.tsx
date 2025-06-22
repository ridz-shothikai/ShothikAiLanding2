import { Star } from 'lucide-react';

export default function SuccessStories() {
  const testimonials = [
    {
      name: "Marcus Chen",
      role: "CTO, TechFlow Inc.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote: "Shothik AI transformed our development workflow. We've reduced project timelines by 40% while maintaining the highest quality standards."
    },
    {
      name: "Sarah Johnson",
      role: "Creative Director, Pixel Studios",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote: "The Studio suite is incredible. Our creative team can now focus on strategy while AI handles the repetitive design tasks."
    },
    {
      name: "David Rodriguez",
      role: "CEO, DataScale Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      quote: "Enterprise security without compromise. Shothik AI meets all our compliance requirements while delivering exceptional performance."
    }
  ];

  const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "99.9%", label: "Uptime" },
    { value: "2.5x", label: "Productivity Boost" },
    { value: "24/7", label: "Support" }
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
        <div className="grid lg:grid-cols-3 gap-8">
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
