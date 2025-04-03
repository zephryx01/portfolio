// app/about/page.tsx
import Image from 'next/image';
import { Shield, Award, Book, FileText } from 'lucide-react';
import { ReactNode } from 'react';

export default function About() {
  return (
    <main className="min-h-screen bg-black text-green-500">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-white text-center">ABOUT ME</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="mb-6 relative h-160 w-full">
              {<Image
                src="/images/pic.png"
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
                priority
                className="rounded-lg shadow-lg"
              />}
              <div className="absolute inset-0 bg-green-900/30 border-2 border-green-600 rounded-lg"></div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 border border-green-800 rounded-lg">
                <p className="text-sm text-gray-400">Experience</p>
                <p className="text-xl text-white">5+ Years</p>
              </div>
              <div className="p-4 border border-green-800 rounded-lg">
                <p className="text-sm text-gray-400">Projects</p>
                <p className="text-xl text-white">50+ Completed</p>
              </div>
              <div className="p-4 border border-green-800 rounded-lg">
                <p className="text-sm text-gray-400">Certifications</p>
                <p className="text-xl text-white">CEH, OSCP, CISSP</p>
              </div>
              <div className="p-4 border border-green-800 rounded-lg">
                <p className="text-sm text-gray-400">CTF Rankings</p>
                <p className="text-xl text-white">Top 100</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">Who I Am</h2>
            <p className="text-gray-300 mb-4">
              I'm Zephryx, a certified ethical hacker and cybersecurity professional with over 5 years of experience in identifying and remediating security vulnerabilities for organizations across various industries.
            </p>
            <p className="text-gray-300 mb-4">
              My journey in cybersecurity began when I discovered my passion for understanding how systems work and how they can be protected from malicious attacks. Since then, I've dedicated my career to helping organizations strengthen their security posture and protect their valuable assets.
            </p>
            <p className="text-gray-300 mb-4">
              I specialize in penetration testing, vulnerability assessments, and security auditing. My methodology involves a systematic approach to identifying vulnerabilities, assessing their impact, and providing actionable recommendations for remediation.
            </p>
            <p className="text-gray-300 mb-4">
              When I'm not hacking (ethically, of course), I contribute to open-source security tools, participate in CTF competitions, and share my knowledge through blog posts and community forums.
            </p>
            <p className="text-gray-300 mb-4">
            Beyond cybersecurity, I'm passionate about educating the next generation of ethical hackers. Through my platform, Zephryx Academy, I create practical courses, tutorials, and mentorship programs to help aspiring cybersecurity professionals develop hands-on skills and break into the industry.

            </p>
            <p className="text-gray-300 mb-4">
            As technology evolves, so do cyber threats. That&apos;s why I stay ahead by continuously researching new attack techniques, security trends, and defense strategies. My goal is to empower individuals and organizations with the knowledge and tools needed to stay secure in an ever-changing digital world.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white text-center">TECHNICAL SKILLS</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard
              category="Network Security"
              skills={["Firewall Configuration", "IDS/IPS", "Network Traffic Analysis", "VPN Security"]}
            />
            <SkillCard
              category="Web Application Security"
              skills={["OWASP Top 10", "API Security", "Authentication Testing", "Session Management"]}
            />
            <SkillCard
              category="Infrastructure Security"
              skills={["Cloud Security (AWS, Azure)", "Containerization Security", "Server Hardening", "Privilege Escalation"]}
            />
            <SkillCard
              category="Security Assessment"
              skills={["Vulnerability Scanning", "Penetration Testing", "Risk Assessment", "Compliance Auditing"]}
            />
            <SkillCard
              category="Programming"
              skills={["Python", "Bash Scripting", "JavaScript", "Go", "SQL"]}
            />
            <SkillCard
              category="Tools"
              skills={["Metasploit", "Burp Suite", "Nmap", "Wireshark", "Kali Linux"]}
            />
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white text-center">CERTIFICATIONS</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CertificationCard
              title="Certified Ethical Hacker (CEH)"
              organization="EC-Council"
              year="2021"
              icon={<Shield size={24} />}
            />
            <CertificationCard
              title="Offensive Security Certified Professional (OSCP)"
              organization="Offensive Security"
              year="2022"
              icon={<Award size={24} />}
            />
            <CertificationCard
              title="Certified Information Systems Security Professional (CISSP)"
              organization="(ISC)²"
              year="2023"
              icon={<FileText size={24} />}
            />
            <CertificationCard
              title="CompTIA Security+"
              organization="CompTIA"
              year="2020"
              icon={<Shield size={24} />}
            />
            <CertificationCard
              title="Certified Cloud Security Professional (CCSP)"
              organization="(ISC)²"
              year="2023"
              icon={<Book size={24} />}
            />
            <CertificationCard
              title="Web Application Penetration Tester (WAPT)"
              organization="InfoSec Institute"
              year="2021"
              icon={<Award size={24} />}
            />
          </div>
        </div>

        {/* Journey Timeline */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-white text-center">MY JOURNEY</h2>

          <div className="space-y-8 relative before:absolute before:inset-0 before:h-full before:w-0.5 before:bg-green-800 before:left-6 md:before:left-1/2 before:-translate-x-1/2">
            <TimelineItem
              year="2018"
              title="Started in Cybersecurity"
              description="Began my career as a Security Analyst at TechGuard Solutions, focusing on network monitoring and incident response."
              left={true}
            />
            <TimelineItem
              year="2019"
              title="First Penetration Testing Role"
              description="Joined CyberShield as a Junior Penetration Tester, conducting security assessments for small and medium-sized businesses."
              left={false}
            />
            <TimelineItem
              year="2021"
              title="Lead Security Consultant"
              description="Promoted to Lead Security Consultant at CyberShield, managing a team of security professionals and overseeing major client projects."
              left={true}
            />
            <TimelineItem
              year="2022"
              title="Recognized in the Industry"
              description="Discovered and responsibly disclosed a critical vulnerability in a widely used open-source library, receiving recognition from the security community."
              left={false}
            />
            <TimelineItem
              year="2023"
              title="Founded Security Blog"
              description="Launched my personal security blog to share insights, tutorials, and case studies from my experience in the field."
              left={true}
            />
            <TimelineItem
              year="Present"
              title="Independent Security Consultant"
              description="Currently working as an independent security consultant, helping organizations improve their security posture through strategic guidance and hands-on testing."
              left={false}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

interface SkillCardProps {
  category: string;
  skills: string[];
}

function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <div className="p-6 border border-green-800 rounded-lg hover:bg-green-900/20 transition duration-300">
      <h3 className="text-xl font-bold mb-4 text-white">{category}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-400 flex items-center">
            <span className="mr-2 text-green-500">•</span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface CertificationCardProps {
  title: string;
  organization: string;
  year: string;
  icon: ReactNode;
}

function CertificationCard({ title, organization, year, icon }: CertificationCardProps) {
  return (
    <div className="p-6 border border-green-800 rounded-lg hover:bg-green-900/20 transition duration-300">
      <div className="flex items-center mb-4">
        <div className="text-green-500 mr-3">{icon}</div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-400">{organization}</p>
      <p className="text-gray-500 text-sm">Obtained in {year}</p>
    </div>
  );
}

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  left: boolean;
}

function TimelineItem({ year, title, description, left }: TimelineItemProps) {
  return (
    <div className={`relative flex items-center ${left ? 'flex-row-reverse md:flex-row' : 'flex-row-reverse'} gap-8`}>
      <div className="md:w-1/2 w-5/6">
        <div className="p-6 border border-green-800 rounded-lg hover:bg-green-900/20 transition duration-300">
          <span className="inline-block px-3 py-1 bg-green-900 text-green-400 text-sm rounded-full mb-2">
            {year}
          </span>
          <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
      <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-green-500 -translate-x-1/2"></div>
    </div>
  );
}