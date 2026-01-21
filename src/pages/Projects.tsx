import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '@/components/layout/Layout';
import PageTransition from '@/components/layout/PageTransition';
import { ExternalLink, Github, Filter } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'Built a PHP-MySQL based E-commerce web application with user login, product management, cart functionality, and comprehensive admin features for inventory and order management.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    category: 'Web',
    date: 'November 2024',
    gradient: 'from-blue-500/20 via-indigo-500/10 to-purple-500/20',
  },
  {
    id: 2,
    title: 'Breast Cancer Classification',
    description: 'Built a CNN-based deep learning model for breast cancer classification using Python and TensorFlow, achieving reliable tumor classification performance using image-based datasets.',
    tech: ['Python', 'Deep Learning', 'CNN', 'Keras', 'TensorFlow', 'NumPy', 'Pandas'],
    category: 'AI/ML',
    date: 'January 2025',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-cyan-500/20',
  },
  {
    id: 3,
    title: 'Spring Boot REST API',
    description: 'Developed a three-layered web application using Spring Boot with model, repository, service, and controller layers. Designed RESTful APIs for CRUD operations on product data.',
    tech: ['Java', 'Spring Boot', 'REST API', 'Maven', 'Postman'],
    category: 'Backend',
    date: 'June 2023',
    gradient: 'from-orange-500/20 via-amber-500/10 to-yellow-500/20',
  },
  {
    id: 4,
    title: 'ML Model Training Pipeline',
    description: 'Trained ML models using Python libraries including Scikit-learn, TensorFlow, and PyTorch. Implemented supervised and unsupervised learning techniques with comprehensive model evaluation.',
    tech: ['Python', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'Pandas'],
    category: 'AI/ML',
    date: 'July 2024',
    gradient: 'from-pink-500/20 via-rose-500/10 to-red-500/20',
  },
];

const categories = ['All', 'Web', 'Backend', 'AI/ML'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((p) => p.category === activeFilter));
    }
  }, [activeFilter]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-card-item',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, projectsRef);

    return () => ctx.revert();
  }, [filteredProjects]);

  return (
    <Layout>
      <PageTransition>
        <div ref={projectsRef} className="pt-24">
          {/* Header */}
          <section className="section-container">
            <div className="max-w-3xl">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-primary font-medium mb-4 block"
              >
                My Work
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl font-bold text-foreground mb-6"
              >
                Featured Projects
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-muted-foreground"
              >
                A collection of projects I've worked on, from web applications to 
                machine learning models. Each project represents my passion for 
                building innovative solutions.
              </motion.p>
            </div>

            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 mt-12"
            >
              <div className="flex items-center gap-2 text-muted-foreground mr-4">
                <Filter className="w-5 h-5" />
                <span className="text-sm font-medium">Filter:</span>
              </div>
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    activeFilter === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-muted'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </section>

          {/* Projects Grid */}
          <section className="section-container pt-8">
            <div className="projects-grid grid md:grid-cols-2 gap-8">
              <AnimatePresence mode="wait">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="project-card-item project-card group"
                  >
                    {/* Project Image */}
                    <div className={`project-image h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.4 }}
                        className="w-24 h-24 rounded-2xl bg-background/90 backdrop-blur flex items-center justify-center shadow-lg"
                      >
                        <span className="text-4xl font-bold text-gradient">
                          {project.id.toString().padStart(2, '0')}
                        </span>
                      </motion.div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur text-sm font-medium text-foreground">
                        {project.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="p-2 rounded-lg bg-secondary hover:bg-muted"
                          >
                            <Github className="w-4 h-4" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="p-2 rounded-lg bg-secondary hover:bg-muted"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-2">
                        {project.date}
                      </p>

                      <p className="text-muted-foreground mb-5 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 text-xs rounded-lg bg-secondary text-secondary-foreground font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-xl text-muted-foreground">
                  No projects found in this category.
                </p>
              </motion.div>
            )}
          </section>
        </div>
      </PageTransition>
    </Layout>
  );
};

export default Projects;
