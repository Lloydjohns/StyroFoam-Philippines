import { Package, Building2, Thermometer, Box, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductsSection = () => {
  const products = [
    {
      icon: Package,
      title: "Packaging Solutions",
      description: "Custom protective packaging for electronics, appliances, and fragile goods. Designed for maximum protection during shipping.",
      features: ["Custom molding", "Shock absorption", "Lightweight design"],
    },
    {
      icon: Building2,
      title: "Construction Materials",
      description: "Structural EPS boards and blocks for modern construction. Perfect for insulated concrete forms and lightweight fill.",
      features: ["High density", "Structural support", "Easy installation"],
    },
    {
      icon: Thermometer,
      title: "Insulation Products",
      description: "Superior thermal insulation panels for residential and commercial buildings. Energy-efficient and long-lasting.",
      features: ["Thermal efficiency", "Moisture resistant", "Fire retardant"],
    },
    {
      icon: Box,
      title: "Custom Solutions",
      description: "Bespoke EPS products tailored to your specific requirements. From prototypes to large-scale production.",
      features: ["Any shape or size", "Rapid prototyping", "Volume pricing"],
    },
  ];

  return (
    <section id="products" className="py-24 gradient-subtle relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Comprehensive EPS Solutions 
            <span className="text-gradient"> For Every Need</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From packaging to construction, we deliver high-quality expanded polystyrene 
            products that meet the highest industry standards.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-500 border border-border hover:border-primary/20 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <product.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {product.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a
                href="#contact"
                className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-3 gap-2 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg">
            View All Products
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
