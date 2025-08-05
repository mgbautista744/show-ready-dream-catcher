import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Send, Clock, DollarSign, Home } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  address: z.string().min(5, "Please enter your property address"),
  projectType: z.string().min(1, "Please select a project type"),
  timeline: z.string().min(1, "Please select your timeline"),
  budget: z.string().min(1, "Please select your budget range"),
  message: z.string().min(10, "Please provide more details about your project"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      projectType: "",
      timeline: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      console.log("Form submission:", data);
      
      // Here you would integrate with your backend/email service
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Request Submitted Successfully! 🎉",
        description: "We'll contact you within 24 hours to schedule your free consultation.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or call us directly at 650-296-2564",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            📋 Get Your Free Project Estimate
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tell us about your project and we'll provide a detailed estimate with no obligations. 
            Free consultation included!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl border-0 bg-gradient-to-br from-card to-card/80">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-foreground">
                Project Information Form
              </CardTitle>
              <p className="text-muted-foreground">
                Complete the form below and we'll get back to you within 24 hours
              </p>
            </CardHeader>
            
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-medium">Full Name *</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="John Smith" className="h-12" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-medium">Email Address *</FormLabel>
                          <FormControl>
                            <Input {...field} type="email" placeholder="john@example.com" className="h-12" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-medium">Phone Number *</FormLabel>
                          <FormControl>
                            <Input {...field} type="tel" placeholder="(650) 123-4567" className="h-12" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-medium flex items-center gap-2">
                            <Home className="w-4 h-4" />
                            Property Address *
                          </FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="123 Main St, San Mateo, CA" className="h-12" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-medium">Project Type *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12">
                                <SelectValue placeholder="Select project type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="kitchen">Kitchen Updates</SelectItem>
                              <SelectItem value="bathroom">Bathroom Refresh</SelectItem>
                              <SelectItem value="exterior">Exterior Touch-ups</SelectItem>
                              <SelectItem value="painting">Interior/Exterior Painting</SelectItem>
                              <SelectItem value="flooring">Flooring Installation</SelectItem>
                              <SelectItem value="electrical">Electrical Work</SelectItem>
                              <SelectItem value="plumbing">Plumbing Repairs</SelectItem>
                              <SelectItem value="general">General Handyman Services</SelectItem>
                              <SelectItem value="other">Other (specify in message)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="timeline"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-medium flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            Timeline *
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12">
                                <SelectValue placeholder="When do you need this done?" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="asap">ASAP (Emergency)</SelectItem>
                              <SelectItem value="2weeks">Within 2 weeks</SelectItem>
                              <SelectItem value="1month">Within a month</SelectItem>
                              <SelectItem value="2months">Within 2 months</SelectItem>
                              <SelectItem value="planning">Planning ahead</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          Budget Range *
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="Select your budget range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="under500">Under $500</SelectItem>
                            <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                            <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                            <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                            <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                            <SelectItem value="over10000">Over $10,000</SelectItem>
                            <SelectItem value="not-sure">Not sure / Need estimate</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium">Project Details *</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Please describe your project in detail. Include specific requirements, materials preferences, or any special considerations..."
                            className="min-h-[120px] resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="pt-6">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full h-14 text-lg font-semibold bg-gradient-primary hover:opacity-90 transition-all duration-300"
                    >
                      {isSubmitting ? (
                        "Submitting Request..."
                      ) : (
                        <>
                          Submit Free Estimate Request
                          <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                    
                    <p className="text-center text-sm text-muted-foreground mt-4">
                      🔒 Your information is secure and will only be used to provide your estimate.
                      <br />
                      We'll never share your details with third parties.
                    </p>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}