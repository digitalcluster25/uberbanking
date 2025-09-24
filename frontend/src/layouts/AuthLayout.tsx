import React from 'react';
import { Link } from 'react-router-dom';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Left side - Brand */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary text-primary-foreground p-12 flex-col justify-between">
        <div>
          <Link to="/" className="text-3xl font-bold">
            UberBanking
          </Link>
          <p className="mt-4 text-xl opacity-90">
            Connect your business with the right banking partners worldwide
          </p>
        </div>
        
        <div>
          <blockquote className="text-lg italic">
            "UberBanking helped us find the perfect banking solution for our e-commerce business in just 5 days."
          </blockquote>
          <p className="mt-2 text-sm opacity-75">
            — Sarah Johnson, CEO of TechFlow Solutions
          </p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile logo */}
          <div className="lg:hidden text-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              UberBanking
            </Link>
          </div>

          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold">{title}</h1>
            {subtitle && (
              <p className="text-muted-foreground mt-2">{subtitle}</p>
            )}
          </div>

          {/* Form content */}
          <div className="space-y-6">
            {children}
          </div>

          {/* Back to home */}
          <div className="text-center">
            <Link 
              to="/" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};