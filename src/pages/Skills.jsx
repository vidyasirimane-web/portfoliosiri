import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import Card from '../components/Card';

// Inline SVG icons for each skill
const SkillIcons = {
  'Visual Studio': (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
      <path d="M17 1.5L3 9v6l14 7.5L21 20V4L17 1.5z" fill="#5C2D91"/>
      <path d="M3 9l9 3-9 6V9z" fill="#854cc7"/>
      <path d="M21 4l-9 8 9 8V4z" fill="#fff" opacity="0.2"/>
    </svg>
  ),
  'SQL': (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
      <ellipse cx="12" cy="7" rx="9" ry="3" fill="#00758f"/>
      <path d="M3 7v5c0 1.66 4.03 3 9 3s9-1.34 9-3V7" fill="#00758f" opacity="0.8"/>
      <path d="M3 12v5c0 1.66 4.03 3 9 3s9-1.34 9-3v-5" fill="#00758f" opacity="0.6"/>
    </svg>
  ),
  'Python': (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
      <path d="M12 2C6.48 2 7 4.5 7 4.5V7h5v1H5S2 7.5 2 12s3 4 3 4h2v-2.5S6.5 11 9 11h6s3 .5 3-3V5.5C18 4 15.52 2 12 2zm-1 2.5c.83 0 1.5.67 1.5 1.5S11.83 7.5 11 7.5 9.5 6.83 9.5 6s.67-1.5 1.5-1.5z" fill="#3776ab"/>
      <path d="M12 22c5.52 0 5-2.5 5-2.5V17H12v-1h7s3-.5 3-5-3-4-3-4h-2v2.5S17.5 13 15 13H9s-3-.5-3 3v3.5C6 20 8.48 22 12 22zm1-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" fill="#ffd43b"/>
    </svg>
  ),
  'React': (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
      <circle cx="12" cy="12" r="2.5" fill="#61dafb"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" strokeWidth="1.2" fill="none"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
    </svg>
  ),
  'JavaScript': (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
      <rect width="24" height="24" rx="3" fill="#f7df1e"/>
      <text x="4" y="20" fontSize="14" fontWeight="bold" fill="#000">JS</text>
    </svg>
  ),
  'HTML/CSS': (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
      <path d="M3 2l1.8 20 7.2 2 7.2-2L21 2H3z" fill="#e44d26"/>
      <path d="M12 20.5V4.5H3.5L5 18.5l7 2z" fill="#f16529" opacity="0.5"/>
      <path d="M8 8h4l-.5 5-3.5 1-3.5-1-.2-2.5H7l.1 1.3 1.9.5 1.9-.5.2-2.3H5.5L5 8z" fill="#fff"/>
    </svg>
  ),
};

const SoftIcons = {
  'Communication': '🗣️',
  'Project Management': '📋',
  'Time Management': '⏱️',
  'Problem Solving': '🧩',
  'Teamwork': '🤝',
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 120 } }
};

const technicalSkills = ['Visual Studio', 'SQL', 'Python', 'React', 'JavaScript', 'HTML/CSS'];
const softSkills = ['Communication', 'Project Management', 'Time Management', 'Problem Solving', 'Teamwork'];

const Skills = () => {
  return (
    <PageTransition>
      <div className="page-container">
        <h2 className="section-title">My Skills</h2>

        {/* Technical Skills - Bento Icon Cards */}
        <h3 style={{ fontSize: '1.3rem', color: 'var(--text-muted)', marginBottom: '1.5rem', fontWeight: '500', letterSpacing: '2px', textTransform: 'uppercase' }}>
          ⚙️ Technical Expertise
        </h3>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '1.25rem', marginBottom: '4rem' }}
        >
          {technicalSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.07, y: -6 }}
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
                borderRadius: '1.25rem',
                padding: '1.75rem 1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                backdropFilter: 'blur(16px)',
                boxShadow: 'var(--shadow-sm)',
                cursor: 'default',
                transition: 'box-shadow 0.3s',
              }}
              whileTap={{ scale: 0.97 }}
            >
              <div style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {SkillIcons[skill]}
              </div>
              <span style={{ fontWeight: '600', fontSize: '0.95rem', color: 'var(--text-color)', textAlign: 'center' }}>
                {skill}
              </span>

              {/* Glowing bottom bar */}
              <motion.div
                initial={{ width: '0%' }}
                whileHover={{ width: '80%' }}
                style={{ height: '3px', background: 'var(--accent-color)', borderRadius: '2rem', boxShadow: '0 0 10px var(--accent-glow)' }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills */}
        <h3 style={{ fontSize: '1.3rem', color: 'var(--text-muted)', marginBottom: '1.5rem', fontWeight: '500', letterSpacing: '2px', textTransform: 'uppercase' }}>
          🌟 Soft Skills
        </h3>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.25rem' }}
        >
          {softSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, borderColor: '#a855f7' }}
              style={{
                background: 'rgba(168, 85, 247, 0.08)',
                border: '1px solid rgba(168, 85, 247, 0.25)',
                borderRadius: '1.25rem',
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                backdropFilter: 'blur(16px)',
                cursor: 'default',
              }}
            >
              <span style={{ fontSize: '2rem' }}>{SoftIcons[skill]}</span>
              <span style={{ fontWeight: '600', fontSize: '1rem', color: 'var(--text-color)' }}>
                {skill}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Skills;
