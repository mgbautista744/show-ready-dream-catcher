import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, UserCheck, CheckCircle } from "lucide-react";
import processConsultation from "@/assets/process-consultation.jpg";
import processWork from "@/assets/process-work.jpg";
import processSuccess from "@/assets/process-success.jpg";

const steps = [
  {
    icon: MessageSquare,
    title: "Tell Us What the Home Needs",
    description: "Minor repairs? Paint refresh? Staging prep? We'll take it from there.",
    image: processConsultation,
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    accent: "bg-blue-500"
  },
  {
    icon: UserCheck,
    title: "We Send Over a Vetted Pro",
    description: "We coordinate with licensed, trusted local contractors — no searching, no ghosting.",
    image: processWork,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    accent: "bg-emerald-500"
  },
  {
    icon: CheckCircle,
    title: "You List with Confidence",
    description: "Fast, clean, professional work that helps your property show its best.",
    image: processSuccess,
    gradient: "from-orange-500 via-red-500 to-pink-500",
    accent: "bg-orange-500"
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">🚀 How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple, straightforward process to get your listings ready faster than ever.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="hover-lift animate-slide-up border-none shadow-xl group cursor-pointer overflow-hidden bg-white/80 backdrop-blur-sm" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Image Header */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${step.gradient} opacity-80`} />
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                      <Icon className="w-6 h-6 text-white drop-shadow-sm" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className={`w-10 h-10 ${step.accent} text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg`}>
                      {index + 1}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8 text-center relative">
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  
                  {/* Decorative line */}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r ${step.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}