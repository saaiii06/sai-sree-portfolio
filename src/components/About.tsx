import { GraduationCap, Award, Code, Heart } from 'lucide-react';
import LeetCodeLogo from '../assets/custom/leetcode.svg';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know me better
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Bio */}
          <div className="lg:col-span-2">
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm currently pursuing my Bachelor of Engineering in Information Technology at 
                Gokaraju Lailavathi Womens Engineering College (GLWEC), Hyderabad, with a CGPA of 8.73. 
                My journey in tech has been driven by curiosity and a passion for solving real-world problems.
              </p>
              
              <p>
                As a Smart India Hackathon 2024 finalist, I had the opportunity to work under pressure 
                and deliver innovative solutions within tight deadlines. This experience reinforced my 
                love for collaborative, high-pressure environments where creativity and technical skills 
                come together to create impactful solutions.
              </p>
              
              <p>
                My expertise spans across frontend development with React.js and Tailwind CSS, backend 
                technologies like Node.js and MongoDB, and computer vision applications using Python, 
                OpenCV, and YOLOv8. I've solved over 350 coding problems, which has sharpened my 
                problem-solving abilities and algorithmic thinking.
              </p>
              
              <p>
                I'm passionate about creating production-ready applications that not only look great 
                but also provide excellent user experiences. I'm always open to internships, 
                collaborations, and freelance opportunities where I can contribute my skills and 
                continue learning.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">What I Love</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5 text-primary" />
                  <span>Designing seamless digital experiences</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-accent" />
                  <span>Solving Complex Problems</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span>Hackathon Challenges</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-accent" />
                  <span>Continuous Learning</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 sticky top-24">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Contact Info</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-primary mb-1">Email</div>
                  <a 
                    href="mailto:saisreegujjari@gmail.com"
                    className="text-muted-foreground hover:text-foreground transition-colors break-all"
                  >
                    saisreegujjari@gmail.com
                  </a>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-primary mb-1">Phone</div>
                  <a 
                    href="tel:+919948120707"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    +91 9948120707
                  </a>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-primary mb-1">Location</div>
                  <span className="text-muted-foreground">
                    Hyderabad, India
                  </span>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-primary mb-1">Availability</div>
                  <span className="text-muted-foreground">
                    Open to new opportunities and freelance projects
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border/50">
                <div className="text-sm font-medium text-primary mb-3">Connect With Me</div>
                <div className="space-y-2">
                  <a 
                    href="https://www.linkedin.com/in/sai-sree-g-8486a6297/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://github.com/saaiii06" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://leetcode.com/u/saisree16/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    LeetCode
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;