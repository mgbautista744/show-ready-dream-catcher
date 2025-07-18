import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, MessageCircle, DollarSign, Wrench, Award } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Fast Turnarounds",
    description: "We understand the urgency of hitting your listing date. Our network moves quickly — even for last-minute jobs."
  },
  {
    icon: Shield,
    title: "Licensed, Vetted Contractors",
    description: "Every pro in our network is screened for quality, reliability, and professionalism. No sketchy vendors here."
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description: "You'll have one point of contact for all your project updates. We keep it simple and efficient."
  },
  {
    icon: DollarSign,
    title: "Cost-Effective Work",
    description: "We focus on the updates that maximize ROI — not unnecessary remodels. Great results without overspending."
  },
  {
    icon: Wrench,
    title: "We Manage the Process",
    description: "You don't need to chase contractors. We coordinate everything — and keep you updated along the way."
  },
  {
    icon: Award,
    title: "Accountable, Always",
    description: "We stand behind the work we coordinate. If something's not right, we make it right."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Realtors Work With Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We make home prep easy, fast, and reliable so you can focus on what you do best — selling homes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="hover-lift animate-slide-up border-none shadow-lg" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">✅ {benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}