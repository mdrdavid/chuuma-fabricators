import { ObjectId } from "mongodb";

export interface Service {
  _id?: ObjectId;
  name: string;
  description: string;
  shortDescription: string;
  icon: string;
  image: string;
  features: string[];
  pricing: {
    base: number;
    max: number;
  };
  category: string;
  order: number;
  useCases: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Design {
  _id?: ObjectId;
  name: string;
  category: string;
  image: string;
  description: string;
  pricing: {
    base: number;
    max: number;
  };
  specifications: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Project {
  _id?: ObjectId;
  title: string;
  category: string;
  image: string;
  description: string;
  client?: string;
  completionDate: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Testimonial {
  _id?: ObjectId;
  clientName: string;
  clientTitle: string;
  content: string;
  rating: number;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Contact {
  _id?: ObjectId;
  name: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
  createdAt: Date;
  status: "new" | "reviewed" | "responded";
}

export interface SiteSettings {
  _id?: ObjectId;
  companyName: string;
  phoneNumber: string;
  whatsappNumber: string;
  email: string;
  address: string;
  aboutText: string;
  heroTitle: string;
  heroSubtitle: string;
  updatedAt: Date;
}

export interface CompanyInfo {
  _id?: ObjectId;
  companyName: string;
  tagline: string;
  mainDescription: string;
  storyTitle: string;
  storyContent: string[];
  mission: string;
  vision: string;
  values: string;
  features: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  workshopImages: string[];
  workshopDescription: string;
  location: string;
  updatedAt: Date;
}
