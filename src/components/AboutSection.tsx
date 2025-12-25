import { Check, Award, Users, Factory } from "lucide-react";
import { useEffect, useState } from "react";

const images = [
  "https://architizer-prod.imgix.net/media/mediadata/uploads/163759632686916_schemaarc_Calpak_George_Fakaros.jpg?w=1680&q=60",
  "https://i.pinimg.com/736x/14/f2/5b/14f25b9b62bd1db14c7d7f166cc025ee.jpg",
  "https://i.pinimg.com/736x/1b/62/dd/1b62dd701ebed294a0bfba3b77669eff.jpg",
  "https://i.pinimg.com/1200x/5f/60/18/5f6018ad852158c4b61a012805d259ba.jpg",
  "https://i.pinimg.com/1200x/c1/fc/17/c1fc178711da0aceb6f3537d11e9f94a.jpg",
];

const AboutSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  const features = [
    "State-of-the-art manufacturing facility",
    "ISO certified quality management",
    "Eco-friendly production processes",
    "Nationwide delivery coverage",
  ];

  const stats = [
    { icon: Factory, value: "10,000", label: "Sq.m. Facility" },
    { icon: Users, value: "200+", label: "Team Members" },
    { icon: Award, value: "15+", label: "Industry Awards" },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual Side */}
          <div className="relative">
        <div className="relative z-10">
<div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card relative">
  {images.map((src, index) => (
    <img
      key={index}
      src={src}
      alt={`Facility slide ${index + 1}`}
      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
        index === currentIndex ? "opacity-100" : "opacity-0"
      }`}
    />
  ))}
</div>
        </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-card border border-border z-20 animate-float">
              <div className="text-4xl font-bold text-gradient mb-1">20+</div>
              <div className="text-muted-foreground text-sm">Years of Excellence</div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              About Styrotech
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Philippines' Trusted 
              <span className="text-gradient"> EPS Manufacturer</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              For over two decades, Styrotech Philippines has been at the forefront of 
              expanded polystyrene (EPS) manufacturing. We provide innovative, high-quality 
              foam solutions for packaging, construction, and insulation applications.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our commitment to excellence, sustainable practices, and customer satisfaction 
              has made us the preferred partner for businesses across the Philippines and beyond.
            </p>

            {/* Features list */}
            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors duration-300">
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="text-xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
