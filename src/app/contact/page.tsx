// app/contact/page.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowLeft } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In a real app, you'd send this data to your backend or a form service
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus({ 
        success: true, 
        message: 'Message sent successfully! I\'ll get back to you soon.' 
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus({ 
        success: false, 
        message: 'There was an error sending your message. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-green-500">
      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-green-500 hover:text-green-400 mb-8">
          <ArrowLeft size={20} className="mr-2" /> Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">CONTACT</h1>
        <p className="text-lg mb-12 max-w-2xl">
          Have a security concern or interested in working together? Get in touch with me 
          using the form below or through one of my contact channels.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="border border-green-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-white">Send a Message</h2>
            
            {submitStatus.message && (
              <div className={`mb-6 p-4 rounded ${submitStatus.success ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-green-800 rounded p-3 text-white focus:border-green-500 focus:outline-none"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-green-800 rounded p-3 text-white focus:border-green-500 focus:outline-none"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-green-800 rounded p-3 text-white focus:border-green-500 focus:outline-none"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-black border border-green-800 rounded p-3 text-white focus:border-green-500 focus:outline-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-green-600 hover:bg-green-700 text-black font-bold py-3 px-6 rounded flex items-center justify-center w-full md:w-auto"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <Send className="ml-2" size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white">Contact Info</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="mr-4 text-green-500" size={24} />
                <div>
                  <h3 className="font-bold text-white mb-1">Email</h3>
                  <p>contact@zephryx-security.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="mr-4 text-green-500" size={24} />
                <div>
                  <h3 className="font-bold text-white mb-1">Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="mr-4 text-green-500" size={24} />
                <div>
                  <h3 className="font-bold text-white mb-1">Location</h3>
                  <p>San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-white">Connect</h2>
              
              <div className="flex space-x-4">
                <a href="https://github.com/zephryx01" target="_blank" rel="noopener noreferrer" className="p-3 border border-green-800 rounded-full hover:bg-green-900/30 transition duration-300">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/zephryx" target="_blank" rel="noopener noreferrer" className="p-3 border border-green-800 rounded-full hover:bg-green-900/30 transition duration-300">
                  <Linkedin size={24} />
                </a>
                <a href="https://twitter.com/zephryx01" target="_blank" rel="noopener noreferrer" className="p-3 border border-green-800 rounded-full hover:bg-green-900/30 transition duration-300">
                  <Twitter size={24} />
                </a>
              </div>
              
              <div className="mt-12 p-6 border border-green-800 rounded-lg bg-green-900/10">
                <h3 className="text-xl font-bold mb-3 text-white">Security Research Disclosure</h3>
                <p className="text-gray-400">
                  If you need to securely disclose a vulnerability, please encrypt your communications using my PGP key available on my GitHub profile. Include "[SECURITY]" in the subject line for priority handling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}