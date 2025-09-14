import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { GraduationCap } from "lucide-react";

export function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  if (!isHomePage) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover-lift">
            <div className="p-2 rounded-lg hero-gradient">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">AcadFlow</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth">
              Features
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-smooth">
              Contact
            </a>
            <Link to="/login" className="text-muted-foreground hover:text-foreground transition-smooth">
              Login
            </Link>
            <Link to="/signup">
              <Button variant="outline" className="hover-glow">
                Sign Up
              </Button>
            </Link>
            <ThemeToggle />
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Link to="/login">
              <Button variant="ghost" size="sm">Login</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}