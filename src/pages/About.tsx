import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, TrendingUp, Heart } from "lucide-react";
import agentImage from "@/assets/agent-1.jpg";

const About = () => {
  const stats = [
    { label: "Years of Experience", value: "25+" },
    { label: "Properties Sold", value: "2,500+" },
    { label: "Happy Clients", value: "10,000+" },
    { label: "Market Value", value: "$5B+" },
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in every aspect of our service, ensuring exceptional results for our clients.",
    },
    {
      icon: Users,
      title: "Integrity",
      description: "Trust and transparency form the foundation of every relationship we build with our valued clients.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We leverage cutting-edge technology and market insights to deliver superior real estate solutions.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our genuine love for luxury real estate drives us to go above and beyond for every client.",
    },
  ];

  const team = [
    {
      name: "Alexandra Sterling",
      role: "Founder & CEO",
      image: agentImage,
      bio: "25+ years in luxury real estate with over $2B in career sales.",
    },
    {
      name: "Michael Harrison",
      role: "Senior Partner",
      image: agentImage,
      bio: "Expert in high-end residential and commercial properties.",
    },
    {
      name: "Sophia Chen",
      role: "Lead Agent",
      image: agentImage,
      bio: "Specialist in waterfront and architectural properties.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
              About LuxEstate
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Where luxury meets expertise in the world of premium real estate
            </p>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              For over two decades, LuxEstate has been the premier destination for luxury real estate. 
              We specialize in connecting discerning clients with extraordinary properties that define 
              sophisticated living.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl md:text-5xl font-bold text-luxury-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
                Our Story
              </h2>
              <p className="text-xl text-muted-foreground">
                A legacy of excellence in luxury real estate
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg leading-relaxed mb-6">
                Founded in 1998, LuxEstate began with a simple yet ambitious vision: to redefine 
                the luxury real estate experience. What started as a boutique firm has evolved into 
                a globally recognized brand, synonymous with excellence, integrity, and innovation.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our journey has been marked by countless success stories, from helping first-time 
                luxury buyers find their perfect home to assisting seasoned investors in building 
                their portfolios. We've weathered market changes, adapted to new technologies, and 
                consistently delivered results that exceed expectations.
              </p>
              <p className="text-lg leading-relaxed">
                Today, LuxEstate stands as a testament to the power of unwavering commitment to 
                our clients and an unrelenting pursuit of excellence in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-luxury transition-all duration-300 hover-scale">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-luxury-navy" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-luxury transition-all duration-300 hover-scale">
                <CardContent className="p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-playfair text-xl font-bold mb-2">
                    {member.name}
                  </h3>
                  <p className="text-luxury-gold font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Experience the LuxEstate difference. Let's make your real estate dreams a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-luxury-gold text-luxury-navy hover:bg-luxury-gold-light">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-luxury-navy">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;