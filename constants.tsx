import React from 'react';
import { Service, Testimonial, NavLink, CloudPartner } from './types';
import { AwsIcon, AzureIcon, GcpIcon, CodeBracketSquareIcon, ChartBarIcon, ShieldCheckIcon, UsersIcon, ServerStackIcon, CpuChipIcon, DocumentTextIcon } from './components/icons';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Dashboard', href: '/dashboard', requiresAuth: true },
  { label: 'Login', href: '/auth', hideWhenAuth: true },
];

export const CLOUD_PARTNERS: CloudPartner[] = [
  { name: 'AWS', logoUrl: 'https://d0.awsstatic.com/logos/powered-by-aws-white.png', description: 'Amazon Web Services offers a broad set of global cloud-based products including compute, storage, databases, analytics, networking, mobile, developer tools, management tools, IoT, security and enterprise applications.' },
  { name: 'Google Cloud', logoUrl: 'https://cloud.google.com/images/social-icon-google-cloud-1200-630.png', description: 'Google Cloud Platform is a suite of cloud computing services that runs on the same infrastructure that Google uses to end-user products, such as Google Search and YouTube.' },
  { name: 'Microsoft Azure', logoUrl: 'https://azurecomcdn.azureedge.net/cvt-1a957cb61c3587d9fec439527e1ea28a6b810a7a2bd0a71b9a7a8f895c12f9c7/images/icon/mstile-150x150.png', description: 'Microsoft Azure is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers.' },
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'sap',
    name: 'SAP Solutions',
    tagline: 'Optimize Your Enterprise with SAP',
    description: 'Expert SAP implementation, migration, and support services to streamline your business processes.',
    longDescription: 'We offer comprehensive SAP services, including S/4HANA transformations, cloud migrations, and ongoing managed services. Our certified SAP consultants help you leverage the full power of SAP to enhance efficiency, gain real-time insights, and drive innovation across your enterprise.',
    features: ['SAP S/4HANA Implementation', 'SAP Cloud Migration (HEC, RISE)', 'SAP Managed Services', 'Custom ABAP Development', 'SAP Analytics Cloud', 'SAP Integration Services'],
    icon: <CpuChipIcon className="w-12 h-12 text-blue-700" />,
  },
  {
    id: 'cloud-infra',
    name: 'Cloud Infrastructure Services',
    tagline: 'Robust & Scalable Cloud Foundations',
    description: 'Design, build, and manage resilient cloud infrastructure tailored to your performance and security needs.',
    longDescription: 'Our Cloud Infrastructure Services provide the backbone for your digital operations. We specialize in designing, deploying, and managing secure, scalable, and high-performance cloud environments on leading platforms. From network architecture to storage solutions and compute resources, we ensure your infrastructure is optimized for cost and efficiency.',
    features: ['Multi-Cloud Strategy & Design', 'Infrastructure as Code (IaC)', 'Network Design & Security', 'Storage & Backup Solutions', 'Disaster Recovery Planning', 'Performance Monitoring & Optimization'],
    icon: <ServerStackIcon className="w-12 h-12 text-teal-500" />,
  },
  {
    id: 'app-dev',
    name: 'Application Development Services',
    tagline: 'Custom Applications, Cloud-Native Power',
    description: 'Develop bespoke cloud-native applications, modernize legacy systems, and build powerful APIs.',
    longDescription: 'Transform your ideas into reality with our Application Development Services. We build custom web and mobile applications, modernize existing software, and develop robust APIs. Our agile approach and expertise in cloud-native technologies ensure your applications are scalable, secure, and deliver exceptional user experiences.',
    features: ['Cloud-Native App Development', 'Legacy System Modernization', 'Microservices Architecture', 'API Development & Integration', 'Mobile Application Development', 'DevOps & CI/CD Pipelines'],
    icon: <CodeBracketSquareIcon className="w-12 h-12 text-indigo-500" />,
  },
  {
    id: 'data-eng',
    name: 'Data Engineering Services',
    tagline: 'Unlock the Value of Your Data',
    description: 'Build robust data pipelines, data warehouses, and analytics platforms to drive insights.',
    longDescription: 'Harness the power of your data with our Data Engineering Services. We design and implement scalable data pipelines, data lakes, and data warehouses. Our expertise in ETL/ELT processes, big data technologies, and real-time analytics helps you transform raw data into actionable intelligence.',
    features: ['Data Pipeline Development (ETL/ELT)', 'Data Warehousing Solutions', 'Big Data Analytics (Spark, Hadoop)', 'Real-time Data Processing', 'Data Governance & Quality', 'Business Intelligence Dashboards'],
    icon: <ChartBarIcon className="w-12 h-12 text-green-500" />,
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity Services',
    tagline: 'Protect Your Digital Assets',
    description: 'Comprehensive security solutions to protect your cloud environments, applications, and data.',
    longDescription: 'Safeguard your organization with our Cybersecurity Services. We offer end-to-end security solutions, including threat detection, vulnerability management, identity and access management, and compliance consulting. Our proactive approach helps protect your critical assets in the evolving threat landscape.',
    features: ['Cloud Security Posture Management', 'Threat Detection & Response (MDR/XDR)', 'Vulnerability Assessment & Penetration Testing', 'Identity & Access Management (IAM)', 'Security Audits & Compliance (e.g., ISO 27001, SOC 2)', 'Data Loss Prevention (DLP)'],
    icon: <ShieldCheckIcon className="w-12 h-12 text-red-500" />,
  },
  {
    id: 'taas',
    name: 'Testing as a Service (TaaS)',
    tagline: 'Ensure Quality, Accelerate Delivery',
    description: 'On-demand testing services for applications, infrastructure, and security to ensure quality and reliability.',
    longDescription: 'Our Testing as a Service (TaaS) offering provides comprehensive and flexible testing solutions. We cover functional, performance, security, and automation testing to help you deliver high-quality software faster. Reduce your testing overhead and improve release confidence with our expert TaaS.',
    features: ['Automated Testing Solutions', 'Performance & Load Testing', 'Security Testing (SAST, DAST)', 'Manual & Exploratory Testing', 'API Testing', 'Mobile App Testing'],
    icon: <ShieldCheckIcon className="w-12 h-12 text-yellow-500" />,
  },
  {
    id: 'pmaas',
    name: 'Project Management as a Service (PMaaS)',
    tagline: 'Expert Project Delivery, On Demand',
    description: 'Professional project management expertise to ensure your IT projects are delivered on time and within budget.',
    longDescription: 'Leverage our Project Management as a Service (PMaaS) to ensure successful project outcomes. Our experienced project managers employ industry best practices and agile methodologies to oversee your IT initiatives from inception to completion. We help you manage scope, resources, risks, and timelines effectively.',
    features: ['Agile & Waterfall Project Management', 'Risk Management & Mitigation', 'Resource Planning & Allocation', 'Stakeholder Communication', 'Project Reporting & Analytics', 'Change Management'],
    icon: <UsersIcon className="w-12 h-12 text-purple-500" />,
  }
];

export const CORE_SERVICES_OVERVIEW = [
    { 
      title: "Cloud Infrastructure", 
      description: "Build and manage robust, scalable, and secure cloud foundations for your business.", 
      icon: <ServerStackIcon className="w-10 h-10 text-primary" /> 
    },
    { 
      title: "App Development", 
      description: "Custom cloud-native applications and modernization services to drive innovation.", 
      icon: <CodeBracketSquareIcon className="w-10 h-10 text-primary" /> 
    },
    { 
      title: "Cybersecurity", 
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance.", 
      icon: <ShieldCheckIcon className="w-10 h-10 text-primary" /> 
    },
    { 
      title: "Data & Analytics", 
      description: "Turn data into actionable insights with our data engineering and analytics solutions.", 
      icon: <ChartBarIcon className="w-10 h-10 text-primary" /> 
    },
];


export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    quote: 'JIT Global Infosystem revolutionized our approach to cloud infrastructure. Their expertise is unparalleled, leading to significant cost savings and improved performance for our applications.',
    author: 'Aarav Patel',
    role: 'CTO',
    company: 'Innovatech Solutions',
    imageUrl: 'https://picsum.photos/seed/aarav/100/100'
  },
  {
    id: '2',
    quote: 'The migration project managed by JIT Global was seamless. Their team provided excellent support and insights, especially with our data platform.',
    author: 'Priya Sharma',
    role: 'Head of Data Science',
    company: 'DataDriven Corp',
    imageUrl: 'https://picsum.photos/seed/priya/100/100'
  },
  {
    id: '3',
    quote: 'Working with JIT Global felt like a true partnership. They understood our enterprise needs and delivered a robust, secure, and scalable solution on time.',
    author: 'Rajesh Kumar',
    role: 'IT Director',
    company: 'GlobalEnterprises Ltd.',
    imageUrl: 'https://picsum.photos/seed/rajesh/100/100'
  }
];

export const INSIGHTS_CATEGORIES = [
  {
    title: "Case Studies",
    description: "Explore real-world examples of how we've helped clients achieve their business goals with our innovative solutions.",
    icon: <DocumentTextIcon className="w-10 h-10 text-primary" />,
    link: "/contact" // Placeholder link
  },
  {
    title: "Data Analytics",
    description: "Discover how we leverage data to drive insights, optimize performance, and unlock new opportunities for growth.",
    icon: <ChartBarIcon className="w-10 h-10 text-primary" />,
    link: "/services#data-eng" // Placeholder link
  },
  {
    title: "Application Development",
    description: "Learn about our approach to building modern, scalable, and secure applications tailored to your unique needs.",
    icon: <CodeBracketSquareIcon className="w-10 h-10 text-primary" />,
    link: "/services#app-dev" // Placeholder link
  },
  {
    title: "PMaaS",
    description: "Understand our Project Management as a Service model for efficient, on-time, and on-budget project delivery.",
    icon: <UsersIcon className="w-10 h-10 text-primary" />,
    link: "/services#pmaas" // Placeholder link
  }
];

export const COMPANY_NAME = "JIT Global Info Systems Pvt Limited";
export const SHORT_COMPANY_NAME = "JIT Global";
export const COMPANY_LOGO_URL = "/jit-global-logo.png";

export const COMPANY_DETAILED_DESCRIPTION = "JIT Global Infosystems is a trusted IT solutions provider with over 12 years of expertise in cloud infrastructure, cybersecurity, data engineering, and digital transformation. We are committed to helping businesses modernize their IT operations, enhance security, and drive scalable, cost-effective technology solutions to achieve long-term growth.";

export const COMPANY_FOOTER_DESCRIPTION = "Trusted IT solutions provider with expertise in cloud infrastructure, cybersecurity, data engineering, and digital transformation. We help businesses modernize, secure, and scale.";
