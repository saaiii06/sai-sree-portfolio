import { Calendar, MapPin, Trophy, GraduationCap } from 'lucide-react';

const Experience = () => {
  const education = [
    {
      institution: 'Gokaraju Lailavathi Womens Engineering College (GLWEC)',
      degree: 'Bachelor of Engineering in Information Technology',
      period: '2022 - 2026',
      location: 'Hyderabad, India',
      grade: 'CGPA: 8.73',
      type: 'education'
    },
    {
      institution: 'Sri Chaitanya Junior College',
      degree: 'Intermediate (PCM)',
      period: '2020 - 2022',
      location: 'India',
      grade: 'Score: 976/1000',
      type: 'education'
    }
  ];

  const achievements = [
    {
      title: 'Smart India Hackathon 2024 - Finalist',
      description: 'Reached finals among 330+ teams nationwide. Led frontend development for Anti-Doping Investigations Dashboard using React.js, Tailwind CSS, and delivered within 36 hours.',
      date: '2024',
      type: 'hackathon',
      impact: 'Top 5 teams nationally'
    },
    {
      title: 'GLWEC Technical Project Expo - Winner',
      description: 'Won the SEEKH Technical Project Expo for innovative project demonstration and technical excellence.',
      date: '2024',
      type: 'competition',
      impact: 'College-level recognition'
    },
    {
      title: 'DSA Leaderboard Topper',
      description: 'Achieved top position in college DSA program (Suntech) with 350+ coding problems solved across various platforms.',
      date: '2023-2024',
      type: 'academic',
      impact: '350+ problems solved'
    },
    {
      title: 'Python Certification',
      description: 'Completed "Joy of Computing" Python certification course with distinction.',
      date: '2023',
      type: 'certification',
      impact: 'Technical skill validation'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-5 h-5" />;
      case 'hackathon':
      case 'competition':
        return <Trophy className="w-5 h-5" />;
      default:
        return <Trophy className="w-5 h-5" />;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'text-primary';
      case 'hackathon':
        return 'text-accent';
      case 'competition':
        return 'text-purple-400';
      default:
        return 'text-primary';
    }
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Experience & Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border border-border/50">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-primary font-medium mb-2">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium inline-block">
                    {edu.grade}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-3">
              <Trophy className="w-6 h-6 text-accent" />
              Achievements & Certifications
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border border-border/50">
                  <div className="flex items-start gap-4">
                    <div className={`${getColor(achievement.type)} mt-1`}>
                      {getIcon(achievement.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-foreground">
                          {achievement.title}
                        </h4>
                        <span className="text-sm text-muted-foreground">{achievement.date}</span>
                      </div>
                      <p className="text-muted-foreground mb-3 leading-relaxed">
                        {achievement.description}
                      </p>
                      <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium inline-block">
                        {achievement.impact}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;