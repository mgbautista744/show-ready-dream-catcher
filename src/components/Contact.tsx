import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section className="py-20 bg-gradient-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">📞 Ready to Get Started?</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Let's talk about your next listing — we'll take care of the prep so you can focus on the sale.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur border-white/20 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-white">Dream Catcher Construction</h3>
                  
                  <div className="space-y-4 mb-8">
                    <a href="tel:650-296-2564" className="flex items-center space-x-3 text-white hover:text-construction transition-colors group">
                      <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="text-lg">650-296-2564</span>
                    </a>
                    
                    <a href="mailto:mgbautista744@gmail.com" className="flex items-center space-x-3 text-white hover:text-construction transition-colors group">
                      <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="text-lg">mgbautista744@gmail.com</span>
                    </a>
                    
                    <div className="flex items-center space-x-3 text-white/80">
                      <MapPin className="w-5 h-5" />
                      <span>Serving the entire Bay Area</span>
                    </div>
                  </div>
                  
                  <p className="text-white/80 text-sm">
                    📍 Millbrae, Burlingame, San Mateo, and surrounding areas
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 text-white">Get Your Free Consultation</h4>
                    <p className="text-white/80 mb-6">Quick walkthrough, detailed estimate, no obligations.</p>
                  </div>
                  
                  <div className="space-y-4">
                    <Button variant="construction" size="lg" className="w-full text-lg">
                      Schedule Free Walkthrough
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                    
                    <Button variant="outline" size="lg" className="w-full text-lg bg-white/10 border-white/30 text-white hover:bg-white/20">
                      Call Now: 650-296-2564
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}