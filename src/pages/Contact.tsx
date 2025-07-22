import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      description: "Available Monday - Sunday, 8AM - 8PM"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@luxestate.com", "sales@luxestate.com"],
      description: "We typically respond within 2-4 hours"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["123 Luxury Avenue", "Beverly Hills, CA 90210"],
      description: "Visit our showroom by appointment"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Monday - Friday: 8AM - 8PM", "Saturday - Sunday: 9AM - 6PM"],
      description: "Extended hours for client appointments"
    },
  ];

  const offices = [
    {
      city: "Beverly Hills",
      address: "123 Luxury Avenue, Beverly Hills, CA 90210",
      phone: "+1 (555) 123-4567",
      manager: "Alexandra Sterling"
    },
    {
      city: "Manhattan",
      address: "456 Park Avenue, New York, NY 10022",
      phone: "+1 (555) 987-6543",
      manager: "Michael Harrison"
    },
    {
      city: "Miami",
      address: "789 Ocean Drive, Miami Beach, FL 33139",
      phone: "+1 (555) 456-7890",
      manager: "Sophia Chen"
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              Ready to find your dream luxury property? Get in touch with our expert team
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-luxury">
              <CardContent className="p-8">
                <h2 className="font-playfair text-3xl font-bold mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Select value={formData.subject} onValueChange={handleSelectChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="buying">Buying Property</SelectItem>
                          <SelectItem value="selling">Selling Property</SelectItem>
                          <SelectItem value="investment">Investment Opportunities</SelectItem>
                          <SelectItem value="consultation">Schedule Consultation</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your real estate needs..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-luxury-gold text-luxury-navy hover:bg-luxury-gold-light"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-playfair text-3xl font-bold mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our team of luxury real estate experts is here to help you every step of the way. 
                  Whether you're buying, selling, or investing, we're committed to providing 
                  exceptional service and results.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-luxury transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-luxury-navy" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="font-medium text-foreground mb-1">
                              {detail}
                            </p>
                          ))}
                          <p className="text-sm text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Our Office Locations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Visit us at any of our luxury offices for personalized service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="text-center hover:shadow-luxury transition-all duration-300 hover-scale">
                <CardContent className="p-8">
                  <h3 className="font-playfair text-2xl font-bold mb-4 text-luxury-gold">
                    {office.city}
                  </h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p className="flex items-start justify-center">
                      <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-left">{office.address}</span>
                    </p>
                    <p className="flex items-center justify-center">
                      <Phone className="h-4 w-4 mr-2" />
                      {office.phone}
                    </p>
                    <p className="font-medium text-foreground">
                      Office Manager: {office.manager}
                    </p>
                  </div>
                  <Button 
                    className="mt-6 bg-luxury-gold text-luxury-navy hover:bg-luxury-gold-light"
                    size="sm"
                  >
                    Schedule Visit
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold mb-6">
              Find Us on the Map
            </h2>
            <p className="text-xl text-muted-foreground">
              Conveniently located in the heart of luxury districts
            </p>
          </div>
          
          {/* Placeholder for map - In a real application, you would integrate with Google Maps or similar */}
          <Card className="shadow-luxury">
            <CardContent className="p-0">
              <div className="w-full h-96 bg-gradient-to-r from-luxury-navy to-luxury-navy-light rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="h-16 w-16 mx-auto mb-4 text-luxury-gold" />
                  <h3 className="text-2xl font-bold mb-2">Interactive Map</h3>
                  <p className="text-gray-200">
                    Map integration would be implemented here
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Don't wait to make your luxury real estate dreams a reality. Contact us today 
            for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-luxury-gold text-luxury-navy hover:bg-luxury-gold-light">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-luxury-navy">
              Browse Properties
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;