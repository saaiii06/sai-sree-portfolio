import reactLogo from '@/assets/custom/react.png';
import jsLogo from '@/assets/custom/JavaScript.png';
import pythonLogo from '@/assets/custom/python.png';
import tailwindLogo from '@/assets/custom/Tailwind.png';
import cppLogo from '@/assets/custom/C++.png';
import javaLogo from '@/assets/custom/java.png';
import cLogo from '@/assets/custom/C_Programming_Language.png';
import sqlLogo from '@/assets/custom/Sql.png';
import htmlLogo from '@/assets/custom/HTML5.png';
import cssLogo from '@/assets/custom/css.png';
import opencvLogo from '@/assets/custom/open_cv.png';
import yoloLogo from '@/assets/custom/YOLOv8.png';
import gitLogo from '@/assets/custom/Git_icon.png';
import githubLogo from '@/assets/custom/github.png';
import mongoLogo from '@/assets/custom/mongodb.png';
import nodeLogo from '@/assets/custom/nodejs.png';
import expressLogo from '@/assets/custom/express_js.png';
import vscodeLogo from '@/assets/custom/Visual_Studio_Code.png';
import jupyterLogo from '@/assets/custom/jupyter.png';

const techImages: Record<string, string> = {
  'React': reactLogo,
  'JavaScript': jsLogo,
  'Python': pythonLogo,
  'Tailwind': tailwindLogo,
  'C++': cppLogo,
  'Java': javaLogo,
  'C': cLogo,
  'SQL': sqlLogo,
  'HTML5': htmlLogo,
  'CSS3': cssLogo,
  'OpenCV': opencvLogo,
  'YOLOv8': yoloLogo,
  'Git': gitLogo,
  'GitHub': githubLogo,
  'MongoDB': mongoLogo,
  'Node.js': nodeLogo,
  'Express.js': expressLogo,
  'VS Code': vscodeLogo,
  'Jupyter': jupyterLogo,
};

const TechStack = () => {
  const technologies = [
    { name: 'React' },
    { name: 'JavaScript' },
    { name: 'Python' },
    { name: 'Tailwind' },
    { name: 'C++' },
    { name: 'Java' },
    { name: 'C' },
    { name: 'SQL' },
    { name: 'HTML5' },
    { name: 'CSS3' },
    { name: 'OpenCV' },
    { name: 'YOLOv8' },
    { name: 'Git' },
    { name: 'GitHub' },
    { name: 'MongoDB' },
    { name: 'Node.js' },
    { name: 'Express.js' },
    { name: 'VS Code' },
    { name: 'Jupyter' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">My Tech Stack</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I've been working with recently
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-6">
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="tech-icon bg-gradient-to-br from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 flex-shrink-0 p-4 rounded-xl shadow-md"
                  style={{ minWidth: 110, minHeight: 110 }}
                >
                  <div className="flex flex-col items-center justify-center h-full">
                    {techImages[tech.name] ? (
                      <img
                        src={techImages[tech.name]}
                        alt={tech.name}
                        className="mx-auto mb-3"
                        style={{ width: 58, height: 58, objectFit: 'contain', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.10))' }}
                      />
                    ) : (
                      <div className="text-3xl mb-3">?</div>
                    )}
                    <div className="text-sm font-semibold text-foreground whitespace-nowrap mt-1" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.10)' }}>{tech.name}</div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;