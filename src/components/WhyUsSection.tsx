import { Shield, Truck, Clock, Award, Leaf, HeadphonesIcon } from "lucide-react";

const WhyUsSection = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Quality Assured",
      description: "ISO-certified manufacturing processes ensure consistent, high-quality products every time.",
    },
    {
      icon: Truck,
      title: "Nationwide Delivery",
      description: "Fast and reliable delivery service across the Philippines, from Luzon to Mindanao.",
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Efficient production capabilities mean shorter lead times for your orders.",
    },
    {
      icon: Award,
      title: "Industry Expertise",
      description: "Over 20 years of experience serving diverse industries with specialized solutions.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Committed to sustainable practices with recyclable materials and green manufacturing.",
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Support",
      description: "Expert technical team ready to assist with product selection and custom solutions.",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-primary/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-primary/5 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Your Trusted Partner in 
            <span className="text-gradient"> EPS Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We combine decades of expertise with cutting-edge technology to deliver 
            exceptional products and service.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-muted/30 hover:bg-muted/60 transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl border border-primary/20" />
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-20 pt-12 border-t border-border">
          <p className="text-center text-muted-foreground text-sm mb-8">Trusted by leading companies</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {["Client 1", "Client 2", "Client 3", "Client 4", "Client 5"].map((client, index) => (
              <div
                key={index}
                className="text-xl font-bold text-foreground/40 hover:text-foreground/60 transition-colors cursor-default"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
