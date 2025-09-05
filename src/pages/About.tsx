import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Target, Eye, Handshake, Award, Users, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Handshake,
      title: "Transparency",
      description: "We believe in honest, clear communication and transparent business practices with every customer interaction.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Committed to delivering the highest standards in products, services, and customer experience.",
    },
    {
      icon: Users,
      title: "Long-Term Relationships",
      description: "Building lasting partnerships with customers through trust, reliability, and consistent service excellence.",
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "Embracing new technologies and innovative solutions to enhance the mobility experience for all customers.",
    },
  ];

  const stats = [
    { number: "10+", label: "Years of Excellence" },
    { number: "5000+", label: "Happy Customers" },
    { number: "100%", label: "Genuine Honda Parts" },
    { number: "24/7", label: "Customer Support" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-display font-bold mb-6">
              About Accelerate Automotives Pvt. Ltd.
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              A trusted name in the automobile industry, committed to delivering excellence in 
              sales, service, and customer satisfaction for over a decade.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-display font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Accelerate Automotives Private Limited is a trusted name in the automobile 
                  industry, committed to delivering excellence in sales, service, and customer 
                  satisfaction. With a passion for mobility solutions and a customer-first 
                  approach, we bring together innovation, reliability, and premium service 
                  standards to enhance every driving experience.
                </p>
                <p>
                  As an authorized partner of WINGS Honda, Accelerate Automotives Pvt. Ltd. 
                  proudly represents one of India's most respected two-wheeler brands. This 
                  partnership enables us to offer a complete range of Honda motorcycles and 
                  scooters, backed by world-class service, genuine parts, and personalized care.
                </p>
                <p>
                  With a focus on transparency, quality, and long-term customer relationships, 
                  Accelerate Automotives continues to drive trust and reliability in the 
                  automobile sector, ensuring every customer rides with confidence and pride.
                </p>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="bg-gradient-subtle p-8 rounded-2xl shadow-elegant">
                <h3 className="text-2xl font-bold text-foreground mb-6">Company Highlights</h3>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-white rounded-lg shadow-card">
                      <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-card hover:shadow-honda transition-all duration-300 animate-fade-in-up">
              <CardHeader className="text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl text-foreground">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional Honda two-wheeler solutions through transparency, 
                  quality service, and building long-term relationships with our customers. 
                  We strive to make every Honda ownership experience memorable and satisfying.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-honda transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <CardHeader className="text-center">
                <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl text-foreground">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and preferred Honda dealership in the region, 
                  known for enhancing every driving experience through innovation, 
                  reliability, and customer-centric service excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-display font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Accelerate Automotives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="text-center shadow-card hover:shadow-honda transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader>
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl text-foreground">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-gradient-honda text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-display font-bold mb-6">
              Authorized Honda Partner
            </h2>
            <p className="text-lg mb-8 text-white/90 leading-relaxed">
              Our partnership with Honda Two-Wheelers enables us to deliver authentic Honda 
              experiences with genuine products, certified services, and the trust that comes 
              with the Honda brand heritage.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span>Certified Dealership</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Trained Professionals</span>
              </div>
              <div className="flex items-center space-x-2">
                <Handshake className="h-5 w-5" />
                <span>Genuine Honda Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;