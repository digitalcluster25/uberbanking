import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Star, MapPin, CreditCard, ArrowRight, Filter } from 'lucide-react';
import type { Bank, BankFilter } from '@/types';

// Mock data for demonstration
const mockBanks: Bank[] = [
  {
    id: '1',
    name: 'Everyfin UK',
    country: 'United Kingdom',
    description: 'Digital banking solution for e-commerce and fintech companies',
    rating: 4.8,
    services: ['Digital Banking', 'E-commerce', 'Crypto'],
    additionalServices: ['Merchant Accounts', 'Payment Processing'],
    accountTypes: ['SWIFT', 'NOTSWIFT'],
    typeOfLicense: ['Banking License'],
    openFee: { min: 500, max: 1000, currency: 'EUR' },
    outgoingFee: '0.1% min 50 EUR',
    incomingFee: '0.05%',
    acceptedCountries: ['UK', 'EU', 'US'],
    acceptedIndustries: ['E-commerce', 'Fintech', 'SaaS'],
    averageOnboardingTime: '5-7 business days',
    pricing: []
  },
  {
    id: '2',
    name: 'Swiss Capital Bank',
    country: 'Switzerland',
    description: 'Private banking and wealth management for high-net-worth individuals',
    rating: 4.9,
    services: ['Private Banking', 'Wealth Management', 'Investment'],
    additionalServices: ['Crypto Custody', 'Trust Services'],
    accountTypes: ['SWIFT'],
    typeOfLicense: ['Banking License'],
    openFee: { min: 2000, max: 5000, currency: 'CHF' },
    outgoingFee: '0.15% min 100 CHF',
    incomingFee: '0.1%',
    acceptedCountries: ['Switzerland', 'EU', 'US'],
    acceptedIndustries: ['Finance', 'Real Estate', 'Trading'],
    averageOnboardingTime: '10-14 business days',
    pricing: []
  },
  {
    id: '3',
    name: 'Baltic Business Bank',
    country: 'Estonia',
    description: 'Modern digital banking for EU businesses and startups',
    rating: 4.6,
    services: ['Digital Banking', 'Business Accounts', 'Multi-currency'],
    additionalServices: ['API Integration', 'SEPA Instant'],
    accountTypes: ['SWIFT', 'NOTSWIFT'],
    typeOfLicense: ['EMI License'],
    openFee: { min: 200, max: 500, currency: 'EUR' },
    outgoingFee: '0.2% min 25 EUR',
    incomingFee: '0.1%',
    acceptedCountries: ['EU', 'EEA'],
    acceptedIndustries: ['Technology', 'E-commerce', 'Consulting'],
    averageOnboardingTime: '3-5 business days',
    pricing: []
  }
];

const countries = ['United Kingdom', 'Switzerland', 'Estonia', 'Germany', 'France', 'Netherlands'];
const industries = ['E-commerce', 'Fintech', 'SaaS', 'Technology', 'Trading', 'Real Estate', 'Consulting'];
const services = ['Digital Banking', 'Crypto', 'Private Banking', 'Merchant Accounts', 'Multi-currency'];

export const BanksPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<BankFilter>({});
  const [showFilters, setShowFilters] = useState(false);

  const filteredBanks = useMemo(() => {
    return mockBanks.filter(bank => {
      // Search term filter
      if (searchTerm && !bank.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !bank.country.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !bank.description.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }

      // Country filter
      if (filters.countries?.length && !filters.countries.includes(bank.country)) {
        return false;
      }

      // Services filter
      if (filters.services?.length && !filters.services.some(service => bank.services.includes(service))) {
        return false;
      }

      // Account types filter
      if (filters.accountTypes?.length && !filters.accountTypes.some(type => bank.accountTypes.includes(type))) {
        return false;
      }

      return true;
    });
  }, [searchTerm, filters]);

  const handleFilterChange = (key: keyof BankFilter, value: string) => {
    setFilters(prev => {
      const currentValues = prev[key] || [];
      const newValues = currentValues.includes(value as any)
        ? currentValues.filter(item => item !== value)
        : [...currentValues, value as any];
      
      return {
        ...prev,
        [key]: newValues
      };
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Banking Partners</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Discover verified banking partners that match your business needs. 
          Filter by location, services, and requirements to find your perfect match.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search banks, countries, or services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="md:w-auto"
          >
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <Card>
            <CardHeader>
              <CardTitle>Filter Banks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Country Filter */}
                <div>
                  <Label className="text-sm font-medium mb-3 block">Countries</Label>
                  <div className="space-y-2">
                    {countries.map(country => (
                      <div key={country} className="flex items-center space-x-2">
                        <Checkbox
                          id={`country-${country}`}
                          checked={filters.countries?.includes(country) || false}
                          onCheckedChange={() => handleFilterChange('countries', country)}
                        />
                        <Label htmlFor={`country-${country}`} className="text-sm">
                          {country}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Services Filter */}
                <div>
                  <Label className="text-sm font-medium mb-3 block">Services</Label>
                  <div className="space-y-2">
                    {services.map(service => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox
                          id={`service-${service}`}
                          checked={filters.services?.includes(service) || false}
                          onCheckedChange={() => handleFilterChange('services', service)}
                        />
                        <Label htmlFor={`service-${service}`} className="text-sm">
                          {service}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Account Types Filter */}
                <div>
                  <Label className="text-sm font-medium mb-3 block">Account Types</Label>
                  <div className="space-y-2">
                    {['SWIFT', 'NOTSWIFT'].map(type => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox
                          id={`account-${type}`}
                          checked={filters.accountTypes?.includes(type as 'SWIFT' | 'NOTSWIFT') || false}
                          onCheckedChange={() => handleFilterChange('accountTypes', type)}
                        />
                        <Label htmlFor={`account-${type}`} className="text-sm">
                          {type}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-muted-foreground">
          Showing {filteredBanks.length} of {mockBanks.length} banking partners
        </p>
      </div>

      {/* Banks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBanks.map(bank => (
          <Card key={bank.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">{bank.name}</CardTitle>
                  <div className="flex items-center mt-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    {bank.country}
                  </div>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-sm font-medium">{bank.rating}</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <CardDescription className="line-clamp-2">
                {bank.description}
              </CardDescription>

              {/* Services */}
              <div>
                <div className="flex flex-wrap gap-1">
                  {bank.services.slice(0, 3).map(service => (
                    <Badge key={service} variant="secondary" className="text-xs">
                      {service}
                    </Badge>
                  ))}
                  {bank.services.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{bank.services.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>

              {/* Key Info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Opening Fee:</span>
                  <span className="font-medium">
                    {bank.openFee.min}-{bank.openFee.max} {bank.openFee.currency}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Onboarding:</span>
                  <span className="font-medium">{bank.averageOnboardingTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Account Types:</span>
                  <div className="flex gap-1">
                    {bank.accountTypes.map(type => (
                      <Badge key={type} variant="outline" className="text-xs">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4 space-y-2">
                <Button asChild className="w-full">
                  <Link to={`/banks/${bank.id}`}>
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/register">Get Personalized Proposal</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredBanks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg mb-4">
            No banks match your current filters
          </p>
          <Button variant="outline" onClick={() => {
            setFilters({});
            setSearchTerm('');
          }}>
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};