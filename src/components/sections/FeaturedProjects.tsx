import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const featuredProjects = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'Full-stack e-commerce platform with user authentication, product management, cart functionality, and admin features.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    color: 'from-blue-500/20 to-purple-500/20',
  },
  {
    id: 2,
    title: 'Breast Cancer Classification',
    description: 'CNN-based deep learning model for medical image classification achieving reliable tumor classification performance.',
    tech: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Deep Learning'],
    color: 'from-emerald-500/20 to-cyan-500/20',
  },
];

const FeaturedProjects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-reveal',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-container bg-secondary/30">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-medium mb-4 block"
          >
            Featured Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-foreground"
          >
            Recent Projects
          </motion.h2>
        </div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
        >
          View All Projects
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {featuredProjects.map((project) => (
          <motion.div
            key={project.id}
            className="project-reveal project-card group"
            whileHover={{ y: -8 }}
          >
            {/* Project Image Placeholder */}
            <div className={`project-image h-56 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
              <div className="w-20 h-20 rounded-2xl bg-background/80 backdrop-blur flex items-center justify-center">
                <span className="text-3xl font-bold text-gradient">
                  {project.id}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="p-2 rounded-lg bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.div>
              </div>
              <p className="text-muted-foreground mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
