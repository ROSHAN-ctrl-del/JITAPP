
import React from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  // Add other user-specific fields if needed
}

export interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  icon?: React.ReactNode;
  partnerLogoUrl?: string; // URL for AWS, GCP, Azure logos
  caseStudies?: { title: string; summary: string }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  imageUrl?: string;
}

export interface NavLink {
  label: string;
  href: string;
  requiresAuth?: boolean;
  hideWhenAuth?: boolean;
}

export interface CloudPartner {
  name: string;
  logoUrl: string;
  description: string;
}
