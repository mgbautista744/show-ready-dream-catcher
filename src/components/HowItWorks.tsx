import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, UserCheck, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Tell Us What the Home Needs",
    description: "Minor repairs? Paint refresh? Staging prep? We'll take it from there."
  },
  {
    icon: UserCheck,
    title: "We Send Over a Vetted Pro",
    description: "We coordinate with licensed, trusted local contractors — no searching, no ghosting."
  },
  {
    icon: CheckCircle,
    title: "You List with Confidence",
    description: "Fast, clean, professional work that helps your property show its best."
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple, straightforward process to get your listings ready faster than ever.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="hover-lift animate-slide-up border-none shadow-lg" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-construction text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}