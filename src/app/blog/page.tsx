// app/blog/page.tsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, Search, Tag, Calendar, User, Clock, ArrowLeft, X } from 'lucide-react';

// Sample blog data - you can replace this with your actual data fetching logic
const blogPosts = [
  {
    id: "1",
    title: "Uncovering a Critical XSS Vulnerability in Popular E-commerce Platform",
    excerpt: "A detailed analysis of how I discovered and responsibly disclosed a severe cross-site scripting vulnerability that could have affected millions of users.",
    date: "March 28, 2025",
    author: "Zephryx",
    readTime: "8 min read",
    tags: ["Web Security", "XSS", "Bug Bounty"],
    featured: true
  },
  {
    id: "2",
    title: "The Rising Threat of Supply Chain Attacks: What Organizations Need to Know",
    excerpt: "An examination of recent supply chain attacks and practical strategies to mitigate risks in your organization's software supply chain.",
    date: "March 15, 2025",
    author: "Zephryx",
    readTime: "6 min read",
    tags: ["Supply Chain", "Risk Management", "Cybersecurity"],
    featured: false
  },
  {
    id: "3",
    title: "Breaking Down the OWASP Top 10 (2024 Edition)",
    excerpt: "A comprehensive look at the latest OWASP Top 10 security risks with real-world examples and mitigation strategies.",
    date: "February 22, 2025",
    author: "Zephryx",
    readTime: "12 min read",
    tags: ["OWASP", "Web Security", "Best Practices"],
    featured: false
  },
  {
    id: "4",
    title: "Securing APIs in the Age of Microservices",
    excerpt: "How to implement proper authentication, authorization, and input validation for APIs in microservice architectures.",
    date: "February 8, 2025",
    author: "Zephryx",
    readTime: "7 min read",
    tags: ["API Security", "Microservices", "OAuth"],
    featured: false
  },
  {
    id: "5",
    title: "Threat Hunting: Beyond Traditional Security Monitoring",
    excerpt: "Advanced techniques for proactively searching through networks and datasets to detect threats that evade traditional security solutions.",
    date: "January 17, 2025",
    author: "Zephryx",
    readTime: "9 min read",
    tags: ["Threat Hunting", "SOC", "Security Monitoring"],
    featured: false
  }
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [searchResults, setSearchResults] = useState(blogPosts);
  const [isSearching, setIsSearching] = useState(false);

  // Extract all unique tags from blog posts
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  // Update search results whenever search term or selected tag changes
  useEffect(() => {
    setIsSearching(true);
    
    // Simulate a small delay to show the searching state
    const timer = setTimeout(() => {
      const filtered = blogPosts.filter(post => {
        const matchesSearch = searchTerm === '' || 
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        
        const matchesTag = selectedTag === '' || post.tags.includes(selectedTag);
        
        return matchesSearch && matchesTag;
      });
      
      setSearchResults(filtered);
      setIsSearching(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [searchTerm, selectedTag]);

  // Get featured post
  const featuredPost = blogPosts.find(post => post.featured);
  
  // Handle search clear
  const clearSearch = () => {
    setSearchTerm('');
  };
  
  return (
    <main className="min-h-screen bg-black text-green-500">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16 border-b border-green-900">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-8 text-4xl md:text-6xl font-bold text-white">
            <h1>BLOG</h1>
          </div>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Insights, tutorials, and updates from the front lines of cybersecurity. 
            Learn about the latest vulnerabilities, attack techniques, and defense strategies.
          </p>
          <div className="w-full max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full bg-black border border-green-700 rounded-lg py-3 px-4 pl-12 pr-10 text-green-400 focus:outline-none focus:border-green-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-4 top-3.5 text-green-600" size={20} />
              {searchTerm && (
                <button 
                  onClick={clearSearch}
                  className="absolute right-3 top-3 text-gray-400 hover:text-green-500 transition-colors"
                  aria-label="Clear search"
                >
                  <X size={20} />
                </button>
              )}
            </div>
            
            {searchTerm && (
              <div className="mt-2 text-left text-sm text-gray-400">
                {isSearching ? (
                  <span>Searching...</span>
                ) : (
                  <span>Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{searchTerm}"</span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tags Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap items-center gap-3">
          <Tag className="text-green-600" size={20} />
          <button 
            className={`px-3 py-1 rounded-full text-sm ${selectedTag === '' ? 'bg-green-600 text-black font-bold' : 'bg-green-900/30 text-green-400 hover:bg-green-900/50'}`}
            onClick={() => setSelectedTag('')}
          >
            All
          </button>
          {allTags.map((tag, index) => (
            <button 
              key={index} 
              className={`px-3 py-1 rounded-full text-sm ${selectedTag === tag ? 'bg-green-600 text-black font-bold' : 'bg-green-900/30 text-green-400 hover:bg-green-900/50'}`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Post Section (if there is one and no search is active) */}
      {featuredPost && !searchTerm && selectedTag === '' && (
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6 text-white">FEATURED ARTICLE</h2>
          <div className="border border-green-800 rounded-lg p-6 hover:bg-green-900/20 transition duration-300">
            <h3 className="text-2xl font-bold mb-3 text-white">{featuredPost.title}</h3>
            <p className="text-gray-400 mb-4">{featuredPost.excerpt}</p>
            <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 gap-4">
              <div className="flex items-center">
                <Calendar size={16} className="mr-1 text-green-600" />
                {featuredPost.date}
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-1 text-green-600" />
                {featuredPost.author}
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1 text-green-600" />
                {featuredPost.readTime}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {featuredPost.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-green-900 text-green-400 text-xs px-3 py-1 rounded-full cursor-pointer hover:bg-green-800"
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link href={`/blog/${featuredPost.id}`} className="text-green-500 hover:text-green-400 flex items-center font-bold">
              Read Full Article <ChevronRight className="ml-1" size={20} />
            </Link>
          </div>
        </div>
      )}

      {/* Blog Posts List */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-white">
          {searchTerm || selectedTag ? 'SEARCH RESULTS' : 'ALL ARTICLES'}
        </h2>
        
        {isSearching ? (
          <div className="flex justify-center py-12">
            <div className="animate-pulse text-green-500">Searching...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {searchResults.length > 0 ? (
              searchResults.map(post => (
                <div key={post.id} className="border border-green-800 rounded-lg p-6 hover:bg-green-900/20 transition duration-300">
                  <h3 className="text-xl font-bold mb-3 text-white">{post.title}</h3>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 gap-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1 text-green-600" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User size={16} className="mr-1 text-green-600" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1 text-green-600" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="bg-green-900 text-green-400 text-xs px-3 py-1 rounded-full cursor-pointer hover:bg-green-800"
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedTag(tag);
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/blog/${post.id}`} className="text-green-500 hover:text-green-400 flex items-center font-bold">
                    Read Full Article <ChevronRight className="ml-1" size={20} />
                  </Link>
                </div>
              ))
            ) : (
              <div className="col-span-2 text-center py-12">
                <p className="text-gray-400 mb-4">No articles found. Try a different search term or tag.</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedTag('');
                  }}
                  className="px-4 py-2 bg-green-900 text-green-400 rounded hover:bg-green-800 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Back to Home Link */}
      <div className="container mx-auto px-4 py-8 border-t border-green-900">
        <Link href="/" className="text-green-500 hover:text-green-400 flex items-center">
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </Link>
      </div>
    </main>
  );
}