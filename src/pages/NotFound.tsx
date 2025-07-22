import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background pt-16">
      <div className="text-center">
        <h1 className="font-playfair text-6xl font-bold mb-4 text-luxury-gold">404</h1>
        <p className="text-2xl text-muted-foreground mb-8">Oops! Page not found</p>
        <p className="text-lg text-muted-foreground mb-8">
          The luxury property you're looking for doesn't exist at this location.
        </p>
        <Link to="/">
          <Button size="lg" className="bg-luxury-gold text-luxury-navy hover:bg-luxury-gold-light">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
