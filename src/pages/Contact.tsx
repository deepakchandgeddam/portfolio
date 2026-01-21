import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '@/components/layout/Layout';
import PageTransition from '@/components/layout/PageTransition';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'deepakchand1207@gmail.com',
    href: 'mailto:deepakchand1207@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7396395261',
    href: 'tel:+917396395261',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Vijayawada, Andhra Pradesh, India',
    href: null,
  },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/' },
  { icon: Mail, label: 'Email', href: 'mailto:deepakchand1207@gmail.com' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header text reveal
      gsap.fromTo(
        '.contact-reveal',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );

      // Form animation
      gsap.fromTo(
        '.form-reveal',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.3,
          ease: 'power3.out',
        }
      );

      // Info animation
      gsap.fromTo(
        '.info-reveal',
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.4,
          ease: 'power3.out',
        }
      );
    }, contactRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <PageTransition>
        <div ref={contactRef} className="pt-24">
          {/* Header */}
          <section className="section-container">
            <div className="max-w-3xl">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="contact-reveal text-primary font-medium mb-4 block"
              >
                Get in Touch
              </motion.span>
              <h1 className="contact-reveal text-5xl md:text-6xl font-bold text-foreground mb-6">
                Let's Work Together
              </h1>
              <p className="contact-reveal text-xl text-muted-foreground">
                I'm currently open to new opportunities and would love to hear 
                from you. Whether you have a project in mind, a question, or 
                just want to say hello, feel free to reach out!
              </p>
            </div>
          </section>

          {/* Contact Content */}
          <section className="section-container pt-8">
            <div className="grid lg:grid-cols-5 gap-16">
              {/* Form */}
              <div className="form-reveal lg:col-span-3">
                <div className="card-elevated p-8 md:p-10">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                        <CheckCircle className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="text-2xl font-semibold text-foreground mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. I'll get back to you soon.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className={`block text-sm font-medium mb-2 transition-colors ${
                            focusedField === 'name'
                              ? 'text-primary'
                              : 'text-foreground'
                          }`}
                        >
                          Your Name
                        </label>
                        <motion.input
                          whileFocus={{ scale: 1.01 }}
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="form-input"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className={`block text-sm font-medium mb-2 transition-colors ${
                            focusedField === 'email'
                              ? 'text-primary'
                              : 'text-foreground'
                          }`}
                        >
                          Email Address
                        </label>
                        <motion.input
                          whileFocus={{ scale: 1.01 }}
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="form-input"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className={`block text-sm font-medium mb-2 transition-colors ${
                            focusedField === 'message'
                              ? 'text-primary'
                              : 'text-foreground'
                          }`}
                        >
                          Message
                        </label>
                        <motion.textarea
                          whileFocus={{ scale: 1.01 }}
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          required
                          rows={6}
                          className="form-input resize-none"
                          placeholder="Tell me about your project or just say hello..."
                        />
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="btn-primary w-full group"
                      >
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </form>
                  )}
                </div>
              </div>

              {/* Contact Info */}
              <div className="info-reveal lg:col-span-2 space-y-8">
                {/* Contact Details */}
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {info.href ? (
                        <a
                          href={info.href}
                          className="flex items-start gap-4 group"
                        >
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                            <info.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">
                              {info.label}
                            </p>
                            <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {info.value}
                            </p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <info.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">
                              {info.label}
                            </p>
                            <p className="font-medium text-foreground">
                              {info.value}
                            </p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-8 border-t border-border">
                  <h3 className="font-semibold text-foreground mb-6">
                    Connect with me
                  </h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted hover:border-primary/30 transition-all"
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="card-elevated p-6"
                >
                <div className="flex items-center gap-3 mb-3">
                    <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                    <span className="font-medium text-foreground">
                      Available for Work
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    I'm currently looking for new opportunities as a Full Stack 
                    Developer or ML Engineer.
                  </p>
                  <a
                    href="mailto:deepakchand1207@gmail.com"
                    className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
                  >
                    Let's talk
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </PageTransition>
    </Layout>
  );
};

export default Contact;
