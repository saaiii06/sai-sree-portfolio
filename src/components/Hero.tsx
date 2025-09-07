import { Download, ExternalLink, Github, Linkedin } from 'lucide-react';
// Inline LeetCode SVG as React component for color control
const LeetCodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24" {...props}>
    <path d="M13.483 0a1.374 1.374 0 0 0 -0.961 0.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0 -1.209 2.104 5.35 5.35 0 0 0 -0.125 0.513 5.527 5.527 0 0 0 0.062 2.362 5.83 5.83 0 0 0 0.349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193 0.039 0.038c2.248 2.165 5.852 2.133 8.063 -0.074l2.396 -2.392c0.54 -0.54 0.54 -1.414 0.003 -1.955a1.378 1.378 0 0 0 -1.951 -0.003l-2.396 2.392a3.021 3.021 0 0 1 -4.205 0.038l-0.02 -0.019 -4.276 -4.193c-0.652 -0.64 -0.972 -1.469 -0.948 -2.263a2.68 2.68 0 0 1 0.066 -0.523 2.545 2.545 0 0 1 0.619 -1.164L9.13 8.114c1.058 -1.134 3.204 -1.27 4.43 -0.278l3.501 2.831c0.593 0.48 1.461 0.387 1.94 -0.207a1.384 1.384 0 0 0 -0.207 -1.943l-3.5 -2.831c-0.8 -0.647 -1.766 -1.045 -2.774 -1.202l2.015 -2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0 -1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38 -1.382 1.38 1.38 0 0 0 -1.38 -1.382z" />
  </svg>
);
import profileImage from '@/assets/Profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-2">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-[var(--shadow-glow)] floating-animation">
                <img
                  src={profileImage}
                  alt="Sai Sree Gujjari"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-6">
              <p className="text-lg text-muted-foreground mb-2">Hi there! I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                <span className="gradient-text">Sai Sree Gujjari</span>
              </h1>
              {/* Skill badges removed as requested */}
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              I’m an Information Technology undergraduate at GLWEC (2022–2026) and a Smart India Hackathon 2024 Finalist. Skilled in React.js, Tailwind CSS, Python, C++, and SQL, I specialize in building scalable web applications. With 350+ coding problems solved and a strong foundation in data structures and algorithms, I deliver efficient, production-ready solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-card rounded-lg p-4 border border-border/50 hover:border-primary/30 transition-all duration-300">
                <div className="text-2xl font-bold text-primary">350+</div>
                <div className="text-sm text-muted-foreground">Coding Problems Solved</div>
              </div>
              <div className="bg-card rounded-lg p-4 border border-border/50 hover:border-primary/30 transition-all duration-300">
                <div className="text-2xl font-bold text-accent">SIH 2024</div>
                <div className="text-sm text-muted-foreground">Finalist</div>
              </div>
              <div className="bg-card rounded-lg p-4 border border-border/50 hover:border-primary/30 transition-all duration-300">
                <div className="text-2xl font-bold text-primary">8.73</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="https://drive.google.com/file/d/10Ax561cu9vV4WBC7xjtEDqITVi1ap3Bv/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/sai-sree-g-8486a6297/"
                target="_blank"
                rel="noopener noreferrer"
                className="tech-icon"
              >
                <Linkedin className="w-6 h-6 text-primary" />
              </a>
              <a
                href="https://github.com/saaiii06"
                target="_blank"
                rel="noopener noreferrer"
                className="tech-icon"
              >
                <Github className="w-6 h-6 text-primary" />
              </a>
              <a
                href="https://leetcode.com/u/saisree16/"
                target="_blank"
                rel="noopener noreferrer"
                className="tech-icon"
              >
                <LeetCodeIcon className="w-6 h-6 text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;