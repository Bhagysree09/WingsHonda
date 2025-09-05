import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  ShoppingCart, 
  Wrench, 
  Shield, 
  Users, 
  Clock, 
  Award, 
  CheckCircle, 
  Phone,
  Calendar,
  CreditCard,
  FileText
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: ShoppingCart,
      title: "Honda Two-Wheeler Sales",
      description: "Complete range of Honda motorcycles and scooters with competitive pricing and financing options.",
      features: [
        "Latest Honda Model Lineup",
        "Competitive Pricing",
        "Easy Financing Options",
        "Exchange Program Available",
        "Genuine Honda Accessories"
      ],
      highlight: "New Arrivals",
    },
    {
      icon: Wrench,
      title: "Service Center",
      description: "World-class service with genuine Honda parts and certified technicians for optimal performance.",
      features: [
        "Certified Honda Technicians",
        "Advanced Diagnostic Equipment", 
        "Quick Service Options",
        "Pickup & Drop Facility",
        "Service Warranty"
      ],
      highlight: "Expert Care",
    },
    {
      icon: Shield,
      title: "Genuine Spare Parts",
      description: "100% authentic Honda spare parts ensuring reliability, durability, and warranty coverage.",
      features: [
        "100% Genuine Honda Parts",
        "Competitive Pricing",
        "Quick Availability",
        "Parts Warranty",
        "Installation Service"
      ],
      highlight: "Authentic Parts",
    },
    {
      icon: Users,
      title: "Customer Care",
      description: "Personalized assistance and support for all your Honda two-wheeler needs and requirements.",
      features: [
        "24/7 Customer Support",
        "Expert Consultation",
        "After-Sales Service",
        "Maintenance Reminders",
        "Insurance Assistance"
      ],
      highlight: "Always Here",
    },
  ];

  const additionalServices = [
    { icon: Calendar, name: "Service Booking", description: "Online & phone booking available" },
    { icon: CreditCard, name: "Easy Payments", description: "Multiple payment options accepted" },
    { icon: FileText, name: "Documentation", description: "Complete paperwork assistance" },
    { icon: Phone, name: "Emergency Support", description: "24/7 breakdown assistance" },
  ];

  const servicePackages = [
    {
      name: "Basic Service",
      price: "₹800 - ₹1,200",
      duration: "2-3 hours",
      includes: ["Engine oil change", "Air filter cleaning", "Basic inspection", "Performance check"],
    },
    {
      name: "Comprehensive Service",
      price: "₹1,500 - ₹2,500",
      duration: "4-6 hours", 
      includes: ["Complete engine service", "Brake system check", "Electrical inspection", "Road test"],
      popular: true,
    },
    {
      name: "Premium Service",
      price: "₹2,500 - ₹4,000",
      duration: "Full day",
      includes: ["Complete overhaul", "Parts replacement", "Performance tuning", "Warranty coverage"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-display font-bold mb-6">
              Complete Honda Service Solutions
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              From sales to service, parts to customer care - we provide comprehensive Honda 
              solutions under one roof with certified expertise and genuine care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="hero">
                Book Service Now
              </Button>
              <Button variant="outline" size="hero" className="text-white border-white hover:bg-white hover:text-primary">
                Call: 8880368282
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-12 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Clock, label: "Quick Service", value: "Same Day" },
              { icon: Award, label: "Certified", value: "Honda Experts" },
              { icon: Shield, label: "Warranty", value: "Guaranteed" },
              { icon: CheckCircle, label: "Genuine Parts", value: "100% Honda" },
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-card hover:shadow-honda transition-all duration-300 animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <item.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-semibold text-foreground">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-display font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional Honda services delivered by certified experts with genuine parts and transparent pricing
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card 
                key={index}
                className="shadow-card hover:shadow-honda transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <service.icon className="h-12 w-12 text-primary" />
                    <Badge variant="default">{service.highlight}</Badge>
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-display font-bold text-foreground mb-4">Service Packages</h2>
            <p className="text-lg text-muted-foreground">
              Choose the perfect service package for your Honda's maintenance needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicePackages.map((pkg, index) => (
              <Card 
                key={index}
                className={`shadow-card hover:shadow-honda transition-all duration-300 animate-fade-in-up relative ${
                  pkg.popular ? 'border-primary shadow-honda' : ''
                }`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {pkg.popular && (
                  <Badge 
                    variant="default" 
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary"
                  >
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-foreground">{pkg.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                  <p className="text-sm text-muted-foreground">Duration: {pkg.duration}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {pkg.includes.map((item, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant={pkg.popular ? "default" : "outline"} 
                    size="sm" 
                    className="w-full"
                  >
                    Select Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-display font-bold text-foreground mb-4">Additional Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive support services for your convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card 
                key={index}
                className="text-center shadow-card hover:shadow-honda transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader>
                  <service.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg text-foreground">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-display font-bold text-foreground mb-4">Our Service Process</h2>
            <p className="text-lg text-muted-foreground">
              Simple, transparent, and efficient service workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Book Appointment", description: "Schedule online or call us" },
              { step: "02", title: "Vehicle Inspection", description: "Comprehensive diagnostic check" },
              { step: "03", title: "Service Execution", description: "Expert service with genuine parts" },
              { step: "04", title: "Quality Check", description: "Final inspection and delivery" },
            ].map((process, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-honda text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-display font-bold mb-6">
              Experience Honda Service Excellence
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Book your service appointment today and experience the Honda standard of excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="hero">
                Book Service Appointment
              </Button>
              <Button variant="outline" size="hero" className="text-white border-white hover:bg-white hover:text-primary">
                Emergency Service: 8880368282
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;