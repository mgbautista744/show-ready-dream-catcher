import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Paintbrush, 
  Hammer, 
  Lightbulb, 
  Sparkles, 
  TreePine, 
  Home,
  Package,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Interior & Exterior Paint",
    description: "Fresh coats that make properties shine"
  },
  {
    icon: Hammer,
    title: "Drywall & Wall Repairs",
    description: "Smooth walls, perfect finishes"
  },
  {
    icon: Lightbulb,
    title: "Cosmetic Fixes",
    description: "Light fixtures, trim, hardware updates"
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning & Junk Removal",
    description: "Move-in ready cleanliness"
  },
  {
    icon: TreePine,
    title: "Curb Appeal Enhancements",
    description: "First impressions that wow buyers"
  },
  {
    icon: Home,
    title: "Flooring Repairs",
    description: "Beautiful floors that showcase well"
  },
  {
    icon: Package,
    title: "Pre-Staging Prep",
    description: "Ready for professional staging"
  }
];

export function Services() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">🔧 Our Most Requested Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From quick cosmetic fixes to full preparation packages, we handle the details that make properties sell faster.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover-lift animate-slide-up border-none shadow-lg" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-construction rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center">
          <Card className="inline-block p-8 bg-gradient-primary text-white border-none shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Need something else? Just ask.</h3>
            <p className="mb-6 opacity-90">We work with specialists across all trades to handle any project.</p>
            <Button variant="construction" size="lg">
              Get Custom Quote
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}