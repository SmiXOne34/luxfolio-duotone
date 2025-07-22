import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, MapPin, Bed, Bath, Square } from "lucide-react";
import heroVilla from "@/assets/hero-villa.jpg";
import luxuryInterior from "@/assets/luxury-interior.jpg";
import waterfrontMansion from "@/assets/waterfront-mansion.jpg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroVilla,
      title: "Luxury Villa with Infinity Pool",
      subtitle: "Experience the pinnacle of luxury living",
      price: "$2,750,000",
    },
    {
      image: luxuryInterior,
      title: "Premium Penthouse Suite",
      subtitle: "Sophisticated urban living at its finest",
      price: "$3,200,000",
    },
    {
      image: waterfrontMansion,
      title: "Waterfront Mansion",
      subtitle: "Exclusive waterfront property with private dock",
      price: "$4,850,000",
    },
  ];

  const featuredProperties = [
    {
      id: 1,
      image: heroVilla,
      title: "Modern Luxury Villa",
      location: "Beverly Hills, CA",
      price: "$2,750,000",
      beds: 5,
      baths: 4,
      sqft: "4,200",
    },
    {
      id: 2,
      image: luxuryInterior,
      title: "Premium Penthouse",
      location: "Manhattan, NY",
      price: "$3,200,000",
      beds: 3,
      baths: 3,
      sqft: "2,800",
    },
    {
      id: 3,
      image: waterfrontMansion,
      title: "Waterfront Estate",
      location: "Miami, FL",
      price: "$4,850,000",
      beds: 6,
      baths: 5,
      sqft: "6,500",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Property Investor",
      content: "LuxEstate helped me find the perfect investment property. Their attention to detail and market knowledge is unmatched.",
    },
    {
      name: "Michael Chen",
      role: "Home Buyer",
      content: "The team at LuxEstate made my dream home purchase seamless. Professional, knowledgeable, and truly caring.",
    },
    {
      name: "Emma Williams",
      role: "Luxury Home Owner",
      content: "Exceptional service from start to finish. They understood exactly what I was looking for in a luxury property.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
        
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-4 animate-fade-in">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {slides[currentSlide].subtitle}
            </p>
            <div className="text-3xl font-bold text-luxury-gold mb-8">
              {slides[currentSlide].price}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-luxury-gold text-luxury-navy hover:bg-luxury-gold-light">
                View Property
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-luxury-navy">
                Schedule Tour
              </Button>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-luxury-gold" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Featured Properties
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our hand-picked selection of the finest luxury properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <Card key={property.id} className="group hover:shadow-luxury transition-all duration-300 hover-scale">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-luxury-gold text-luxury-navy px-3 py-1 rounded-full font-bold text-sm">
                    {property.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-bold mb-2">
                    {property.title}
                  </h3>
                  <p className="text-muted-foreground flex items-center mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    {property.location}
                  </p>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      {property.beds} Beds
                    </span>
                    <span className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      {property.baths} Baths
                    </span>
                    <span className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      {property.sqft} sq ft
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <p className="text-gray-100 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <h4 className="font-bold text-luxury-gold mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-200">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our expert team help you discover the perfect luxury property
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-luxury-gold text-luxury-navy hover:bg-luxury-gold-light">
              View All Properties
            </Button>
            <Button size="lg" variant="outline">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;