import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

export function Header() {
  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-construction rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">DC</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Dream Catcher Construction</h1>
            <p className="text-sm text-muted-foreground">Fast, Market-Ready Home Repairs</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="tel:650-296-2564" className="flex items-center space-x-2 text-sm text-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            <span>650-296-2564</span>
          </a>
          <a href="mailto:mgbautista744@gmail.com" className="flex items-center space-x-2 text-sm text-foreground hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
            <span>mgbautista744@gmail.com</span>
          </a>
          <Button variant="cta" size="sm">
            Free Consultation
          </Button>
        </div>
      </div>
    </header>
  );
}