import { Lightbulb, Users, Shield } from 'lucide-react';

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Dr. Alex Kim",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
      bio: "Former Google AI researcher with 15+ years in machine learning and natural language processing.",
      color: "brand-primary"
    },
    {
      name: "Maria Santos",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
      bio: "Principal architect behind our scalable AI infrastructure, previously at Microsoft Azure AI.",
      color: "brand-secondary"
    },
    {
      name: "James Parker",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
      bio: "Award-winning UX designer focused on human-centered AI experiences, formerly at Apple.",
      color: "brand-trust-green"
    },
    {
      name: "Lisa Wang",
      role: "VP of Product",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
      bio: "Product visionary with deep expertise in AI productization, previously at OpenAI and Tesla.",
      color: "brand-security-blue"
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI, always staying at the forefront of technological advancement.",
      color: "brand-primary"
    },
    {
      icon: Users,
      title: "Human-Centered",
      description: "Every solution we build puts human needs and experiences at the center of our design process.",
      color: "brand-secondary"
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We maintain the highest standards of security and ethical AI development in everything we create.",
      color: "brand-trust-green"
    }
  ];

  return (
    <section id="team" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="font-manrope font-bold text-4xl lg:text-6xl tracking-tight text-black mb-6">
            Meet Our Team
          </h2>
          <p className="font-inter text-xl text-brand-charcoal max-w-3xl mx-auto leading-relaxed">
            World-class experts in AI, design, and technology working together to democratize intelligent solutions
          </p>
        </div>

        {/* Team grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <img 
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-48 h-48 rounded-2xl object-cover mx-auto group-hover:scale-105 transition-transform duration-300" 
                />
                <div className={`absolute inset-0 bg-${member.color}/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
              <h3 className="font-manrope font-bold text-xl mb-2">{member.name}</h3>
              <p className="text-brand-secondary font-medium mb-3">{member.role}</p>
              <p className="text-brand-charcoal text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
        
        {/* Company values */}
        <div className="pt-20 border-t border-slate-200/50">
          <div className="text-center mb-12">
            <h3 className="font-manrope font-bold text-3xl text-black mb-4">Our Values</h3>
            <p className="text-brand-charcoal text-lg">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 bg-${value.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className={`text-${value.color} w-8 h-8`} />
                  </div>
                  <h4 className="font-manrope font-bold text-xl mb-4">{value.title}</h4>
                  <p className="text-brand-charcoal leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
