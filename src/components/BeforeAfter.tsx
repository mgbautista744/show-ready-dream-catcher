import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, CheckCircle } from "lucide-react";
import beforeExterior from "@/assets/before-exterior.jpg";
import afterExterior from "@/assets/after-exterior.jpg";
import beforeInterior from "@/assets/before-interior.jpg";
import afterInterior from "@/assets/after-interior.jpg";

const projects = [
  {
    title: "Millbrae Listing Transformation",
    timeline: "Completed in 5 days",
    services: ["Exterior Paint", "Curb Appeal", "Deep Cleaning"],
    before: beforeExterior,
    after: afterExterior,
    result: "Sold 15% over asking price"
  },
  {
    title: "Burlingame Interior Refresh", 
    timeline: "Completed in 3 days",
    services: ["Interior Paint", "Flooring Repairs", "Project Management"],
    before: beforeInterior,
    after: afterInterior,
    result: "Listed same week, multiple offers"
  }
];

export function BeforeAfter() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">📸 Real Results from Real Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we transform properties to help realtors close faster and at higher prices.
          </p>
        </div>

        <div className="space-y-16 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <div className="flex items-center justify-center gap-4 text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.timeline}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-green-600 font-medium">{project.result}</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {project.services.map((service, serviceIndex) => (
                    <span key={serviceIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="overflow-hidden group">
                  <div className="relative">
                    <img 
                      src={project.before} 
                      alt="Before renovation"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full font-medium text-sm">
                      Before
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2">Original Condition</h4>
                    <p className="text-muted-foreground text-sm">
                      Property needed updates to meet market standards and attract buyers.
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden group">
                  <div className="relative">
                    <img 
                      src={project.after} 
                      alt="After renovation"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full font-medium text-sm">
                      After
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2">Market Ready</h4>
                    <p className="text-muted-foreground text-sm">
                      Transformed into a show-ready property that drives competitive offers.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Card className="inline-block p-8 bg-gradient-primary text-white border-none shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Next Listing?</h3>
            <p className="mb-6 opacity-90">Let's discuss your property's potential and create a custom action plan.</p>
            <Button variant="construction" size="lg">
              Schedule a Property Walkthrough
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}