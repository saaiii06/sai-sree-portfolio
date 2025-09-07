const skillCategories = [
  {
    title: 'Languages',
    icon: '💻',
    skills: [
      { name: 'C++' },
      { name: 'Java' },
      { name: 'Python' },
      { name: 'JavaScript' },
      { name: 'SQL' },
      { name: 'C' },
    ]
  },
  {
    title: 'Frontend Development',
    icon: '🎨',
    skills: [
      { name: 'React.js' },
      { name: 'Tailwind CSS' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript ES6+' },
    ]
  },
  {
    title: 'Tools & Technologies',
    icon: '⚙️',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'VS Code' },
      { name: 'Jupyter Notebook' },
      { name: 'OpenCV' },
      { name: 'YOLOv8' },
    ]
  },
  {
    title: 'Backend & Database',
    icon: '🔧',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'MongoDB' },
      { name: 'DBMS' },
    ]
  },
  {
    title: 'Coursework & Concepts',
    icon: '📚',
    skills: [
      { name: 'Data Structures & Algorithms' },
      { name: 'Database Management Systems' },
      { name: 'Object-Oriented Programming' },
      { name: 'Computer Networks' },
      { name: 'Operating Systems' },
      { name: 'Software Engineering' },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-card">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl text-primary">{category.icon}</span>
                <h3
                  className="text-2xl font-bold tracking-wide drop-shadow-sm gradient-text text-neutral-700 dark:!bg-none dark:!text-white"
                >
                  {category.title}
                </h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center group">
                    <span className="text-base text-muted-foreground font-medium transition-colors group-hover:text-primary group-hover:text-accent cursor-pointer">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;