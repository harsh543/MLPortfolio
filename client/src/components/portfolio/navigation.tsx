import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? "backdrop-blur-lg shadow-lg" 
          : ""
      }`}
      style={{
        backgroundImage: "linear-gradient(135deg, rgb(102, 126, 234) 0%, rgb(118, 75, 162) 100%)",
        backgroundPositionX: "initial",
        backgroundPositionY: "initial",
        backgroundSize: "initial",
        backgroundRepeat: "initial",
        backgroundAttachment: "initial",
        backgroundOrigin: "initial",
        backgroundClip: "initial"
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-text-primary">
            <span className="text-white">Harsh</span>
            <span className="text-accent-yellow">Bajaj</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="nav-link hover:text-primary-blue transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="nav-link hover:text-primary-blue transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="nav-link hover:text-primary-blue transition-colors duration-300"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="nav-link hover:text-primary-blue transition-colors duration-300"
            >
              Contact
            </button>
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-primary-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
