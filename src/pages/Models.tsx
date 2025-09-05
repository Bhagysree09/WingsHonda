import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Fuel, Zap, Star, IndianRupee } from "lucide-react";
import motorcycles from "@/assets/honda-motorcycles.jpg";
import scooters from "@/assets/honda-scooters.jpg";

const Models = () => {
  const motorcycles_data = [
    {
      name: "Honda CB Shine",
      category: "Commuter",
      price: "₹78,000 - ₹82,000",
      features: ["125cc Engine", "BS6 Compliant", "Combi-Brake System"],
      highlight: "Best Seller",
    },
    {
      name: "Honda Unicorn",
      category: "Premium Commuter", 
      price: "₹1,05,000 - ₹1,10,000",
      features: ["150cc Engine", "LED Headlamp", "Digital Meter"],
      highlight: "Premium Choice",
    },
    {
      name: "Honda CBR150R",
      category: "Sports",
      price: "₹1,70,000 - ₹1,75,000", 
      features: ["149cc Engine", "Racing Style", "ABS Available"],
      highlight: "Sports Performance",
    },
    {
      name: "Honda CB350RS",
      category: "Retro Sports",
      price: "₹2,15,000 - ₹2,25,000",
      features: ["348cc Engine", "Retro Styling", "Digital Console"],
      highlight: "New Launch",
    },
  ];

  const scooters_data = [
    {
      name: "Honda Activa 6G",
      category: "Automatic Scooter",
      price: "₹75,000 - ₹80,000",
      features: ["109cc Engine", "LED Headlamp", "Mobile Charging Port"],
      highlight: "India's Favorite",
    },
    {
      name: "Honda Dio",
      category: "Sporty Scooter",
      price: "₹72,000 - ₹77,000",
      features: ["109cc Engine", "Sporty Design", "Combi-Brake"],
      highlight: "Youth Choice",
    },
    {
      name: "Honda Grazia",
      category: "Premium Scooter",
      price: "₹85,000 - ₹90,000",
      features: ["124cc Engine", "LED Setup", "Smart Key"],
      highlight: "Feature Rich",
    },
    {
      name: "Honda PCX 160",
      category: "Maxi Scooter",
      price: "₹1,20,000 - ₹1,25,000",
      features: ["156cc Engine", "Premium Features", "Large Storage"],
      highlight: "Premium Segment",
    },
  ];

  const ModelCard = ({ model, index }: { model: any; index: number }) => (
    <Card 
      className="shadow-card hover:shadow-honda transition-all duration-300 hover:scale-105 animate-fade-in-up"
      style={{animationDelay: `${index * 0.1}s`}}
    >
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary" className="mb-2">{model.category}</Badge>
          <Badge variant="default" className="bg-primary text-white">{model.highlight}</Badge>
        </div>
        <CardTitle className="text-xl text-foreground">{model.name}</CardTitle>
        <div className="flex items-center text-2xl font-bold text-primary">
          <IndianRupee className="h-5 w-5" />
          <span className="text-lg">{model.price}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mb-6">
          {model.features.map((feature: string, idx: number) => (
            <div key={idx} className="flex items-center text-sm text-muted-foreground">
              <Star className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
              {feature}
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button variant="default" size="sm" className="flex-1">
            Book Test Ride
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            Get Quote
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-display font-bold mb-6">
              Explore Honda Two-Wheeler Range
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Discover our complete collection of Honda motorcycles and scooters. From efficient 
              commuters to premium sport bikes, find the perfect Honda for your lifestyle.
            </p>
            <Button variant="cta" size="hero">
              Schedule Test Ride
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Categories */}
      <section className="py-12 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Scooters", icon: Zap, count: "4+" },
              { name: "Motorcycles", icon: Fuel, count: "8+" },
              { name: "Commuter", icon: Star, count: "6+" },
              { name: "Premium", icon: ArrowRight, count: "3+" },
            ].map((category, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-card hover:shadow-honda transition-all duration-300 animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <category.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-foreground">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} Models</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motorcycles Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-display font-bold text-foreground mb-4">Honda Motorcycles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the power, performance, and reliability of Honda motorcycles designed for every rider.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {motorcycles_data.map((model, index) => (
              <ModelCard key={index} model={model} index={index} />
            ))}
          </div>

          <div className="text-center">
            <div className="inline-block p-8 bg-gradient-subtle rounded-2xl shadow-elegant animate-fade-in-up">
              <img 
                src={motorcycles} 
                alt="Honda Motorcycles Collection" 
                className="rounded-xl mb-4 w-full max-w-2xl mx-auto"
              />
              <Button variant="default" size="lg" className="mb-2">
                View All Motorcycles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Scooters Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-display font-bold text-foreground mb-4">Honda Scooters</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Convenient, stylish, and efficient Honda scooters perfect for urban commuting and daily rides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {scooters_data.map((model, index) => (
              <ModelCard key={index} model={model} index={index} />
            ))}
          </div>

          <div className="text-center">
            <div className="inline-block p-8 bg-white rounded-2xl shadow-elegant animate-fade-in-up">
              <img 
                src={scooters} 
                alt="Honda Scooters Collection" 
                className="rounded-xl mb-4 w-full max-w-2xl mx-auto"
              />
              <Button variant="default" size="lg" className="mb-2">
                View All Scooters
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-display font-bold text-foreground mb-4">Easy Financing Options</h2>
            <p className="text-lg text-muted-foreground">
              Make your Honda dream come true with our flexible financing solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Low Down Payment",
                description: "Start from just ₹5,000 down payment",
                highlight: "Popular",
              },
              {
                title: "Easy EMIs",
                description: "EMIs starting from ₹2,500/month",
                highlight: "Affordable",
              },
              {
                title: "Quick Approval",
                description: "Get approval in just 30 minutes",
                highlight: "Fast",
              },
            ].map((option, index) => (
              <Card 
                key={index}
                className="text-center shadow-card hover:shadow-honda transition-all duration-300 animate-fade-in-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardHeader>
                  <Badge variant="default" className="self-center mb-2">{option.highlight}</Badge>
                  <CardTitle className="text-foreground">{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{option.description}</p>
                  <Button variant="outline" size="sm">Learn More</Button>
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
              Ready to Own Your Honda?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Visit our showroom for a test ride or get personalized recommendations from our experts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="hero">
                Book Test Ride Today
              </Button>
              <Button variant="outline" size="hero" className="text-white border-white hover:bg-white hover:text-primary">
                Get Expert Advice
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Models;