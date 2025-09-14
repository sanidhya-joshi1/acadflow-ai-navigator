import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="text-center max-w-lg mx-auto p-8">
        <div className="w-20 h-20 mx-auto mb-6 hero-gradient rounded-2xl flex items-center justify-center">
          <span className="text-4xl font-bold text-white">404</span>
        </div>
        <h1 className="mb-4 text-3xl font-bold">Oops! Page not found</h1>
        <p className="mb-8 text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 rounded-lg hero-gradient hover-glow text-white font-medium transition-smooth"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
