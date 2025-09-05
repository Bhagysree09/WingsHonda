import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Models", path: "/models" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-gradient-subtle border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/fc46f761-701d-479a-b1cb-7cad8505a70a.png" 
                alt="Wings Honda Logo" 
                className="h-10 w-10"
              />
              <div>
                <h3 className="text-lg font-bold text-foreground">Wings Honda</h3>
                <p className="text-sm text-muted-foreground">Accelerate Automotives Pvt. Ltd.</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Your trusted Honda two-wheeler dealer committed to delivering excellence in sales, 
              service, and customer satisfaction. Authorized partner bringing you genuine Honda 
              motorcycles and scooters with world-class service.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Plot No. 2, Shiva Garden, Hoskote,<br />
                  Bengaluru Rural, Karnataka – 562114
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:service.wingshonda@gmail.com" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  service.wingshonda@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:8880368282" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  8880368282
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Honda Two-Wheeler Sales</li>
              <li>Service Center</li>
              <li>Genuine Spare Parts</li>
              <li>Customer Care</li>
              <li>Test Ride Booking</li>
              <li>Insurance Assistance</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © COPYRIGHT 2025 WINGS HONDA - ALL RIGHTS RESERVED.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;