import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary-foreground/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary-foreground/5 rounded-full" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur-sm mb-6 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm text-primary-foreground/80 font-medium">Leading EPS Manufacturer in the Philippines</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Innovative
              <span className="block text-secondary">Styrofoam Solutions</span>
              For Every Industry
            </h1>
            
            <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Premium quality EPS products for packaging, construction, and insulation. 
              Trusted by leading companies nationwide for over two decades.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="lg">
                Explore Products
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="heroOutline" size="lg">
                <Play size={20} className="mr-2" />
                Watch Video
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-secondary">20+</div>
                <div className="text-sm text-primary-foreground/60">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-secondary">500+</div>
                <div className="text-sm text-primary-foreground/60">Clients Served</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-secondary">50M+</div>
                <div className="text-sm text-primary-foreground/60">Products Made</div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full border-2 border-secondary/30 animate-pulse" />
              <div className="absolute inset-8 rounded-full border border-secondary/20" />
              
              {/* Central visual */}
              <div className="absolute inset-16 glass-card rounded-3xl flex items-center justify-center shadow-glow animate-float">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 gradient-primary rounded-2xl flex items-center justify-center shadow-card">
                    <span className="text-5xl font-bold text-primary-foreground">S</span>
                  </div>
                  <p className="text-primary-foreground/80 font-medium">Premium EPS</p>
                  <p className="text-primary-foreground/60 text-sm">Quality Guaranteed</p>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute top-10 right-0 glass-card rounded-xl p-4 animate-float" style={{ animationDelay: "-2s" }}>
                <div className="text-secondary font-bold text-xl">ISO</div>
                <div className="text-primary-foreground/60 text-xs">Certified</div>
              </div>
              
              <div className="absolute bottom-20 left-0 glass-card rounded-xl p-4 animate-float" style={{ animationDelay: "-4s" }}>
                <div className="text-secondary font-bold text-xl">Eco</div>
                <div className="text-primary-foreground/60 text-xs">Friendly</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
