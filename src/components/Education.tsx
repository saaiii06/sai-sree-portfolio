const Education = () => {
  const education = [
    {
      institution: 'Gokaraju Lailavathi Womens Engineering College (GLWEC)',
      degree: 'Bachelor of Engineering in Information Technology',
      period: '2022 - 2026',
      location: 'Hyderabad, India',
      grade: 'CGPA: 8.73'
    },
    {
      institution: 'Sri Chaitanya Junior College',
      degree: 'Intermediate (PCM)',
      period: '2020 - 2022',
      location: 'Hyderabad, India',
      grade: 'Score: 976/1000'
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={edu.institution} className="bg-card rounded-xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{edu.institution}</h3>
                  <p className="text-lg text-primary font-medium mb-2">{edu.degree}</p>
                  <p className="text-muted-foreground">{edu.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-foreground font-medium">{edu.period}</p>
                  <p className="text-accent font-semibold">{edu.grade}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;