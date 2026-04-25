import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';
import { Download, FileText } from 'lucide-react';
import './Home.css';
import profileImg from '../assets/profile.jpg';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Home = () => {
  const subtitleText = "Frontend Web Developer & Software Engineer";
  
  return (
    <PageTransition>
      <div className="home-container">
        <motion.a 
          href="mailto:vidyasirimane@gmail.com?subject=Job%20Inquiry" 
          className="btn btn-primary hire-me-btn"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: 'spring' }}
        >
          Hire Me
        </motion.a>
        
        <div className="hero-content">
          <div className="hero-text">
            <motion.h1 
              className="name-primary"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, type: 'spring' }}
            >
              Vidya Sirimane
            </motion.h1>
            
            <motion.h2 
              className="name-secondary font-mono"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, type: 'spring' }}
            >
              &lt;Vidyashree P C /&gt;
            </motion.h2>
            
            <motion.div 
              className="hero-subtitle"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.03, delayChildren: 0.4 }
                }
              }}
            >
              {subtitleText.split('').map((char, index) => (
                <motion.span 
                  key={index} 
                  variants={{
                    hidden: { opacity: 0, y: 5 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, type: 'spring' }}
            >
              <a href="/resume.png" download className="btn btn-primary">
                <Download size={20} />
                Download Resume
              </a>
              <Link to="/resume" className="btn btn-outline">
                <FileText size={20} />
                View Resume
              </Link>
            </motion.div>
            
            <motion.div 
              className="social-links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <GithubIcon size={20} /> <span>GitHub</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <LinkedinIcon size={20} /> <span>LinkedIn</span>
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
          >
            <div className="image-glow-wrapper">
              <img src={profileImg} alt="Vidya Sirimane" className="profile-image" />
              <div className="glow-ring"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;
