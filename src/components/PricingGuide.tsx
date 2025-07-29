import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const pricingTiers = {
  bathroom: [
    {
      tier: "Basic",
      price: "$8,000 - $15,000",
      description: "Essential updates for a fresh look",
      features: [
        "New vanity and mirror",
        "Updated fixtures and hardware",
        "Fresh paint and lighting",
        "New flooring (vinyl/laminate)",
        "Standard toilet replacement"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      tier: "Premium", 
      price: "$15,000 - $25,000",
      description: "Mid-range materials with style",
      features: [
        "Custom vanity with storage",
        "Tile shower surround",
        "Quality fixtures and finishes",
        "Ceramic or porcelain tile flooring",
        "Recessed lighting and exhaust fan",
        "Medicine cabinet upgrade"
      ],
      color: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      tier: "Custom",
      price: "$25,000 - $40,000+",
      description: "Luxury finishes and custom features",
      features: [
        "Custom tile work and stone counters",
        "Walk-in shower with glass doors",
        "High-end fixtures and hardware",
        "Heated floors and towel warmers",
        "Custom storage solutions",
        "Premium lighting design",
        "Spa-like amenities"
      ],
      color: "from-amber-500 to-orange-500"
    }
  ],
  kitchen: [
    {
      tier: "Basic",
      price: "$15,000 - $25,000", 
      description: "Functional updates that make a difference",
      features: [
        "Cabinet painting or refacing",
        "New countertops (laminate/butcher block)",
        "Updated appliances (basic tier)",
        "New backsplash",
        "Fresh paint and lighting",
        "Hardware replacement"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      tier: "Premium",
      price: "$25,000 - $45,000",
      description: "Quality materials with modern appeal", 
      features: [
        "Semi-custom cabinets",
        "Quartz or granite countertops",
        "Mid-range appliance package",
        "Tile or stone backsplash",
        "Under-cabinet lighting",
        "Kitchen island or peninsula",
        "Upgraded plumbing fixtures"
      ],
      color: "from-indigo-500 to-purple-500",
      popular: true
    },
    {
      tier: "Custom",
      price: "$45,000 - $80,000+",
      description: "High-end finishes and custom design",
      features: [
        "Custom cabinetry with specialty storage",
        "Premium stone countertops",
        "High-end appliance suite",
        "Custom tile or stone work",
        "Professional lighting design",
        "Large kitchen island with seating",
        "Built-in storage solutions",
        "Premium hardware and fixtures"
      ],
      color: "from-red-500 to-pink-500"
    }
  ]
};

export const PricingGuide = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Pricing Guide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparent pricing for bathroom and kitchen remodels. Choose the tier that fits your budget and vision.
          </p>
        </div>

        {/* Bathroom Pricing */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Bathroom Remodeling
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.bathroom.map((tier, index) => (
              <Card key={index} className={`relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${tier.popular ? 'border-primary scale-105' : 'border-border'}`}>
                {tier.popular && (
                  <div className="absolute top-0 right-0">
                    <Badge className="rounded-none rounded-bl-lg bg-primary">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${tier.color} mx-auto mb-4 flex items-center justify-center`}>
                    <span className="text-white font-bold text-xl">{tier.tier[0]}</span>
                  </div>
                  <CardTitle className="text-2xl font-bold">{tier.tier}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">
                    {tier.price}
                  </CardDescription>
                  <p className="text-muted-foreground">{tier.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Kitchen Pricing */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Kitchen Remodeling
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.kitchen.map((tier, index) => (
              <Card key={index} className={`relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${tier.popular ? 'border-primary scale-105' : 'border-border'}`}>
                {tier.popular && (
                  <div className="absolute top-0 right-0">
                    <Badge className="rounded-none rounded-bl-lg bg-primary">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${tier.color} mx-auto mb-4 flex items-center justify-center`}>
                    <span className="text-white font-bold text-xl">{tier.tier[0]}</span>
                  </div>
                  <CardTitle className="text-2xl font-bold">{tier.tier}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">
                    {tier.price}
                  </CardDescription>
                  <p className="text-muted-foreground">{tier.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground text-lg">
            *Prices may vary based on project scope, materials, and local market conditions. Contact us for a detailed estimate.
          </p>
        </div>
      </div>
    </section>
  );
};