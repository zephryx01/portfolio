'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, AlertTriangle, CheckCircle2, Zap } from 'lucide-react';
import { useParams } from 'next/navigation';

// Sample project data - this would be replaced with your actual data fetching logic
const projectsData = [
  {
    id: "financial-app",
    title: "Critical Authentication Bypass in Financial App",
    fullTitle: "Authentication Bypass Vulnerability in Financial Services Application",
    description: "Identified a severe authentication vulnerability in a financial services application that could have allowed attackers to access user accounts without proper credentials.",
    date: "March 2025",
    category: "Web Security",
    content: `
# Authentication Bypass Vulnerability in Financial Services Application

## Executive Summary

During a comprehensive security assessment of a financial services web application, I identified a critical vulnerability in the authentication mechanism. The flaw was in the JWT implementation that allowed attackers to modify token claims without invalidating the signature. This vulnerability could allow malicious actors to bypass authentication controls and access any user account without valid credentials.

## Vulnerability Details

The application was using JSON Web Tokens (JWT) for maintaining user sessions. However, there were several implementation flaws:

1. The application was using the \`none\` algorithm for some tokens, which essentially skips signature validation
2. The token validation logic did not properly verify the algorithm used in the token header
3. The backend accepted tokens with modified payloads even when signatures should have been invalidated

This combination of issues created a serious authentication bypass vulnerability. An attacker could:

- Capture their own valid JWT after authenticating
- Modify the payload to contain a different user identifier
- Change the algorithm header to \`none\` or maintain the original algorithm
- Use this modified token to gain unauthorized access to other user accounts

## Technical POC

The exploit could be executed using the following steps:

1. Obtain a legitimate JWT by logging into the application
2. Decode the JWT to reveal its structure (header, payload, signature)
3. Modify the user identifier in the payload to target a different user account
4. Set the algorithm in the header to \`none\`
5. Re-encode the token (without a signature)
6. Send a request with the modified token

\`\`\`javascript
// Original JWT structure
{
  "alg": "HS256",
  "typ": "JWT"
}.
{
  "sub": "user_123",
  "name": "Original User",
  "exp": 1648684743
}.[signature]

// Modified JWT structure
{
  "alg": "none",
  "typ": "JWT"
}.
{
  "sub": "admin_user",
  "name": "Original User",
  "exp": 1648684743
}.
\`\`\`

## Impact Assessment

The vulnerability was classified as Critical (CVSS 9.8) due to:

- Complete authentication bypass requiring minimal expertise
- Ability to access and modify financial data of any user
- Potential regulatory implications under financial data protection laws
- Reputational damage to the financial institution if exploited

## Remediation Steps

I worked closely with the development team to implement the following fixes:

1. Enforced specific JWT algorithms (HS256, RS256) and rejected tokens with the \`none\` algorithm
2. Implemented proper signature validation for all tokens
3. Added additional checks to verify token integrity
4. Established a JWT blacklist for revoked tokens
5. Implemented proper token expiration and refresh workflows
6. Added audit logging for authentication events

## Timeline

- **Day 1**: Vulnerability discovered during testing
- **Day 1**: Initial report sent to security team
- **Day 2**: Vulnerability confirmed by client team
- **Day 3**: Emergency patch developed
- **Day 5**: Fix deployed to production
- **Day 6**: Verification testing confirmed the vulnerability was resolved

## Lessons Learned

This case highlights several important JWT security practices:

1. Never use the \`none\` algorithm in production environments
2. Always validate JWT signatures before processing any claims
3. Implement explicit algorithm verification to prevent algorithm switching attacks
4. Consider using well-maintained JWT libraries that handle secure validation
5. Perform regular security testing specifically focused on authentication mechanisms

## Conclusion

This project demonstrates the critical importance of properly implementing authentication mechanisms, especially in financial applications. By identifying and addressing this vulnerability before it could be exploited, we protected both the financial institution and its customers from potential fraud and data theft.

The client has since implemented a more robust security testing program with regular assessments to identify similar issues before they reach production environments.
    `,
    impactSeverity: "Critical",
    potentialImpacts: [
      "Unauthorized access to user accounts",
      "Theft of sensitive financial data",
      "Potential regulatory violations",
      "Reputational damage to the institution"
    ],
    remediationTime: "48 hours from report to patch deployment",
    tags: ["JWT Security", "Authentication", "Web Security", "Financial Sector"],
    relatedProjects: ["healthcare-provider", "government-portal"]
  },
  {
    id: "healthcare-provider",
    title: "Healthcare Provider Security Assessment",
    fullTitle: "Comprehensive Security Audit for Major Healthcare Provider",
    description: "Comprehensive security audit for a healthcare provider, ensuring HIPAA compliance and patient data protection. Discovered 15 vulnerabilities across their infrastructure.",
    date: "January 2025",
    category: "Network",
    content: `
# Comprehensive Security Audit for Major Healthcare Provider

## Executive Summary

I conducted a comprehensive security audit for a major healthcare provider with multiple facilities across the region. The assessment focused on ensuring HIPAA compliance and identifying potential vulnerabilities that could compromise patient data. The audit uncovered 15 distinct security issues of varying severity across their network infrastructure, web applications, and internal systems.

## Scope of Assessment

The assessment covered:

- External and internal network vulnerability scanning
- Web application penetration testing of patient portal
- Wireless network security assessment
- Physical security controls review
- Security policy and procedure evaluation
- Staff security awareness testing

## Key Findings

The assessment identified several critical security issues:

1. **Unpatched Medical Device Vulnerabilities**: Several connected medical devices were running outdated firmware with known vulnerabilities that could be exploited to gain access to the internal network.

2. **Insufficient Network Segmentation**: The network lacked proper segmentation between clinical systems, administrative networks, and guest WiFi, creating potential attack paths to sensitive data.

3. **Patient Portal Vulnerabilities**: The patient portal contained multiple vulnerabilities including:
   - Insecure direct object references allowing access to other patients' data
   - Weak password policies
   - Session fixation vulnerabilities

4. **Inadequate Access Controls**: Several internal applications had insufficient access controls, allowing staff members to access data beyond their need-to-know.

5. **Backup Data Exposure**: Unencrypted backup data was stored in a publicly accessible S3 bucket.

## Technical Details

### Medical Device Vulnerabilities

The medical devices network contained equipment running outdated firmware versions with known CVEs:

- Imaging equipment running firmware version 3.2.1 (vulnerable to CVE-2022-XXXX)
- Patient monitoring systems with unpatched operating systems
- Medical dispensing systems with default credentials

### Network Security Issues

Network security testing revealed:

- VLANs were improperly configured allowing traffic to cross between secure and insecure segments
- Firewall rules contained overly permissive settings
- Legacy systems (Windows 7) still in operation without compensating controls
- Exposed administrative interfaces on the internal network

### Patient Portal Vulnerabilities

Web application testing identified:

\`\`\`
GET /api/records.php?patient_id=12345
\`\`\`

By simply changing the patient_id parameter, an authenticated user could access records belonging to other patients.

## Remediation Recommendations

I provided a comprehensive remediation plan, prioritized by risk:

1. **Immediate Actions (0-30 days)**:
   - Apply security patches to critical systems
   - Remediate patient portal access control issues
   - Secure exposed backup data
   - Implement proper network segmentation

2. **Short-term Actions (30-90 days)**:
   - Implement a medical device security program
   - Deploy advanced endpoint protection
   - Enhance authentication mechanisms
   - Conduct staff security awareness training

3. **Long-term Actions (90+ days)**:
   - Implement a comprehensive security monitoring solution
   - Develop a security incident response plan
   - Establish ongoing security assessment program
   - Enhance physical security controls

## Results and Impact

Following the assessment:

- Critical and high-risk vulnerabilities were addressed within 30 days
- The organization implemented a formal security program with regular assessments
- Staff security awareness improved significantly
- The organization passed their subsequent HIPAA compliance audit

## Conclusion

This project demonstrates the importance of comprehensive security assessments in healthcare environments. By identifying and addressing these vulnerabilities, the healthcare provider significantly improved their security posture and reduced the risk of patient data exposure or a potential breach.

The client has maintained an ongoing relationship for periodic reassessments and security program maturity evaluation.
    `,
    impactSeverity: "High",
    potentialImpacts: [
      "Patient data exposure",
      "HIPAA compliance violations",
      "Disruption to critical healthcare services",
      "Financial penalties and remediation costs"
    ],
    remediationTime: "30 days for critical findings, 90 days for complete remediation",
    tags: ["Healthcare Security", "HIPAA", "Network Security", "Data Protection"],
    relatedProjects: ["financial-app", "ecommerce-platform"]
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform Penetration Test",
    fullTitle: "Black-Box Penetration Test of Major E-commerce Platform",
    description: "Full black-box penetration test of a major e-commerce platform, revealing critical SQL injection and XSS vulnerabilities that could compromise customer data.",
    date: "November 2024",
    category: "Web Security",
    content: "Full case study content here...",
    impactSeverity: "Critical",
    potentialImpacts: [
      "Customer data exposure",
      "Financial fraud",
      "Damage to brand reputation",
      "Regulatory penalties"
    ],
    remediationTime: "14 days for critical findings, 45 days for complete remediation",
    tags: ["E-commerce Security", "PCI-DSS", "Penetration Testing", "SQL Injection"],
    relatedProjects: ["financial-app", "supply-chain"]
  },
  {
    id: "smart-home-device",
    title: "Smart Home Device Vulnerability Research",
    fullTitle: "IoT Vulnerability Research: Popular Smart Home Device",
    description: "Reverse engineered a popular smart home device and discovered multiple vulnerabilities in its API implementation allowing unauthorized access to home systems.",
    date: "October 2024",
    category: "IoT",
    content: "Full case study content here...",
    impactSeverity: "High",
    potentialImpacts: [
      "Unauthorized access to home systems",
      "Privacy violations",
      "Potential for physical security implications",
      "Botnet recruitment"
    ],
    remediationTime: "90 days (coordinated disclosure process)",
    tags: ["IoT Security", "Firmware Analysis", "API Vulnerabilities", "Hardware Hacking"],
    relatedProjects: ["banking-app", "cloud-infrastructure"]
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure Security Review",
    fullTitle: "AWS Infrastructure Security Assessment for Tech Startup",
    description: "Performed a comprehensive security review of a startup's AWS infrastructure, identifying misconfigurations in IAM policies and S3 bucket permissions.",
    date: "September 2024",
    category: "Cloud",
    content: "Full case study content here...",
    impactSeverity: "Medium",
    potentialImpacts: [
      "Unauthorized data access",
      "Resource misuse",
      "Excessive cloud spending",
      "Service disruption"
    ],
    remediationTime: "21 days",
    tags: ["Cloud Security", "AWS", "IAM", "Infrastructure as Code"],
    relatedProjects: ["ecommerce-platform", "university-network"]
  },
  {
    id: "banking-app",
    title: "Banking App Mobile Security Assessment",
    fullTitle: "Mobile Security Assessment of Banking Application",
    description: "Conducted a security assessment of a mobile banking application, identifying insecure data storage and weak certificate validation issues.",
    date: "August 2024",
    category: "Mobile",
    content: "Full case study content here...",
    impactSeverity: "Critical",
    potentialImpacts: [
      "Financial fraud",
      "Account takeover",
      "Sensitive data exposure",
      "Regulatory non-compliance"
    ],
    remediationTime: "30 days",
    tags: ["Mobile Security", "Android", "iOS", "OWASP Mobile Top 10"],
    relatedProjects: ["financial-app", "smart-home-device"]
  },
  {
    id: "university-network",
    title: "University Network Penetration Test",
    fullTitle: "Red Team Assessment for Major University",
    description: "Red team assessment for a major university, successfully achieving persistence on their network and accessing sensitive research data through a combination of phishing and exploit chains.",
    date: "July 2024",
    category: "Network",
    content: "Full case study content here...",
    impactSeverity: "High",
    potentialImpacts: [
      "Research data theft",
      "Student/faculty PII exposure",
      "Network disruption",
      "Reputational damage"
    ],
    remediationTime: "60 days for complete remediation",
    tags: ["Red Team", "Phishing", "Network Security", "Education Sector"],
    relatedProjects: ["healthcare-provider", "government-portal"]
  },
  {
    id: "supply-chain",
    title: "Supply Chain Management System Audit",
    fullTitle: "Security Audit of Supply Chain Management Platform",
    description: "Security audit of a supply chain management system revealing serious API vulnerabilities that could allow manipulation of inventory and shipping data.",
    date: "June 2024",
    category: "Web Security",
    content: "Full case study content here...",
    impactSeverity: "High",
    potentialImpacts: [
      "Inventory manipulation",
      "Shipping fraud",
      "Business disruption",
      "Financial losses"
    ],
    remediationTime: "45 days",
    tags: ["Supply Chain Security", "API Security", "Business Logic Flaws", "Authentication"],
    relatedProjects: ["ecommerce-platform", "cloud-infrastructure"]
  },
  {
    id: "government-portal",
    title: "Government Portal Security Assessment",
    fullTitle: "Security Assessment of Citizen Services Portal",
    description: "Security assessment of a government portal, identifying and helping remediate critical vulnerabilities that could have exposed citizen data.",
    date: "May 2024",
    category: "Web Security",
    content: "Full case study content here...",
    impactSeverity: "Critical",
    potentialImpacts: [
      "Citizen PII exposure",
      "Identity theft",
      "Public trust damage",
      "Legal consequences"
    ],
    remediationTime: "21 days for critical issues, 60 days for full remediation",
    tags: ["Government Security", "Web Application Security", "Identity Management", "Privacy"],
    relatedProjects: ["financial-app", "university-network"]
  }
];

interface Project {
  id: string;
  title: string;
  fullTitle: string;
  description: string;
  date: string;
  category: string;
  content: string;
  impactSeverity: string;
  potentialImpacts: string[];
  remediationTime: string;
  tags: string[];
  relatedProjects: string[];
}

export default function ProjectPage() {
  const params = useParams();
  const projectId = params.id as string;

  const [project, setProject] = useState<Project | null>(null);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real application, you would fetch the project data from an API
    // Simulate API call with setTimeout
    setTimeout(() => {
      // Find the project that matches the ID from URL params
      const foundProject = projectsData.find(project => project.id === projectId);
      setProject(foundProject || null);

      if (foundProject && foundProject.relatedProjects) {
        const related = projectsData.filter(p => foundProject.relatedProjects.includes(p.id));
        setRelatedProjects(related);
      }
      
      setIsLoading(false);
    }, 300); // Small timeout to simulate loading
  }, [projectId]);

  const renderContent = (content: string) => {
    // This is a simple markdown renderer for our sample content
    // In a real application, you would use a proper markdown library
    const formattedContent = content
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-white mt-8 mb-6">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-white mt-6 mb-3">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold text-white mt-5 mb-2">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
      .replace(/\- (.*$)/gm, '<li class="ml-4 mb-2">$1</li>')
      .replace(/\n\n/g, '<br /><br />');
    
    return <div dangerouslySetInnerHTML={{ __html: formattedContent }} />;
  };

  // Show loading state
  if (isLoading) {
    return (
      <main className="min-h-screen bg-black text-green-500 flex justify-center items-center">
        <div className="animate-pulse">Loading project details...</div>
      </main>
    );
  }

  // Show not found state
  if (!project) {
    return (
      <main className="min-h-screen bg-black text-green-500">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Project Not Found</h1>
            <p className="mb-6">Sorry, the project you&apos;re looking for doesn&apos;t exist or has been removed.</p>
            <Link href="/projects" className="text-green-500 hover:text-green-400 flex items-center justify-center">
              <ArrowLeft className="mr-2" size={20} />
              Back to Projects
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // Determine impact color
  const getImpactColor = (severity: string) => {
    switch (severity) {
      case 'Critical':
        return 'text-red-500';
      case 'High': 
        return 'text-orange-500';
      case 'Medium':
        return 'text-yellow-500';
      default:
        return 'text-blue-500';
    }
  };

  // Determine impact icon
  const getImpactIcon = (severity: string) => {
    switch (severity) {
      case 'Critical':
        return <AlertTriangle className="mr-2" size={20} />;
      case 'High': 
        return <Zap className="mr-2" size={20} />;
      default:
        return <CheckCircle2 className="mr-2" size={20} />;
    }
  };

  return (
    <main className="min-h-screen bg-black text-gray-300">
      <div className="container mx-auto px-4 py-16">
        {/* Project Header */}
        <div className="mb-12">
          <Link href="/projects" className="text-green-500 hover:text-green-400 flex items-center mb-8">
            <ArrowLeft className="mr-2" size={20} />
            Back to Projects
          </Link>
          
          <div className="flex gap-3 items-center mb-4">
            <span className={`px-3 py-1 rounded-full text-sm ${getImpactColor(project.impactSeverity)} bg-opacity-20 bg-gray-800 flex items-center`}>
              {getImpactIcon(project.impactSeverity)}
              {project.impactSeverity} Severity
            </span>
            <span className="px-3 py-1 bg-green-900/50 text-green-400 rounded-full text-sm flex items-center">
              <Tag size={14} className="mr-1" /> {project.category}
            </span>
            <span className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-sm flex items-center">
              <Calendar size={14} className="mr-1" /> {project.date}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{project.fullTitle}</h1>
          
          <p className="text-xl text-gray-400 mb-8">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span key={index} className="bg-green-900/30 text-green-400 text-xs px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {/* Main Content */}
          <div className="lg:col-span-3 prose prose-lg prose-invert prose-green max-w-none">
            {renderContent(project.content)}
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            <div className="border border-green-800 rounded-lg p-6 bg-green-900/10">
              <h3 className="text-xl font-bold mb-4 text-white">Impact Assessment</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-2">Risk Severity</h4>
                  <div className="flex items-center">
                    <span className={`text-lg font-bold ${getImpactColor(project.impactSeverity)} flex items-center`}>
                      {getImpactIcon(project.impactSeverity)}
                      {project.impactSeverity}
                    </span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-2">Potential Impact</h4>
                  <ul className="space-y-2 text-gray-300">
                    {project.potentialImpacts.map((impact, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        {impact}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-2">Remediation Time</h4>
                  <p className="text-gray-300">{project.remediationTime}</p>
                </div>
              </div>
            </div>
            
            <div className="border border-green-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Need Similar Assessment?</h3>
              <p className="mb-4 text-gray-400">I offer customized security assessments for organizations of all sizes.</p>
              <Link 
                href="/contact" 
                className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded block text-center"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
        
        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="border-t border-green-900 pt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject) => (
                <Link 
                  key={relatedProject.id} 
                  href={`/projects/${relatedProject.id}`} 
                  className="border border-green-800 rounded-lg p-6 hover:bg-green-900/20 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-500">{relatedProject.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white hover:text-green-400 transition-colors">
                    {relatedProject.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-2">{relatedProject.description}</p>
                  
                  <span className="inline-block px-3 py-1 bg-green-900/50 text-green-400 rounded-full text-sm">
                    {relatedProject.category}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
} 