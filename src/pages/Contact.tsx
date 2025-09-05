import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MapPin, Phone, Mail, Clock, Calendar, MessageCircle, Navigation } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Showroom",
      details: "Plot No. 2, Shiva Garden, Hoskote, AHMEDABAD, GUJARAT,Pin-382481 – 562114",
      action: "Get Directions",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "8880368282",
      action: "Call Now",
      actionType: "tel",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "service.wingshonda@gmail.com",
      action: "Send Email",
      actionType: "mailto",
    },
  ];

  const businessHours = [
    { day: "Monday - Saturday", hours: "9:00 AM - 7:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 6:00 PM" },
    { day: "Public Holidays", hours: "10:00 AM - 5:00 PM" },
  ];

  const services = [
    "New Vehicle Purchase Inquiry",
    "Service Appointment Booking",
    "Spare Parts Inquiry", 
    "Insurance & Documentation",
    "Test Ride Booking",
    "General Support"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-display font-bold mb-6">
              Get in Touch with Wings Honda
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              We're here to help with all your Honda needs. Visit our showroom, call us, 
              or reach out online for expert assistance and personalized service.
            </p>
            <Button variant="cta" size="hero">
              Book Appointment
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="text-center shadow-card hover:shadow-honda transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardHeader>
                  <info.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl text-foreground">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {info.details}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    asChild
                  >
                    <a 
                      href={
                        info.actionType === "tel" ? `tel:${info.details}` :
                        info.actionType === "mailto" ? `mailto:${info.details}` :
                        "#"
                      }
                    >
                      {info.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground mb-2">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                      <Input 
                        id="name" 
                        placeholder="Enter your full name" 
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="Enter your phone number" 
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-foreground">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email address" 
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-foreground">Service Required *</Label>
                    <select 
                      id="service"
                      className="w-full mt-1 p-3 border border-border rounded-lg bg-background text-foreground"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your requirements..." 
                      className="mt-1 min-h-[120px]"
                    />
                  </div>

                  <Button variant="default" size="lg" className="w-full">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Business Info */}
            <div className="space-y-6 animate-slide-in-right">
              {/* Business Hours */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Clock className="mr-3 h-6 w-6 text-primary" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-muted-foreground">{schedule.day}</span>
                        <span className="font-medium text-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Navigation className="mr-3 h-6 w-6 text-primary" />
                    Find Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-subtle rounded-lg p-8 text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold text-foreground mb-2">Wings Honda Showroom</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Plot No. 2, Shiva Garden, Hoskote<br />
                      AHMEDABAD, GUJARAT,Pin-382481 – 562114
                    </p>
                    <Button variant="outline" size="sm">
                      Open in Google Maps
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Calendar className="mr-3 h-6 w-6 text-primary" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="default" size="sm" className="w-full">
                    Schedule Test Ride
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    Book Service Appointment
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    Request Price Quote
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gradient-honda text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-fade-in-up">
            <h2 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h2>
            <p className="text-white/90 mb-6">
              For urgent Honda service needs or breakdown assistance, our emergency support is available 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" asChild>
                <a href="tel:8880368282">
                  <Phone className="mr-2 h-5 w-5" />
                  Emergency: 8880368282
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                WhatsApp Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Info */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Multiple Ways to Reach Us
            </h3>
            <p className="text-muted-foreground">
              Choose the most convenient way to connect with our Honda experts
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { method: "Phone Call", availability: "9 AM - 7 PM", icon: Phone },
              { method: "Email", availability: "24/7 Response", icon: Mail },
              { method: "Showroom Visit", availability: "Walk-in Welcome", icon: MapPin },
              { method: "Online Form", availability: "Instant Submission", icon: MessageCircle },
            ].map((method, index) => (
              <div 
                key={index}
                className="text-center p-4 animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <method.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground text-sm">{method.method}</h4>
                <p className="text-xs text-muted-foreground">{method.availability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;