import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '@/components/layout/Layout';
import PageTransition from '@/components/layout/PageTransition';
import { 
  Code2, 
  Database, 
  Layout as LayoutIcon, 
  Server, 
  Brain, 
  GitBranch,
  Terminal,
  Cpu,
  Award,
  GraduationCap,
  Briefcase
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { icon: Code2, name: 'Python', level: 90 },
  { icon: Code2, name: 'Java', level: 85 },
  { icon: Code2, name: 'C', level: 75 },
  { icon: LayoutIcon, name: 'React.js', level: 80 },
  { icon: LayoutIcon, name: 'HTML5/CSS3', level: 90 },
  { icon: Terminal, name: 'JavaScript', level: 85 },
  { icon: Server, name: 'Node.js', level: 75 },
  { icon: Database, name: 'MySQL', level: 85 },
  { icon: Brain, name: 'Machine Learning', level: 80 },
  { icon: Cpu, name: 'Deep Learning', level: 75 },
  { icon: GitBranch, name: 'Git & GitHub', level: 85 },
  { icon: Terminal, name: 'VS Code', level: 90 },
];

const tools = [
  'Git', 'GitHub', 'VS Code', 'ChatGPT', 'GitHub Copilot', 
  'Postman', 'TensorFlow', 'Keras', 'Scikit-learn', 'Maven'
];

const experience = [
  {
    title: 'Full Stack Developer Intern',
    company: 'HMI Engineering',
    period: 'Feb 2023 – June 2023',
    type: 'Remote',
    description: [
      'Developed a three-layered web application using Spring Boot',
      'Designed RESTful APIs for CRUD operations with JSON data exchange',
      'Utilized Postman for API testing and validation',
      'Implemented project setup with Maven and followed Java best practices',
    ],
  },
  {
    title: 'Machine Learning Intern',
    company: 'SkillDzire',
    period: 'June 2024 – July 2024',
    type: 'Remote',
    description: [
      'Trained ML models using Scikit-learn, TensorFlow, and PyTorch',
      'Worked with supervised and unsupervised learning techniques',
      'Performed data preprocessing and feature engineering',
      'Conducted model evaluation using cross-validation and ROC curves',
    ],
  },
];

const education = [
  {
    degree: 'Bachelor of Technology in CSE (AIML)',
    school: 'NRI Institute Of Technology',
    period: 'Nov 2021 – Mar 2025',
    grade: 'CGPA: 7.6/10',
    location: 'Vijayawada, Andhra Pradesh',
  },
  {
    degree: 'Intermediate',
    school: 'Andhra Loyola College',
    period: 'Apr 2019 – Mar 2021',
    grade: 'Percentage: 85.5%',
    location: 'Vijayawada, Andhra Pradesh',
  },
];

const certificates = [
  { name: 'Problem Solving (Basic) in Python', issuer: 'HackerRank' },
  { name: 'Cloud Computing', issuer: 'NPTEL' },
];

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text reveal animation
      gsap.fromTo(
        '.about-text-line',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-text-container',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Skills animation
      gsap.fromTo(
        '.skill-card',
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Timeline animation
      gsap.fromTo(
        '.timeline-entry',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.timeline-container',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      <PageTransition>
        <div ref={aboutRef} className="pt-24">
          {/* Hero */}
          <section className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center overflow-hidden">
                  <div className="w-48 h-48 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-8xl font-bold text-gradient">DC</span>
                  </div>
                </div>
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center"
                >
                  <Code2 className="w-10 h-10 text-primary" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 w-20 h-20 rounded-2xl bg-accent/10 backdrop-blur-sm border border-accent/20 flex items-center justify-center"
                >
                  <Brain className="w-8 h-8 text-accent" />
                </motion.div>
              </motion.div>

              {/* Content */}
              <div className="about-text-container">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-primary font-medium mb-4 block"
                >
                  About Me
                </motion.span>
                <h1 className="about-text-line text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Geddam Deepak Chand
                </h1>
                <p className="about-text-line text-xl text-muted-foreground mb-4">
                  Computer Science graduate specialized in AI/ML with hands-on experience 
                  in Java Full Stack Development and Machine Learning using Python.
                </p>
                <p className="about-text-line text-lg text-muted-foreground mb-6">
                  Skilled in REST APIs, SQL, and data management. Proficient in modern 
                  development workflows using GitHub Copilot, VS Code, ChatGPT and 
                  AI-assisted tools.
                </p>
                <div className="about-text-line flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <span>B.Tech CSE (AIML)</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <span>2 Internships</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="section-container bg-secondary/30">
            <div className="text-center mb-16">
              <span className="text-primary font-medium mb-4 block">My Expertise</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Skills & Technologies
              </h2>
            </div>

            <div className="skills-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="skill-card card-elevated p-5 group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <skill.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-semibold text-foreground">{skill.name}</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tools */}
            <div className="mt-16">
              <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {tools.map((tool) => (
                  <motion.span
                    key={tool}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="skill-badge cursor-pointer"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="section-container">
            <div className="text-center mb-16">
              <span className="text-primary font-medium mb-4 block">Professional Journey</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Experience
              </h2>
            </div>

            <div className="timeline-container max-w-3xl mx-auto">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-entry timeline-item">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-primary font-medium mb-1">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education & Certificates */}
          <section className="section-container bg-secondary/30">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Education */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Education</h2>
                </div>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="card-elevated p-6"
                    >
                      <h3 className="font-semibold text-foreground mb-1">{edu.degree}</h3>
                      <p className="text-primary mb-1">{edu.school}</p>
                      <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                          {edu.grade}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Certificates */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Certificates</h2>
                </div>
                <div className="space-y-4">
                  {certificates.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="card-elevated p-6"
                    >
                      <h3 className="font-semibold text-foreground mb-1">{cert.name}</h3>
                      <p className="text-muted-foreground">{cert.issuer}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </PageTransition>
    </Layout>
  );
};

export default About;
