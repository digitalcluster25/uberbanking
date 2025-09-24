// Bank related types
export interface Bank {
  id: string;
  name: string;
  country: string;
  description: string;
  logo?: string;
  rating: number;
  services: string[];
  additionalServices: string[];
  accountTypes: ('SWIFT' | 'NOTSWIFT')[];
  typeOfLicense: string[];
  
  // Financial conditions
  openFee: {
    min: number;
    max: number;
    currency: string;
  };
  outgoingFee: string; // e.g., "0.1% min 1000$"
  incomingFee: string; // e.g., "0.1%"
  
  // Criteria
  acceptedCountries: string[];
  acceptedIndustries: string[];
  
  // Additional info
  averageOnboardingTime: string;
  
  // Pricing plans
  pricing: PricingPlan[];
}

export interface PricingPlan {
  name: string;
  amount: string;
}

// Client related types
export interface Client {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  company: Company;
  documents: Document[];
  createdAt: string;
}

export interface Company {
  name: string;
  address: string;
  countryOfIncorporation: string;
  industry: string;
  uboResidential: string;
  directorResidence: string;
  addressApproval: string;
  monthlyTurnover: number;
  geoOfClients: string[];
}

export interface Document {
  id: string;
  name: string;
  type: string;
  size: number;
  uploadedAt: string;
  url?: string;
}

// Lead and Application related types
export interface Lead {
  id: string;
  clientId: string;
  bankId: string;
  status: 'NEW' | 'APPROVED' | 'DECLINED' | 'ON_HOLD';
  createdAt: string;
  updatedAt: string;
  client: Client;
  bank: Bank;
}

export interface Application {
  id: string;
  clientId: string;
  bankId: string;
  status: 'APPLIED' | 'IN_REVIEW' | 'ACTION_REQUIRED' | 'REJECTED' | 'OPENED';
  createdAt: string;
  updatedAt: string;
}

// Chat related types
export interface ChatMessage {
  id: string;
  senderId: string;
  recipientId: string;
  content: string;
  fileAttachment?: string;
  timestamp: string;
  isRead: boolean;
}

export interface Conversation {
  id: string;
  participants: string[];
  bankId: string;
  clientId: string;
  lastMessage?: ChatMessage;
  isActive: boolean;
}

// User roles and authentication
export type UserRole = 'CLIENT' | 'BANK_MANAGER' | 'ADMIN';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  firstName: string;
  lastName: string;
  bankId?: string; // for bank managers
}

// Filter and search types
export interface BankFilter {
  countries?: string[];
  industries?: string[];
  services?: string[];
  accountTypes?: ('SWIFT' | 'NOTSWIFT')[];
  typeOfLicense?: string[];
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Form types
export interface CompanyFormData {
  uboResidential: string;
  countryOfIncorporation: string;
  industry: string;
  companyName: string;
  companyAddress: string;
  directorResidence: string;
  addressApproval: string;
  monthlyTurnover: number;
  geoOfClients: string[];
  phoneNumber: string;
}