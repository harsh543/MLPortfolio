import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useAnimatedCounter } from "@/hooks/use-animated-counter";
import harshPhoto from "@assets/1516853437370_1754734932722.jpeg";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.3 });

  // Animated counters
  const dailyDataPB = useAnimatedCounter(10, 2000, isVisible); // Petabytes/day
  const availability = useAnimatedCounter(99.99, 2000, isVisible);
  const productivity = useAnimatedCounter(60, 2000, isVisible);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="hero-gradient min-h-screen flex items-center text-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Top grid: headline + photo */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div className={`space-y-6 animate-on-scroll ${isVisible ? "animate" : ""}`}>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight">
              Software Engineer II
              <span className="block text-accent-yellow text-2xl sm:text-3xl lg:text-5xl mt-1">
                → Senior ML Engineer
              </span>
              <span className="block text-accent-yellow text-xl sm:text-2xl lg:text-4xl mt-1">
                &amp; MLOps Infrastructure
              </span>
            </h1>

            <h2 className="text-xl lg:text-2xl font-light text-gray-100 max-w-2xl">
              Building production-scale ML systems with enterprise-grade reliability.
            </h2>

            <p className="text-lg lg:text-xl text-gray-200 max-w-2xl">
              Specialized in Agentic AI, Vector Search, and end-to-end MLOps at Microsoft—shipping
              systems that operate at <span className="font-semibold">petabyte-scale</span> with{" "}
              <span className="font-semibold">99.99% availability</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-accent-yellow text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 text-center"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Photo */}
          <div className={`space-y-8 animate-on-scroll ${isVisible ? "animate" : ""}`}>
            <div className="w-full max-w-md mx-auto lg:max-w-lg">
              <div className="relative">
                <img
                  src={harshPhoto}
                  alt="Harsh P. Bajaj - Senior ML Engineer"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-square"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Animated Statistics */}
        <div className={`grid md:grid-cols-3 gap-8 mt-20 animate-on-scroll ${isVisible ? "animate" : ""}`}>
          <div className="text-center">
            <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl lg:text-4xl font-bold text-accent-yellow mb-2">
                {dailyDataPB}PB+
              </div>
              <div className="text-lg font-semibold">Data Volume</div>
              <div className="text-sm text-gray-200">Processed per day</div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl lg:text-4xl font-bold text-accent-yellow mb-2">
                {availability}%
              </div>
              <div className="text-lg font-semibold">System Availability</div>
              <div className="text-sm text-gray-200">Enterprise-grade uptime</div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl lg:text-4xl font-bold text-accent-yellow mb-2">
                {productivity}%
              </div>
              <div className="text-lg font-semibold">Productivity Gains</div>
              <div className="text-sm text-gray-200">AI-driven automation</div>
            </div>
          </div>
        </div>
      </div> {/* <-- close .max-w-6xl */}
    </section>
  );
}
