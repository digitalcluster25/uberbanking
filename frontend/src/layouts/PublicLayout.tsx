import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface PublicLayoutProps {
  children: React.ReactNode;
}

export const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-primary">
              UberBanking
            </Link>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/banks" className="text-muted-foreground hover:text-primary transition-colors">
                Banks
              </Link>
              <Link to="/partners" className="text-muted-foreground hover:text-primary transition-colors">
                For Partners
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
            </div>
            
            {/* Auth Buttons */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link to="/register">Get Started</Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">UberBanking</h3>
              <p className="text-muted-foreground text-sm">
                Connect businesses with the right banking partners worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">For Businesses</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/banks" className="hover:text-primary">Find Banks</Link></li>
                <li><Link to="/register" className="hover:text-primary">Get Started</Link></li>
                <li><Link to="/pricing" className="hover:text-primary">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">For Banks</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/partners" className="hover:text-primary">Become a Partner</Link></li>
                <li><Link to="/partners/login" className="hover:text-primary">Partner Login</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/help" className="hover:text-primary">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-primary">Contact Us</Link></li>
                <li><Link to="/legal" className="hover:text-primary">Legal</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 UberBanking. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};