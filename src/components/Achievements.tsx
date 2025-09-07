import { Trophy, Award, Star, Target } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Smart India Hackathon 2024',
      date: '2024',
      type: 'hackathon',
      description: 'Finalist – Top 5 among 330+ teams (Ministry of Youth Affairs & Sports, NIT Surathkal)',
      impact: 'Developed a secure AI-powered anti-doping investigations dashboard'
    },
    {
      title: 'SEEKH Technical Project Expo',
      date: '2024',
      type: 'competition',
      description: 'Winner – GLWEC Technical Project Expo',
      impact: 'Recognized for innovative project work and technical implementation'
    },
    {
      title: 'Coding Excellence',
      date: 'Ongoing',
      type: 'achievement',
      description: '350+ Problems Solved across platforms',
      impact: 'Showcased strong problem-solving and algorithmic skills'
    },
    {
      title: 'Academic Excellence',
      date: '2023–2024',
      type: 'academic',
      description: 'Top Performer in College DSA Program (Suntech)',
      impact: 'Achieved top rank in the leaderboard for Data Structures & Algorithms'
    },
    {
      title: 'Python Certification',
      date: '2023',
      type: 'certification',
      description: 'Joy of Computing – Python Programming Certification',
      impact: 'Strengthened programming fundamentals and application skills'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'hackathon': return <Trophy className="w-6 h-6" />;
      case 'competition': return <Award className="w-6 h-6" />;
      case 'achievement': return <Target className="w-6 h-6" />;
      case 'academic': return <Star className="w-6 h-6" />;
      case 'certification': return <Award className="w-6 h-6" />;
      default: return <Trophy className="w-6 h-6" />;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'hackathon': return 'text-yellow-400';
      case 'competition': return 'text-purple-400';
      case 'achievement': return 'text-green-400';
      case 'academic': return 'text-blue-400';
      case 'certification': return 'text-orange-400';
      default: return 'text-primary';
    }
  };

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Achievements & Recognition</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Notable accomplishments and certifications
          </p>
        </div>

        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <div key={achievement.title} className="bg-card rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-primary/10 ${getColor(achievement.type)}`}>
                  {getIcon(achievement.type)}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{achievement.title}</h3>
                    <span className="text-sm text-muted-foreground">{achievement.date}</span>
                  </div>
                  <p className="text-primary font-medium mb-2">{achievement.description}</p>
                  <p className="text-muted-foreground text-sm">{achievement.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;