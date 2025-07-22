import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Grid, List, Search, MapPin, Bed, Bath, Square, Heart } from "lucide-react";
import heroVilla from "@/assets/hero-villa.jpg";
import luxuryInterior from "@/assets/luxury-interior.jpg";
import waterfrontMansion from "@/assets/waterfront-mansion.jpg";

const Listings = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState("all");
  const [propertyType, setPropertyType] = useState("all");

  const properties = [
    {
      id: 1,
      image: heroVilla,
      title: "Modern Luxury Villa",
      location: "Beverly Hills, CA",
      price: "$2,750,000",
      beds: 5,
      baths: 4,
      sqft: "4,200",
      type: "Villa",
      featured: true,
      description: "Stunning modern villa with infinity pool, panoramic views, and premium finishes throughout."
    },
    {
      id: 2,
      image: luxuryInterior,
      title: "Premium Penthouse Suite",
      location: "Manhattan, NY",
      price: "$3,200,000",
      beds: 3,
      baths: 3,
      sqft: "2,800",
      type: "Penthouse",
      featured: true,
      description: "Sophisticated penthouse with floor-to-ceiling windows and breathtaking city skyline views."
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
      type: "Mansion",
      featured: false,
      description: "Exclusive waterfront property with private dock, beach access, and resort-style amenities."
    },
    {
      id: 4,
      image: heroVilla,
      title: "Contemporary Villa",
      location: "Malibu, CA",
      price: "$3,950,000",
      beds: 4,
      baths: 4,
      sqft: "3,800",
      type: "Villa",
      featured: false,
      description: "Architectural masterpiece with ocean views, infinity pool, and sustainable design features."
    },
    {
      id: 5,
      image: luxuryInterior,
      title: "Luxury Townhouse",
      location: "San Francisco, CA",
      price: "$2,100,000",
      beds: 4,
      baths: 3,
      sqft: "3,200",
      type: "Townhouse",
      featured: true,
      description: "Elegant townhouse in prestigious neighborhood with modern amenities and classic charm."
    },
    {
      id: 6,
      image: waterfrontMansion,
      title: "Oceanfront Mansion",
      location: "The Hamptons, NY",
      price: "$6,200,000",
      beds: 7,
      baths: 6,
      sqft: "8,000",
      type: "Mansion",
      featured: false,
      description: "Sprawling oceanfront estate with private beach, tennis court, and guest house."
    },
  ];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = priceRange === "all" || 
                        (priceRange === "under-3m" && parseInt(property.price.replace(/[$,]/g, "")) < 3000000) ||
                        (priceRange === "3m-5m" && parseInt(property.price.replace(/[$,]/g, "")) >= 3000000 && parseInt(property.price.replace(/[$,]/g, "")) < 5000000) ||
                        (priceRange === "over-5m" && parseInt(property.price.replace(/[$,]/g, "")) >= 5000000);
    const matchesType = propertyType === "all" || property.type.toLowerCase() === propertyType.toLowerCase();
    
    return matchesSearch && matchesPrice && matchesType;
  });

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
              Luxury Listings
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Discover extraordinary properties in the most desirable locations
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search properties or locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4 flex-wrap">
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="under-3m">Under $3M</SelectItem>
                  <SelectItem value="3m-5m">$3M - $5M</SelectItem>
                  <SelectItem value="over-5m">Over $5M</SelectItem>
                </SelectContent>
              </Select>

              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="penthouse">Penthouse</SelectItem>
                  <SelectItem value="mansion">Mansion</SelectItem>
                  <SelectItem value="townhouse">Townhouse</SelectItem>
                </SelectContent>
              </Select>

              {/* View Toggle */}
              <div className="flex border rounded-lg overflow-hidden">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-none border-l"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4">
            <p className="text-muted-foreground">
              {filteredProperties.length} properties found
            </p>
          </div>
        </div>
      </section>

      {/* Properties Grid/List */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <Card key={property.id} className="group hover:shadow-luxury transition-all duration-300 hover-scale">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      {property.featured && (
                        <div className="bg-luxury-gold text-luxury-navy px-3 py-1 rounded-full font-bold text-xs">
                          FEATURED
                        </div>
                      )}
                    </div>
                    <div className="absolute top-4 right-4">
                      <Button size="sm" variant="ghost" className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-luxury-gold text-luxury-navy px-3 py-1 rounded-full font-bold">
                      {property.price}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-playfair text-xl font-bold mb-2">
                      {property.title}
                    </h3>
                    <p className="text-muted-foreground flex items-center mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      {property.location}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {property.description}
                    </p>
                    <div className="flex justify-between text-sm text-muted-foreground mb-4">
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
                    <Button className="w-full bg-luxury-gold text-luxury-navy hover:bg-luxury-gold-light">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProperties.map((property) => (
                <Card key={property.id} className="hover:shadow-luxury transition-all duration-300">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative md:w-1/3">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        {property.featured && (
                          <div className="bg-luxury-gold text-luxury-navy px-3 py-1 rounded-full font-bold text-xs">
                            FEATURED
                          </div>
                        )}
                      </div>
                    </div>
                    <CardContent className="md:w-2/3 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-playfair text-2xl font-bold mb-2">
                            {property.title}
                          </h3>
                          <p className="text-muted-foreground flex items-center mb-2">
                            <MapPin className="h-4 w-4 mr-1" />
                            {property.location}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-2xl font-bold text-luxury-gold">
                            {property.price}
                          </div>
                          <Button size="sm" variant="ghost" className="p-2">
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {property.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-6 text-sm text-muted-foreground">
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
                        <Button className="bg-luxury-gold text-luxury-navy hover:bg-luxury-gold-light">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Load More */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <Button size="lg" variant="outline">
            Load More Properties
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Listings;