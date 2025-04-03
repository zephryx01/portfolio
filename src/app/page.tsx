// app/page.tsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, Terminal, Code, Globe, Lock, ChevronRight } from 'lucide-react';

export default function Home() {
  const [text, setText] = useState('');
  const fullText = '> Ethical Hacker. Security Researcher. Content Creator.';
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < fullText.length) {
      const timer = setTimeout(() => {
        setText(fullText.substring(0, count + 1));
        setCount(count + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [count, fullText]);

  return (
    <main className="min-h-screen bg-black text-green-500">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-8 text-4xl md:text-6xl font-bold text-white">
            <h1>ZEPHRYX</h1>
          </div>
          <div className="h-16 mb-8">
            <p className="text-xl md:text-3xl font-mono">{text}</p>
          </div>
          <p className="text-lg md:text-xl mb-12 max-w-2xl">
            I help organizations identify and fix security vulnerabilities before malicious actors can exploit them.
            Certified ethical hacker with 5+ years of experience in penetration testing and security consulting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/projects" className="bg-green-600 hover:bg-green-700 text-black font-bold py-3 px-6 rounded flex items-center">
              View Projects <ChevronRight className="ml-2" size={20} />
            </Link>
            <Link href="/contact" className="bg-transparent hover:bg-green-900 text-green-500 font-semibold py-3 px-6 border border-green-500 rounded flex items-center">
              Contact Me <ChevronRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16 border-t border-green-900">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">SERVICES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Shield size={40} />}
            title="Penetration Testing"
            description="Identify vulnerabilities in your systems before attackers do."
          />
          <ServiceCard 
            icon={<Terminal size={40} />}
            title="Security Audits"
            description="Comprehensive evaluation of your security infrastructure and policies."
          />
          <ServiceCard 
            icon={<Code size={40} />}
            title="Secure Code Review"
            description="Find and fix security flaws in your application's codebase."
          />
          <ServiceCard 
            icon={<Globe size={40} />}
            title="Web App Security"
            description="Protect your web applications from common attacks like XSS and CSRF."
          />
          <ServiceCard 
            icon={<Lock size={40} />}
            title="Security Training"
            description="Educate your team on best security practices and threat awareness."
          />
          <ServiceCard 
            icon={<Terminal size={40} />}
            title="Red Team Operations"
            description="Simulate real-world attacks to test your security defenses."
          />
        </div>
        <div className="text-center mt-12">
          <Link href="/services" className="text-green-500 hover:text-green-400 flex items-center justify-center">
            Learn more about my services <ChevronRight className="ml-1" size={20} />
          </Link>
        </div>
      </div>

      {/* Recent Projects */}
      <div className="container mx-auto px-4 py-16 border-t border-green-900">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">RECENT PROJECTS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard 
            title="Critical Vulnerability in Financial App"
            description="Identified and helped patch a severe authentication bypass that could have compromised user financial data."
            tags={["Web Security", "Authentication", "API Testing"]}
          />
          <ProjectCard 
            title="Healthcare Provider Security Assessment"
            description="Conducted a comprehensive security audit for a healthcare provider, ensuring HIPAA compliance and patient data protection."
            tags={["Network Security", "Compliance", "Data Protection"]}
          />
        </div>
        
        <div className="text-center mt-12">
          <Link href="/projects" className="text-green-500 hover:text-green-400 flex items-center justify-center">
            See all projects <ChevronRight className="ml-1" size={20} />
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to secure your systems?</h2>
          <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
            Let's work together to identify and address your security vulnerabilities before they become problems.
          </p>
          <Link href="/contact" className="bg-black hover:bg-gray-900 text-green-500 font-bold py-3 px-8 rounded inline-flex items-center">
            Get in Touch <ChevronRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </main>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="p-6 border border-green-800 rounded-lg hover:bg-green-900/20 transition duration-300">
      <div className="text-green-500 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function ProjectCard({ title, description, tags }) {
  return (
    <div className="p-6 border border-green-800 rounded-lg hover:bg-green-900/20 transition duration-300">
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-green-900 text-green-400 text-xs px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}