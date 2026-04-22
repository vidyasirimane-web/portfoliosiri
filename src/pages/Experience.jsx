import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const Experience = () => {
  const responsibilities = [
    'Collaborated with senior developers to build and maintain web applications',
    'Gained hands-on experience in real-world application development',
    'Participated in project planning and team workflow discussions',
    'Developed software solutions using modern development tools and practices',
  ];

  const techUsed = ['Python', 'SQL', 'Visual Studio', 'Git'];

  return (
    <PageTransition>
      <div className="page-container">
        <h2 className="section-title">Work Experience</h2>

        {/* Timeline wrapper */}
        <div style={{ position: 'relative', marginTop: '2rem' }}>

          {/* Vertical Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              left: '2.25rem',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(to bottom, var(--accent-color), transparent)',
              borderRadius: '2px',
            }}
          />

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 120, delay: 0.3 }}
            style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', paddingBottom: '3rem' }}
          >
            {/* Icon Node on timeline */}
            <div style={{ position: 'relative', zIndex: 2, flexShrink: 0 }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.5 }}
                style={{
                  width: '4.5rem',
                  height: '4.5rem',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--accent-color), #a855f7)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.8rem',
                  boxShadow: '0 0 0 6px var(--card-bg), 0 0 0 8px var(--accent-color), 0 0 30px var(--accent-glow)',
                }}
              >
                💼
              </motion.div>
            </div>

            {/* Card Content */}
            <div style={{
              flex: 1,
              background: 'var(--card-bg)',
              border: '1px solid var(--border-color)',
              borderRadius: '1.5rem',
              padding: '2rem',
              backdropFilter: 'blur(16px)',
              boxShadow: 'var(--shadow-md)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Purple top accent line */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: '3px',
                background: 'linear-gradient(to right, var(--accent-color), #a855f7)',
                borderRadius: '1.5rem 1.5rem 0 0',
              }} />

              {/* Header Row */}
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--text-color)', marginBottom: '0.4rem' }}>
                    Software Intern
                  </h3>
                  <p style={{ fontSize: '1.2rem', color: '#a855f7', fontWeight: '600' }}>
                    AikShetra Tech Solutions Pvt Ltd
                  </p>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span style={{
                    display: 'inline-block',
                    background: 'rgba(168,85,247,0.15)',
                    border: '1px solid rgba(168,85,247,0.4)',
                    color: '#a855f7',
                    padding: '0.35rem 1rem',
                    borderRadius: '2rem',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                  }}>
                    📅 Nov 2024
                  </span>
                  <br />
                  <span style={{
                    display: 'inline-block',
                    background: 'rgba(37,99,235,0.1)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-muted)',
                    padding: '0.35rem 1rem',
                    borderRadius: '2rem',
                    fontSize: '0.85rem',
                    fontWeight: '500',
                  }}>
                    ⏱️ 1 Month
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: 'var(--border-color)', marginBottom: '1.5rem' }} />

              {/* Responsibilities */}
              <h4 style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Key Responsibilities
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {responsibilities.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.6' }}
                  >
                    <span style={{ color: 'var(--accent-color)', marginTop: '3px', flexShrink: 0 }}>▹</span>
                    {item}
                  </motion.li>
                ))}
              </ul>

              {/* Tech Stack Used */}
              <h4 style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Technologies Used
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {techUsed.map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.08 }}
                    style={{
                      padding: '0.35rem 1rem',
                      background: 'var(--bg-color)',
                      border: '1px solid var(--accent-color)',
                      borderRadius: '2rem',
                      fontSize: '0.85rem',
                      color: 'var(--accent-color)',
                      fontWeight: '600',
                      fontFamily: 'Fira Code, monospace',
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Future placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
          >
            <div style={{ flexShrink: 0, width: '4.5rem', display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: '1.5rem', height: '1.5rem', borderRadius: '50%',
                border: '2px dashed var(--border-color)',
              }} />
            </div>
            <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', fontSize: '1rem' }}>
              More experiences coming soon...
            </p>
          </motion.div>

        </div>
      </div>
    </PageTransition>
  );
};

export default Experience;
