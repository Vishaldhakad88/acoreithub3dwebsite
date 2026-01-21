import React, { useState, useEffect } from "react";
import { Globe, Smartphone, Palette, Cloud, Cpu, Lightbulb, Search, ShoppingCart, TrendingUp } from "lucide-react";

const services = [
  {
    title: "Custom Web Apps",
    icon: Globe,
    features: ["Tailor-Made Solutions", "Scalability", "High Security", "Integration-Friendly", "Unique Brand Identity"]
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    features: ["iOS & Android Apps", "Cross-Platform Solutions", "Native Performance", "Smooth UI/UX", "App Store Optimization"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    features: ["Cloud Migration", "CI/CD Pipeline", "Infrastructure as Code", "Container Orchestration", "24/7 Monitoring"]
  },
  {
    title: "Digital Marketing",
    icon: TrendingUp,
    features: ["Social Media Marketing", "Content Strategy", "Brand Development", "Analytics & Reporting", "ROI Optimization"]
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Usability Testing", "Design Systems"]
  },
  {
    title: "IT Consulting",
    icon: Lightbulb,
    features: ["Technology Assessment", "Digital Transformation", "Architecture Design", "Security Audit", "Strategic Planning"]
  },
  {
    title: "SEO/SMM",
    icon: Search,
    features: ["Search Engine Optimization", "Social Media Management", "Keyword Research", "Link Building", "Performance Tracking"]
  },
  {
    title: "E-commerce",
    icon: ShoppingCart,
    features: ["Online Store Setup", "Payment Integration", "Inventory Management", "Shopping Cart Optimization", "Multi-channel Selling"]
  }
];

export default function Services() {
  const [hovered, setHovered] = useState(null);
  const [iconAnimations, setIconAnimations] = useState({});

  useEffect(() => {
    const intervals = {};
    services.forEach((_, i) => {
      intervals[i] = setInterval(() => {
        setIconAnimations(prev => ({
          ...prev,
          [i]: Date.now()
        }));
      }, 3000 + i * 200);
    });

    return () => {
      Object.values(intervals).forEach(clearInterval);
    };
  }, []);

  return (
    <section id="services" className="relative bg-black text-white py-28 overflow-hidden">
      <style>{`
        @keyframes floatIcon {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        
        .icon-float {
          animation: floatIcon 3s ease-in-out infinite;
        }
        
        .icon-float-0 { animation-delay: 0s; }
        .icon-float-1 { animation-delay: 0.2s; }
        .icon-float-2 { animation-delay: 0.4s; }
        .icon-float-3 { animation-delay: 0.6s; }
        .icon-float-4 { animation-delay: 0.8s; }
        .icon-float-5 { animation-delay: 1s; }
        .icon-float-6 { animation-delay: 1.2s; }
        .icon-float-7 { animation-delay: 1.4s; }
      `}</style>

      {/* Main Black Overlay */}
      <div className="absolute inset-0 bg-black/85"></div>

      {/* Soft Blue Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(14,165,233,0.18),transparent_45%)]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Services
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Advanced IT solutions powered by modern technologies and global expertise.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isHovered = hovered === i;
            
            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`relative p-8 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.7)] transition-all duration-300 ${isHovered ? 'transform -translate-y-4 rotate-x-2 rotate-y-2 border-cyan-400/50' : ''}`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Animated Icon */}
                <div 
                  className={`icon-float icon-float-${i} w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 shadow-[0_0_35px_rgba(14,165,233,0.6)] transition-transform duration-300 ${isHovered ? 'scale-125 rotate-12' : ''}`}
                >
                  <Icon size={28} className="text-gray-300" />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                {/* Features List - Shows on Hover */}
                <div className={`overflow-hidden transition-all duration-300 ${isHovered ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <ul className="space-y-2 text-sm text-white/80 leading-relaxed">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Indicator */}
                {!isHovered && (
                  <p className="text-white/50 text-xs mt-3">
                    Hover for details
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}