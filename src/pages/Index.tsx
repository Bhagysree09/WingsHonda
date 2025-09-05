import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Phone, Mail, MapPin, Wrench, ShoppingCart, Shield, Users, ArrowRight, Star, Award, Clock } from "lucide-react";
import heroBg from "@/assets/honda-hero-bg.jpg";

const Index = () => {
  const highlights = [
    {
      icon: ShoppingCart,
      title: "Honda Two-Wheeler Sales",
      description: "Complete range of Honda motorcycles and scooters with competitive pricing and financing options.",
    },
    {
      icon: Wrench,
      title: "Service Center",
      description: "World-class service with genuine Honda parts and certified technicians for optimal performance.",
    },
    {
      icon: Shield,
      title: "Genuine Parts",
      description: "100% authentic Honda spare parts ensuring reliability, durability, and warranty coverage.",
    },
    {
      icon: Users,
      title: "Customer Care",
      description: "Personalized assistance and support for all your Honda two-wheeler needs and requirements.",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      rating: 5,
      comment: "Excellent service and genuine Honda parts. The team is very professional and helpful.",
    },
    {
      name: "Priya Sharma",
      rating: 5,
      comment: "Best Honda dealer in Hoskote. Quick service and transparent pricing. Highly recommended!",
    },
    {
      name: "Vikram Singh",
      rating: 5,
      comment: "Amazing experience buying my Honda Activa. The staff explained everything clearly.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-hero font-bold mb-6 leading-tight">
              Ride with Confidence,<br />
              <span className="text-primary-light">Powered by Honda</span>
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Your trusted Honda dealership in Hoskote, Bengaluru. Experience the joy of riding with 
              genuine Honda two-wheelers, world-class service, and unmatched customer care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-right">
              <Button variant="hero" size="hero" className="group">
                Book a Test Ride
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="cta" size="hero">
                Explore Models
              </Button>
              <Button variant="outline" size="hero" className="text-white border-white hover:bg-white hover:text-primary">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center animate-fade-in-up">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Authorized Dealer</h3>
              <p className="text-muted-foreground">Official Honda partner with certified credentials</p>
            </div>
            <div className="flex flex-col items-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <Star className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">5-Star Service</h3>
              <p className="text-muted-foreground">Rated excellent by hundreds of satisfied customers</p>
            </div>
            <div className="flex flex-col items-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <Clock className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Quick Service</h3>
              <p className="text-muted-foreground">Fast turnaround times for all service needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-display font-bold text-foreground mb-4">
              Why Choose Wings Honda?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experience excellence in every aspect of Honda ownership with our comprehensive 
              services and commitment to customer satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-honda transition-all duration-300 hover:scale-105 animate-fade-in-up border-border shadow-card"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <highlight.icon className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-honda text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-display font-bold mb-6">
              Ready to Experience Honda Excellence?
            </h2>
            <p className="text-lg mb-8 text-white/90 leading-relaxed">
              Visit our showroom in Hoskote or contact us today to explore our latest Honda 
              collection, book a test ride, or schedule a service appointment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="hero">
                Visit Showroom
              </Button>
              <Button variant="outline" size="hero" className="text-white border-white hover:bg-white hover:text-primary">
                Call Now: 8880368282
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-display font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real experiences from satisfied Honda owners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="shadow-card hover:shadow-honda transition-all duration-300 animate-fade-in-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.comment}"</p>
                  <p className="font-semibold text-foreground">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Quick Access */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4 p-6 rounded-lg bg-card shadow-card animate-fade-in-up">
              <MapPin className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Visit Us</h4>
                <p className="text-sm text-muted-foreground">B-702 PRATHNA PEARL, VANDEMATRAM CIRCLE</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-6 rounded-lg bg-card shadow-card animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <Phone className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                <p className="text-sm text-muted-foreground">8880368282</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-6 rounded-lg bg-card shadow-card animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <Mail className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                <p className="text-sm text-muted-foreground">service.wingshonda@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;