import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { ExternalLink, Code2 } from 'lucide-react';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' } }
  };

  return (
    <PageTransition>
      <div className="page-container">
        <h2 className="section-title">Featured Projects</h2>
        
        <motion.div 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginTop: '1rem' }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          <motion.div className="card" variants={projectVariants}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-color)', borderRadius: '0.75rem', color: 'var(--accent-color)' }}>
                <Code2 size={28} />
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#" style={{ color: 'var(--text-muted)' }}><GithubIcon size={20} /></a>
                <a href="/techworld.html" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)' }}><ExternalLink size={20} /></a>
              </div>
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>Online Course Project (TechWorld)</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '2rem' }}>
              A comprehensive platform designed for delivering online educational content. It includes features for course management, student enrollment, and interactive learning modules.
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="font-mono" style={{ fontSize: '0.8rem', padding: '0.25rem 0.75rem', backgroundColor: 'var(--bg-color)', borderRadius: '1rem', color: 'var(--accent-color)' }}>React</span>
                <span className="font-mono" style={{ fontSize: '0.8rem', padding: '0.25rem 0.75rem', backgroundColor: 'var(--bg-color)', borderRadius: '1rem', color: 'var(--accent-color)' }}>Node.js</span>
                <span className="font-mono" style={{ fontSize: '0.8rem', padding: '0.25rem 0.75rem', backgroundColor: 'var(--bg-color)', borderRadius: '1rem', color: 'var(--accent-color)' }}>SQL</span>
              </div>
              <a href="/techworld.html" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                Show Project
              </a>
            </div>
          </motion.div>

          <motion.div className="card" variants={projectVariants}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-color)', borderRadius: '0.75rem', color: 'var(--accent-color)' }}>
                <Code2 size={28} />
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#" style={{ color: 'var(--text-muted)' }}><GithubIcon size={20} /></a>
                <a href="#" style={{ color: 'var(--text-muted)' }}><ExternalLink size={20} /></a>
              </div>
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>Automatic Projects</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '2rem' }}>
              Currently working on a series of automated projects aimed at streamlining repetitive tasks and improving overall efficiency through programmatic solutions.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="font-mono" style={{ fontSize: '0.8rem', padding: '0.25rem 0.75rem', backgroundColor: 'var(--bg-color)', borderRadius: '1rem', color: 'var(--accent-color)' }}>Python</span>
              <span className="font-mono" style={{ fontSize: '0.8rem', padding: '0.25rem 0.75rem', backgroundColor: 'var(--bg-color)', borderRadius: '1rem', color: 'var(--accent-color)' }}>Automation</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Projects;
