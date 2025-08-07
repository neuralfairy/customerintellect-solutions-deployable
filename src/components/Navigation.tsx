import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-bold text-gradient">CustomerIntellect</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/features') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/pricing') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/about') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              About
            </Link>
            <Link 
              to="/blog" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/blog') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/contact') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <a href="https://salescentri.com/get-started/free-trial?utm_source=customerintellect.com&utm_medium=header&utm_campaign=partner_network">
                Free Trial
              </a>
            </Button>
            <Button className="btn-hero" asChild>
              <a href="https://salescentri.com/get-started/book-demo?utm_source=customerintellect.com&utm_medium=header&utm_campaign=partner_network">
                Book Demo
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/features" 
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="/pricing" 
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/about" 
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/blog" 
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" asChild>
                  <a href="https://salescentri.com/get-started/free-trial?utm_source=customerintellect.com&utm_medium=mobile&utm_campaign=partner_network">
                    Free Trial
                  </a>
                </Button>
                <Button className="btn-hero" asChild>
                  <a href="https://salescentri.com/get-started/book-demo?utm_source=customerintellect.com&utm_medium=mobile&utm_campaign=partner_network">
                    Book Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;