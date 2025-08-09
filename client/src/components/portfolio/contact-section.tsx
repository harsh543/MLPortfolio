import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.3 });

  const contactInfo = {
    name: "Harsh P. Bajaj",
    title: "Software Engineer II at Microsoft | Specializing in AI Infrastructure & Production ML Systems",
    location: "Redmond, WA",
    email: "harshpbajaj@yahoo.co.in",
    phone: "(206) 825-0909",
    linkedin: "https://linkedin.com/in/harshbajaj543",
    github: "https://github.com/harsh543",
    devpost: "https://devpost.com/harshrocks"
  };

  // Custom Devpost Icon Component
  const DevpostIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.002 1.61L0 12.004L6.002 22.39h11.996L24 12.004L17.998 1.61H6.002zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595V5.694zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853H10.112z"/>
    </svg>
  );

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 animate-on-scroll ${isVisible ? "animate" : ""}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">Get In Touch</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Ready to discuss your next ML project or collaboration opportunity? 
            Let's build something impactful together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`animate-on-scroll ${isVisible ? "animate" : ""}`}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">{contactInfo.name}</h3>
                <p className="text-lg text-text-secondary mb-6">{contactInfo.title}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-blue bg-opacity-10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-blue" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold text-text-primary">Location</h4>
                    <MapPin className="w-4 h-4 text-primary-blue" />
                    <p className="text-text-secondary">{contactInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-blue bg-opacity-10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-blue" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold text-text-primary">Email</h4>
                    <span className="text-primary-blue font-bold text-lg">@</span>
                    <a 
                      href={`mailto:${contactInfo.email}`} 
                      className="text-text-secondary hover:text-primary-blue transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="font-semibold text-text-primary mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors group"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors group"
                    title="GitHub Profile"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={contactInfo.devpost}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 group"
                    title="Devpost Portfolio"
                  >
                    <DevpostIcon />
                  </a>
                </div>
                <p className="text-sm text-text-secondary mt-3">
                  Check out my hackathon projects and innovative solutions on Devpost
                </p>
              </div>
            </div>
          </div>

          <div className={`animate-on-scroll ${isVisible ? "animate" : ""}`}>
            <div className="bg-bg-section p-8 rounded-2xl shadow-lg">
              <h4 className="text-xl font-semibold text-text-primary mb-6">Let's Collaborate</h4>
              <div className="space-y-6">
                <div className="border-l-4 border-primary-blue pl-6">
                  <h5 className="font-semibold text-text-primary">Enterprise ML Solutions</h5>
                  <p className="text-text-secondary">
                    Scale your machine learning initiatives with production-ready infrastructure and best practices.
                  </p>
                </div>
                <div className="border-l-4 border-accent-yellow pl-6">
                  <h5 className="font-semibold text-text-primary">AI System Architecture</h5>
                  <p className="text-text-secondary">
                    Design and implement robust AI systems that deliver measurable business value at enterprise scale.
                  </p>
                </div>
                <div className="border-l-4 border-primary-blue pl-6">
                  <h5 className="font-semibold text-text-primary">Technical Leadership</h5>
                  <p className="text-text-secondary">
                    Lead ML engineering teams and establish best practices for production AI development.
                  </p>
                </div>
              </div>
              
              <div className="pt-6">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="w-full bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 text-center block"
                >
                  Start a Conversation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center pt-16 mt-16 border-t border-gray-200 animate-on-scroll ${isVisible ? "animate" : ""}`}>
          <p className="text-text-secondary">
            © 2025 {contactInfo.name}. Building the future of production ML systems.
          </p>
        </div>
      </div>
    </section>
  );
}
