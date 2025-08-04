import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
export function Hero() {
  return <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Professional construction work on Bay Area home" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white animate-fade-in">
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-construction text-construction" />)}
            </div>
            <span className="text-construction font-semibold">We handle property prep and repairs—on time and on budget—so you can focus on closing deals and maximizing ROI.</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Your Go-To Partner for 
            <span className="text-construction"> Fast</span>, Market-Ready Home Repairs
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed text-white/90">We handle property prep and light remodels—on time and on budget—so you can focus on closing deals and maximizing ROI.</p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="construction" size="lg" className="text-lg px-8">
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20">
              Call 650-296-2564
            </Button>
          </div>
          
          <div className="mt-8 text-white/80">
            <p className="text-sm">📍 Serving Millbrae, Burlingame, San Mateo, and the entire Bay Area</p>
          </div>
        </div>
      </div>
    </section>;
}