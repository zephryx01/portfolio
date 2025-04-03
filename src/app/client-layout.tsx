'use client'

import Link from 'next/link';
import { Shield, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className="bg-black/90 backdrop-blur-sm py-4 sticky top-0 z-50 border-b border-green-900">
        <nav className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Shield className="text-green-500 mr-2" size={24} />
            <span className="text-white text-xl font-bold">ZEPHRYX</span>
          </Link>
          
          <ul className="hidden md:flex space-x-8">
            <li><NavLink href="/">Home</NavLink></li>
            <li><NavLink href="/about">About</NavLink></li>
            <li><NavLink href="/blog">Blog</NavLink></li>
            <li><NavLink href="/services">Services</NavLink></li>
            <li><NavLink href="/projects">Projects</NavLink></li>
            <li><NavLink href="/contact">Contact</NavLink></li>
          </ul>
          
          <button 
            className="md:hidden text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 border-b border-green-900">
            <ul className="container mx-auto px-4 py-4 space-y-4">
              <li><MobileNavLink href="/" onClick={toggleMobileMenu}>Home</MobileNavLink></li>
              <li><MobileNavLink href="/about" onClick={toggleMobileMenu}>About</MobileNavLink></li>
              <li><MobileNavLink href="/blog" onClick={toggleMobileMenu}>Blog</MobileNavLink></li>
              <li><MobileNavLink href="/services" onClick={toggleMobileMenu}>Services</MobileNavLink></li>
              <li><MobileNavLink href="/projects" onClick={toggleMobileMenu}>Projects</MobileNavLink></li>
              <li><MobileNavLink href="/contact" onClick={toggleMobileMenu}>Contact</MobileNavLink></li>
            </ul>
          </div>
        )}
      </header>
      
      {children}
      
      <footer className="bg-black text-gray-400 py-12 border-t border-green-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="text-green-500 mr-2" size={24} />
                <span className="text-white text-xl font-bold">ZEPHRYX</span>
              </div>
              <p className="mb-4">Ethical Hacker & Security Researcher</p>
              <div className="flex space-x-4">
                <a href="https://github.com/zephryx01" target='__blank' className="text-gray-400 hover:text-green-500 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/zephryx" target='__blank' className="text-gray-400 hover:text-green-500 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://x.com/zephryx01" target='__blank' className="text-gray-400 hover:text-green-500 transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-green-500 transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-green-500 transition-colors">About</Link></li>
                <li><Link href="/services" className="hover:text-green-500 transition-colors">Services</Link></li>
                <li><Link href="/projects" className="hover:text-green-500 transition-colors">Projects</Link></li>
                <li><Link href="/blog" className="hover:text-green-500 transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-green-500 transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Contact Info</h3>
              <p className="mb-2">contact@zephryx.com</p>
              <p>Available for security consulting and penetration testing projects.</p>
            </div>
          </div>
          
          <div className="border-t border-green-900 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Zephryx. All rights reserved.</p>
            <p className="text-sm mt-2">Ethical hacking for a secure digital world.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-gray-300 hover:text-green-500 transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></span>
    </Link>
  );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link 
      href={href} 
      className="block text-gray-300 hover:text-green-500 transition-colors text-lg py-1"
      onClick={onClick}
    >
      {children}
    </Link>
  );
} 