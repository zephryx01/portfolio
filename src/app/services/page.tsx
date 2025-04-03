// app/services/page.tsx
import { Shield, Code, Globe, Lock, Server, Database, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function Services() {
  return (
    <main className="min-h-screen bg-black text-green-500">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">SERVICES</h1>
        <p className="text-xl text-center mb-12 text-gray-400 max-w-3xl mx-auto">
          I provide comprehensive security services to help organizations identify vulnerabilities,
          strengthen their security posture, and protect their valuable assets from cyber threats.
        </p>
        
        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ServiceCard 
            icon={<Shield size={40} />}
            title="Penetration Testing"
            description="Simulate real-world attacks to identify vulnerabilities in your systems before malicious actors can exploit them."
            features={[
              "Web Application Testing",
              "Network Infrastructure Testing",
              "Cloud Services Testing",
              "Mobile Application Testing",
              "Social Engineering Assessments"
            ]}
          />
          
          <ServiceCard 
            icon={<Lock size={40} />}
            title="Security Audits"
            description="Comprehensive evaluation of your security infrastructure, policies, and procedures to identify potential weaknesses."
            features={[
              "Security Controls Evaluation",
              "Policy Review & Development",
              "Compliance Gap Analysis",
              "Risk Assessment",
              "Security Architecture Review"
            ]}
          />
          
          <ServiceCard 
            icon={<Code size={40} />}
            title="Secure Code Review"
            description="Analyze your application's codebase to identify security flaws, logic errors, and vulnerable dependencies."
            features={[
              "Static Code Analysis",
              "Dynamic Code Analysis",
              "Dependency Vulnerability Checking",
              "Secure Coding Recommendations",
              "Development Team Training"
            ]}
          />
          
          <ServiceCard 
            icon={<Globe size={40} />}
            title="Web Application Security"
            description="Identify and remediate security vulnerabilities in your web applications to protect sensitive data and maintain user trust."
            features={[
              "OWASP Top 10 Vulnerability Testing",
              "API Security Testing",
              "Authentication & Authorization Review",
              "Session Management Analysis",
              "Input Validation Assessment"
            ]}
          />
          
          <ServiceCard 
            icon={<Server size={40} />}
            title="Network Security"
            description="Evaluate the security of your network infrastructure to prevent unauthorized access and data breaches."
            features={[
              "Firewall Configuration Review",
              "Network Device Assessment",
              "Wireless Network Security Testing",
              "VPN Security Analysis",
              "Network Segmentation Evaluation"
            ]}
          />
          
          <ServiceCard 
            icon={<Database size={40} />}
            title="Cloud Security"
            description="Assess the security of your cloud environment and ensure proper configuration of cloud services and resources."
            features={[
              "AWS/Azure/GCP Security Assessment",
              "Cloud Configuration Review",
              "IAM Policy Evaluation",
              "Container Security Testing",
              "Serverless Function Security Analysis"
            ]}
          />
        </div>
        
        {/* Methodology Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white text-center">MY METHODOLOGY</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 mb-6">
                My security assessment methodology follows a systematic approach to ensure comprehensive coverage and actionable results. Each phase is designed to provide maximum value and insights into your security posture.
              </p>
              
              <div className="space-y-6">
                <MethodologyStep 
                  number="01"
                  title="Planning & Reconnaissance"
                  description="Define the scope, objectives, and rules of engagement. Gather intelligence about the target systems to understand the attack surface."
                />
                
                <MethodologyStep 
                  number="02"
                  title="Scanning & Enumeration"
                  description="Identify active systems, open ports, services, and potential vulnerabilities using automated tools and manual techniques."
                />
                
                <MethodologyStep 
                  number="03"
                  title="Vulnerability Assessment"
                  description="Analyze discovered vulnerabilities to determine their severity, exploitability, and potential impact on the organization."
                />
                
                <MethodologyStep 
                  number="04"
                  title="Exploitation"
                  description="Attempt to exploit identified vulnerabilities to confirm their existence and demonstrate their real-world impact."
                />
                
                <MethodologyStep 
                  number="05"
                  title="Post-Exploitation"
                  description="Determine the extent of access gained through successful exploitation and identify potential lateral movement opportunities."
                />
                
                <MethodologyStep 
                  number="06"
                  title="Reporting & Remediation"
                  description="Provide detailed documentation of findings, including severity ratings, proof of concepts, and actionable remediation recommendations."
                />
                
                <MethodologyStep 
                  number="07"
                  title="Follow-up & Verification"
                  description="Verify that implemented fixes effectively address the identified vulnerabilities and provide additional guidance if needed."
                />
              </div>
            </div>
            
            <div className="border border-green-800 bg-green-900/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Why My Approach Is Different</h3>
              
              <div className="space-y-6">
                <DifferentiatorItem 
                  title="Security as a Partnership"
                  description="I view security as a collaborative effort. I work closely with your team to understand your business context and provide tailored recommendations that align with your specific needs."
                />
                
                <DifferentiatorItem 
                  title="Beyond Automated Tools"
                  description="While I utilize industry-standard tools, my approach goes beyond automated scanning. I apply creative thinking and manual testing techniques to uncover vulnerabilities that automated tools might miss."
                />
                
                <DifferentiatorItem 
                  title="Practical Remediation Guidance"
                  description="My reports don&apos;t just identify problems—they provide clear, actionable recommendations for fixing vulnerabilities, with consideration for your technical environment and resource constraints."
                />
                
                <DifferentiatorItem 
                  title="Educational Approach"
                  description="I believe in empowering your team with knowledge. Throughout the assessment process, I explain findings in a way that helps your team understand security concepts and improve their security awareness."
                />
                
                <DifferentiatorItem 
                  title="Long-term Security Vision"
                  description="I help you build a roadmap for continuous security improvement, not just address immediate vulnerabilities. My goal is to help you establish a strong security foundation for the future."
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Service Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white text-center">SERVICE PACKAGES</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PackageCard 
              name="Basic Security Assessment"
              price="Contact for pricing"
              description="Entry-level security assessment for small businesses or individual projects."
              features={[
                "Vulnerability scanning",
                "Basic web application testing",
                "Security configuration review",
                "Summary report with findings",
                "Remediation recommendations"
              ]}
              recommended={false}
            />
            
            <PackageCard 
              name="Comprehensive Security Audit"
              price="Contact for pricing"
              description="Thorough security assessment for medium-sized businesses or complex applications."
              features={[
                "All Basic Assessment features",
                "Manual penetration testing",
                "Secure code review",
                "Cloud security assessment",
                "Detailed technical report",
                "Post-remediation verification"
              ]}
              recommended={true}
            />
            
            <PackageCard 
              name="Enterprise Security Program"
              price="Contact for pricing"
              description="Complete security program for large organizations with complex infrastructure."
              features={[
                "All Comprehensive Audit features",
                "Advanced exploitation techniques",
                "Red team operations",
                "Social engineering assessment",
                "Executive summary presentation",
                "Security training workshop",
                "90-day security support"
              ]}
              recommended={false}
            />
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Secure Your Systems?</h2>
          <p className="text-xl mb-8 text-gray-400 max-w-3xl mx-auto">
            Let&apos;s discuss your security needs and how I can help protect your organization from cyber threats.
          </p>
          <Link 
            href="/contact" 
            className="bg-green-600 hover:bg-green-700 text-black font-bold py-3 px-8 rounded-lg inline-flex items-center"
          >
            Request a Consultation <ChevronRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </main>
  );
}

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="border border-green-800 rounded-lg p-6 hover:bg-green-900/20 transition-colors">
      <div className="text-green-500 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-400 flex items-start">
            <span className="text-green-500 mr-2">•</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface MethodologyStepProps {
  number: string | number;
  title: string;
  description: string;
}

function MethodologyStep({ number, title, description }: MethodologyStepProps) {
  return (
    <div className="flex">
      <div className="mr-4">
        <span className="text-green-500 text-xl font-bold">{number}</span>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-1 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}

interface DifferentiatorItemProps {
  title: string;
  description: string;
}

function DifferentiatorItem({ title, description }: DifferentiatorItemProps) {
  return (
    <div>
      <h4 className="text-lg font-bold mb-2 text-green-400">{title}</h4>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

interface PackageCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended: boolean;
}

function PackageCard({ name, price, description, features, recommended }: PackageCardProps) {
  return (
    <div className={`border ${recommended ? 'border-green-500' : 'border-green-800'} rounded-lg p-6 ${recommended ? 'bg-green-900/30' : ''} relative`}>
      {recommended && (
        <div className="absolute top-0 right-0 bg-green-500 text-black px-4 py-1 text-sm font-bold rounded-bl-lg rounded-tr-lg">
          RECOMMENDED
        </div>
      )}
      
      <h3 className="text-xl font-bold mb-2 text-white">{name}</h3>
      <p className="text-xl mb-4 text-green-400">{price}</p>
      <p className="text-gray-400 mb-4">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-400 flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      
      <Link 
        href="/contact" 
        className={`block text-center py-2 px-4 rounded ${
          recommended 
            ? 'bg-green-500 hover:bg-green-600 text-black font-bold' 
            : 'border border-green-500 text-green-500 hover:bg-green-900/50'
        } transition-colors`}
      >
        Get Started
      </Link>
    </div>
  );
}