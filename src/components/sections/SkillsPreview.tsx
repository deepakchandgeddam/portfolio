import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code2, 
  Database, 
  Layout, 
  Server, 
  Brain, 
  GitBranch 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { icon: Code2, name: 'Python', category: 'Programming' },
  { icon: Code2, name: 'Java', category: 'Programming' },
  { icon: Layout, name: 'React.js', category: 'Frontend' },
  { icon: Server, name: 'Node.js', category: 'Backend' },
  { icon: Database, name: 'MySQL', category: 'Database' },
  { icon: Brain, name: 'Machine Learning', category: 'AI/ML' },
  { icon: GitBranch, name: 'Git & GitHub', category: 'Tools' },
  { icon: Layout, name: 'HTML/CSS/JS', category: 'Frontend' },
];

const SkillsPreview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skill-item',
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-container">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-primary font-medium mb-4 block"
        >
          What I Work With
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-foreground"
        >
          Skills & Technologies
        </motion.h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-item card-elevated p-6 text-center group cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <skill.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">{skill.name}</h3>
            <p className="text-sm text-muted-foreground">{skill.category}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsPreview;
