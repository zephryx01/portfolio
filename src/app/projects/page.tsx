// app/projects/page.tsx
"use client";  // Add this to use useState hook

import { ArrowUpRight, Calendar, Tag } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';  // Import useState

// Define project data outside the component for better organization
const projectsData = [
  {
    title: "Critical Authentication Bypass in Financial App",
    description: "Identified a severe authentication vulnerability in a financial services application that could have allowed attackers to access user accounts without proper credentials.",
    date: "March 2025",
    category: "Web Security",
    caseStudyUrl: "/projects/financial-app"
  },
  {
    title: "Healthcare Provider Security Assessment",
    description: "Comprehensive security audit for a healthcare provider, ensuring HIPAA compliance and patient data protection. Discovered 15 vulnerabilities across their infrastructure.",
    date: "January 2025",
    category: "Network",
    caseStudyUrl: "/projects/healthcare-provider"
  },
  {
    title: "E-commerce Platform Penetration Test",
    description: "Full black-box penetration test of a major e-commerce platform, revealing critical SQL injection and XSS vulnerabilities that could compromise customer data.",
    date: "November 2024",
    category: "Web Security",
    caseStudyUrl: "/projects/ecommerce-platform"
  },
  {
    title: "Smart Home Device Vulnerability Research",
    description: "Reverse engineered a popular smart home device and discovered multiple vulnerabilities in its API implementation allowing unauthorized access to home systems.",
    date: "October 2024",
    category: "IoT",
    caseStudyUrl: "/projects/smart-home-device"
  },
  {
    title: "Cloud Infrastructure Security Review",
    description: "Performed a comprehensive security review of a startup's AWS infrastructure, identifying misconfigurations in IAM policies and S3 bucket permissions.",
    date: "September 2024",
    category: "Cloud",
    caseStudyUrl: "/projects/cloud-infrastructure"
  },
  {
    title: "Banking App Mobile Security Assessment",
    description: "Conducted a security assessment of a mobile banking application, identifying insecure data storage and weak certificate validation issues.",
    date: "August 2024",
    category: "Mobile",
    caseStudyUrl: "/projects/banking-app"
  },
  {
    title: "University Network Penetration Test",
    description: "Red team assessment for a major university, successfully achieving persistence on their network and accessing sensitive research data through a combination of phishing and exploit chains.",
    date: "July 2024",
    category: "Network",
    caseStudyUrl: "/projects/university-network"
  },
  {
    title: "Supply Chain Management System Audit",
    description: "Security audit of a supply chain management system revealing serious API vulnerabilities that could allow manipulation of inventory and shipping data.",
    date: "June 2024",
    category: "Web Security",
    caseStudyUrl: "/projects/supply-chain"
  },
  {
    title: "Government Portal Security Assessment",
    description: "Security assessment of a government portal, identifying and helping remediate critical vulnerabilities that could have exposed citizen data.",
    date: "May 2024",
    category: "Web Security",
    caseStudyUrl: "/projects/government-portal"
  }
];

export default function Projects() {
  // State to track the active filter
  const [activeFilter, setActiveFilter] = useState("All Projects");
  
  // Filter projects based on the active filter
  const filteredProjects = activeFilter === "All Projects" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <main className="min-h-screen bg-black text-green-500">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">PROJECTS</h1>
        <p className="text-xl text-center mb-12 text-gray-400 max-w-3xl mx-auto">
          A showcase of security assessments, vulnerability research, and ethical hacking projects I've completed.
          All details are shared with client permission and sensitive information redacted.
        </p>
        
        <div className="mb-12">
          <div className="flex justify-center mb-8">
            <div className="flex flex-wrap gap-4 justify-center">
              {/* Filter buttons with dynamic styling based on active filter */}
              <button 
                onClick={() => setActiveFilter("All Projects")}
                className={`px-4 py-2 rounded-full transition ${
                  activeFilter === "All Projects" 
                    ? "bg-green-900 text-green-400" 
                    : "bg-black text-gray-400 hover:bg-green-900 hover:text-green-400 border border-gray-800"
                }`}
              >
                All Projects
              </button>
              
              <button 
                onClick={() => setActiveFilter("Web Security")}
                className={`px-4 py-2 rounded-full transition ${
                  activeFilter === "Web Security" 
                    ? "bg-green-900 text-green-400" 
                    : "bg-black text-gray-400 hover:bg-green-900 hover:text-green-400 border border-gray-800"
                }`}
              >
                Web Security
              </button>
              
              <button 
                onClick={() => setActiveFilter("Network")}
                className={`px-4 py-2 rounded-full transition ${
                  activeFilter === "Network" 
                    ? "bg-green-900 text-green-400" 
                    : "bg-black text-gray-400 hover:bg-green-900 hover:text-green-400 border border-gray-800"
                }`}
              >
                Network
              </button>
              
              <button 
                onClick={() => setActiveFilter("IoT")}
                className={`px-4 py-2 rounded-full transition ${
                  activeFilter === "IoT" 
                    ? "bg-green-900 text-green-400" 
                    : "bg-black text-gray-400 hover:bg-green-900 hover:text-green-400 border border-gray-800"
                }`}
              >
                IoT
              </button>
              
              <button 
                onClick={() => setActiveFilter("Cloud")}
                className={`px-4 py-2 rounded-full transition ${
                  activeFilter === "Cloud" 
                    ? "bg-green-900 text-green-400" 
                    : "bg-black text-gray-400 hover:bg-green-900 hover:text-green-400 border border-gray-800"
                }`}
              >
                Cloud
              </button>
              
              <button 
                onClick={() => setActiveFilter("Mobile")}
                className={`px-4 py-2 rounded-full transition ${
                  activeFilter === "Mobile" 
                    ? "bg-green-900 text-green-400" 
                    : "bg-black text-gray-400 hover:bg-green-900 hover:text-green-400 border border-gray-800"
                }`}
              >
                Mobile
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Map through filtered projects */}
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                description={project.description}
                date={project.date}
                category={project.category}
                caseStudyUrl={project.caseStudyUrl}
              />
            ))}
            
            {/* Show a message if no projects match the filter */}
            {filteredProjects.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-400 text-xl">No projects found for this category.</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Featured Case Study */}
        <div className="border border-green-800 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-white">Featured Case Study: Financial App Authentication Bypass</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <p className="text-gray-300 mb-4">
                A financial services company approached me to perform a security assessment of their web application that handles sensitive customer financial data. During the assessment, I identified a critical vulnerability in their authentication mechanism.
              </p>
              <p className="text-gray-300 mb-4">
                The vulnerability was a JWT implementation flaw that allowed attackers to modify the token claims without invalidating the signature, effectively bypassing authentication controls and accessing any user account.
              </p>
              <p className="text-gray-300 mb-6">
                I worked closely with their development team to implement a proper JWT validation mechanism, using appropriate algorithms and implementing token expiration and refresh workflows according to industry best practices.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="px-3 py-1 bg-green-900/50 text-green-400 rounded-full text-sm">JWT Security</span>
                <span className="px-3 py-1 bg-green-900/50 text-green-400 rounded-full text-sm">Authentication</span>
                <span className="px-3 py-1 bg-green-900/50 text-green-400 rounded-full text-sm">Web Security</span>
                <span className="px-3 py-1 bg-green-900/50 text-green-400 rounded-full text-sm">Financial Sector</span>
              </div>
              
              <Link 
                href="/projects/financial-app" 
                className="inline-flex items-center text-green-500 hover:text-green-400 transition"
              >
                Read the full case study <ArrowUpRight className="ml-1" size={16} />
              </Link>
            </div>
            
            <div className="border border-green-700 rounded-lg p-6 bg-green-900/20">
              <h3 className="text-xl font-bold mb-4 text-white">Impact</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-1">Risk Severity</h4>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full w-full"></div>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">Critical</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-1">Potential Impact</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Unauthorized access to user accounts
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Theft of sensitive financial data
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Potential regulatory violations
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-1">Remediation Time</h4>
                  <p className="text-gray-300">48 hours from report to patch deployment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Need a Security Assessment?</h2>
          <p className="text-xl mb-8 text-gray-400 max-w-3xl mx-auto">
            I offer comprehensive security assessment services tailored to your organization's specific needs. 
            Let's work together to identify and address your security vulnerabilities.
          </p>
          <Link 
            href="/contact" 
            className="bg-green-600 hover:bg-green-700 text-black font-bold py-3 px-8 rounded-lg inline-flex items-center"
          >
            Get in Touch <ArrowUpRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </main>
  );
}

function ProjectCard({ 
  title, 
  description, 
  date, 
  category, 
  caseStudyUrl 
}: { 
  title: string; 
  description: string; 
  date: string; 
  category: string; 
  caseStudyUrl: string;
}) {
  return (
    <div className="border border-green-800 rounded-lg p-6 hover:bg-green-900/20 transition-colors group">
      <div className="flex items-center gap-2 mb-4">
        <Calendar size={16} className="text-gray-500" />
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors">{title}</h3>
      
      <p className="text-gray-400 mb-4 line-clamp-3">{description}</p>
      
      <div className="flex justify-between items-center">
        <span className="px-3 py-1 bg-green-900/50 text-green-400 rounded-full text-sm flex items-center">
          <Tag size={14} className="mr-1" /> {category}
        </span>
        
        <Link 
          href={caseStudyUrl} 
          className="text-green-500 hover:text-green-400 transition-colors flex items-center"
        >
          Details <ArrowUpRight className="ml-1" size={16} />
        </Link>
      </div>
    </div>
  );
}