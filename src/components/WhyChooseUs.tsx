import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, MessageCircle, DollarSign, Wrench, Award } from "lucide-react";
const benefits = [{
  icon: Clock,
  title: "Fast Turnarounds",
  description: "We understand the urgency of hitting your listing date. Our network moves quickly — even for last-minute jobs.",
  gradient: "from-blue-500 via-cyan-500 to-teal-500",
  bgPattern: "bg-gradient-to-br from-blue-50 to-cyan-50"
}, {
  icon: Shield,
  title: "Quality Workmanship",
  description: "Every professional in our network is screened for quality, reliability, and craftsmanship. We ensure top-tier results.",
  gradient: "from-emerald-500 via-green-500 to-lime-500",
  bgPattern: "bg-gradient-to-br from-emerald-50 to-green-50"
}, {
  icon: MessageCircle,
  title: "Clear Communication",
  description: "You'll have one point of contact for all your project updates. We keep it simple and efficient.",
  gradient: "from-purple-500 via-violet-500 to-indigo-500",
  bgPattern: "bg-gradient-to-br from-purple-50 to-violet-50"
}, {
  icon: DollarSign,
  title: "Cost-Effective Work",
  description: "We focus on the updates that maximize ROI — not unnecessary remodels. Great results without overspending.",
  gradient: "from-amber-500 via-orange-500 to-red-500",
  bgPattern: "bg-gradient-to-br from-amber-50 to-orange-50"
}, {
  icon: Wrench,
  title: "We Manage the Process",
  description: "You don't need to chase contractors. We coordinate everything — and keep you updated along the way.",
  gradient: "from-slate-500 via-gray-500 to-zinc-500",
  bgPattern: "bg-gradient-to-br from-slate-50 to-gray-50"
}, {
  icon: Award,
  title: "Accountable, Always",
  description: "We stand behind the work we coordinate. If something's not right, we make it right.",
  gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
  bgPattern: "bg-gradient-to-br from-rose-50 to-pink-50"
}];
export function WhyChooseUs() {
  return <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10" />
      <div className="absolute inset-0 opacity-30" style={{
      backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='2' fill='hsl(var(--primary)/0.1)'%3E%3C/circle%3E%3C/svg%3E\")",
      backgroundRepeat: "repeat"
    }} />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">🎯 Why Realtors and Investors Work With Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">We understand what's important to you: speed, cost control, and reliable execution.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return <Card key={index} className={`hover-lift animate-slide-up border-none shadow-lg group cursor-pointer overflow-hidden ${benefit.bgPattern}`} style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardContent className="p-6 relative">
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-white drop-shadow-sm" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">✅ {benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </CardContent>
              </Card>;
        })}
        </div>
      </div>
    </section>;
}