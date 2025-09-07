import { ExternalLink, Github } from 'lucide-react';
import vehicleDetectionImage from '@/assets/vehicle-detection.jpg';
import antiDopingImage from '@/assets/anti-doping-dashboard.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Vehicle Detection and Speed Estimation',
      description: 'Real-time vehicle detection and speed estimation using YOLOv8 and OpenCV. Tracks vehicles, uses line-crossing technique to compute speeds, software-only scalable solution for traffic monitoring.',
      image: vehicleDetectionImage,
      tags: ['YOLOv8', 'OpenCV', 'Python', 'Computer Vision'],
      features: [
        'YOLOv8 object detection',
        'Line-crossing speed calculation',
        'Real-time performance',
        'Accuracy improvements vs sensor-based solutions'
      ],
      year: '2025',
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Anti-Doping Investigations Dashboard',
      description: 'AI-powered dashboard for anti-doping case analysis developed during Smart India Hackathon 2024. Built secure investigative workflows, frontend in React.js, real-time data visualizations, and collaboration features.',
      image: antiDopingImage,
      tags: ['React.js', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Express.js'],
      features: [
        'Secure data handling',
        'Real-time visualizations',
        'Risk-assessment integration',
        'Delivered within 36 hours by 6-person team'
      ],
      year: '2024',
      achievement: 'SIH 2024 Finalist',
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Things I've built so far
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="relative mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {project.year}
                  </span>
                </div>
                {project.achievement && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                      {project.achievement}
                    </span>
                  </div>
                )}
              </div>

              <h3 className="text-xl font-bold mb-3 text-foreground">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-primary">Key Features:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
                <a
                  href={project.demo}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;