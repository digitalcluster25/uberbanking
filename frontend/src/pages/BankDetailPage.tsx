import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Star, 
  MapPin, 
  CreditCard, 
  Clock, 
  Building2, 
  Globe, 
  Shield, 
  ArrowRight,
  CheckCircle 
} from 'lucide-react';
import type { Bank } from '@/types';

// Mock data - in real app this would come from API
const mockBank: Bank = {
  id: '1',
  name: 'Everyfin UK',
  country: 'United Kingdom',
  description: 'Everyfin UK is a leading digital banking platform specifically designed for e-commerce businesses, fintech startups, and innovative companies. With cutting-edge technology and a deep understanding of modern business needs, we provide comprehensive banking solutions that help your business grow and scale globally.',
  rating: 4.8,
  services: ['Digital Banking', 'E-commerce Solutions', 'Crypto Services', 'Multi-currency Accounts'],
  additionalServices: ['Merchant Accounts', 'Payment Processing', 'API Integration', 'Risk Management'],
  accountTypes: ['SWIFT', 'NOTSWIFT'],
  typeOfLicense: ['Banking License', 'FCA Regulated'],
  openFee: { min: 500, max: 1000, currency: 'EUR' },
  outgoingFee: '0.1% min 50 EUR',
  incomingFee: '0.05%',
  acceptedCountries: ['United Kingdom', 'European Union', 'United States', 'Canada', 'Australia'],
  acceptedIndustries: ['E-commerce', 'Fintech', 'SaaS', 'Digital Marketing', 'Gaming', 'Technology'],
  averageOnboardingTime: '5-7 business days',
  pricing: [
    { name: '1 Year Business Account', amount: '€2,500/year' },
    { name: 'Premium Multi-currency', amount: '€5,000/year' },
    { name: 'Enterprise Solution', amount: 'Custom pricing' }
  ]
};

const reviews = [
  {
    id: 1,
    author: 'Sarah Johnson',
    company: 'TechFlow Solutions',
    rating: 5,
    content: 'Excellent service and fast onboarding. The API integration was seamless and their support team is very responsive.',
    date: '2024-01-15'
  },
  {
    id: 2,
    author: 'Michael Chen',
    company: 'CryptoCommerce Ltd',
    rating: 4,
    content: 'Great bank for crypto-related businesses. They understand the industry and provide compliant solutions.',
    date: '2024-01-10'
  },
  {
    id: 3,
    author: 'Emily Rodriguez',
    company: 'GlobalTrade Inc',
    rating: 5,
    content: 'Their multi-currency accounts have been a game-changer for our international business. Highly recommended.',
    date: '2024-01-05'
  }
];

export const BankDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, you would fetch the bank data based on the ID
  const bank = mockBank;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Bank Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">{bank.name}</h1>
                <div className="flex items-center gap-2 mt-1">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{bank.country}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                {renderStars(bank.rating)}
                <span className="ml-2 font-medium">{bank.rating}</span>
                <span className="text-muted-foreground">({reviews.length} reviews)</span>
              </div>
              <div className="flex gap-2">
                {bank.typeOfLicense.map(license => (
                  <Badge key={license} variant="outline">
                    <Shield className="h-3 w-3 mr-1" />
                    {license}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" asChild>
              <Link to="/register">
                Get Personalized Proposal
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              Contact Bank
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle>About {bank.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {bank.description}
              </p>
            </CardContent>
          </Card>

          {/* Services */}
          <Card>
            <CardHeader>
              <CardTitle>Services & Solutions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Core Banking Services</h4>
                <div className="flex flex-wrap gap-2">
                  {bank.services.map(service => (
                    <Badge key={service}>
                      <CheckCircle className="h-3 w-3 mr-1" />
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-medium mb-3">Additional Services</h4>
                <div className="flex flex-wrap gap-2">
                  {bank.additionalServices.map(service => (
                    <Badge key={service} variant="secondary">
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Requirements */}
          <Card>
            <CardHeader>
              <CardTitle>Client Requirements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Accepted Countries</h4>
                <div className="flex flex-wrap gap-2">
                  {bank.acceptedCountries.map(country => (
                    <Badge key={country} variant="outline">
                      <Globe className="h-3 w-3 mr-1" />
                      {country}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-medium mb-3">Suitable Industries</h4>
                <div className="flex flex-wrap gap-2">
                  {bank.acceptedIndustries.map(industry => (
                    <Badge key={industry} variant="outline">
                      {industry}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Reviews */}
          <Card>
            <CardHeader>
              <CardTitle>Client Reviews</CardTitle>
              <CardDescription>
                What our clients say about {bank.name}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {reviews.map(review => (
                <div key={review.id} className="border-b last:border-b-0 pb-6 last:pb-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-medium">{review.author}</div>
                      <div className="text-sm text-muted-foreground">{review.company}</div>
                    </div>
                    <div className="flex items-center gap-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-2">{review.content}</p>
                  <div className="text-xs text-muted-foreground">
                    {new Date(review.date).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Key Information */}
          <Card>
            <CardHeader>
              <CardTitle>Key Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Opening Fee</span>
                <span className="font-medium">
                  {bank.openFee.min}-{bank.openFee.max} {bank.openFee.currency}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Outgoing Fee</span>
                <span className="font-medium">{bank.outgoingFee}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Incoming Fee</span>
                <span className="font-medium">{bank.incomingFee}</span>
              </div>
              
              <Separator />
              
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Average onboarding time:</span>
              </div>
              <div className="font-medium">{bank.averageOnboardingTime}</div>
              
              <Separator />
              
              <div>
                <span className="text-sm text-muted-foreground mb-2 block">Account Types:</span>
                <div className="flex gap-2">
                  {bank.accountTypes.map(type => (
                    <Badge key={type} variant="secondary">
                      <CreditCard className="h-3 w-3 mr-1" />
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pricing Plans */}
          {bank.pricing.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Pricing Plans</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {bank.pricing.map((plan, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-medium">{plan.name}</span>
                    <span className="text-sm text-muted-foreground">{plan.amount}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* CTA Card */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold mb-2">Ready to get started?</h3>
              <p className="text-sm opacity-90 mb-4">
                Get a personalized proposal based on your business needs.
              </p>
              <Button variant="secondary" asChild className="w-full">
                <Link to="/register">
                  Start Application
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};