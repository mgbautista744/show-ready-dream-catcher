import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Dream Catcher helped me prep a listing with less than a week's notice. Everything was done professionally, and we had multiple offers over asking.",
    author: "Local Realtor",
    location: "Burlingame",
    rating: 5
  },
  {
    quote: "They're my go-to for quick fixes and punch list jobs. I don't even think about calling anyone else.",
    author: "Realtor",
    location: "Millbrae", 
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">💬 What Realtors Are Saying</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real feedback from Bay Area real estate professionals who trust us with their listings.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift animate-slide-up border-none shadow-lg" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-construction mr-3" />
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-construction text-construction" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-lg text-foreground leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">– {testimonial.author}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}