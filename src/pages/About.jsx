import PageTransition from '../components/PageTransition';
import Card from '../components/Card';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <PageTransition>
      <div className="page-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        {/* Unique Side-by-side Profile Section */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', marginBottom: '5rem', alignItems: 'center' }}>
          
          {/* Circular Glowing Profile Image */}
          <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
            <motion.div 
              style={{ position: 'relative', width: '280px', height: '280px' }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
            >
              {/* Rotating Glow Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{
                  position: 'absolute',
                  inset: '-10px',
                  borderRadius: '50%',
                  background: 'conic-gradient(from 0deg, transparent 0%, var(--accent-color) 50%, transparent 100%)',
                  opacity: 0.5,
                  filter: 'blur(10px)'
                }}
              />
              
              {/* Circular Image Container */}
              <div style={{ 
                position: 'relative', 
                width: '100%', 
                height: '100%', 
                borderRadius: '50%', 
                overflow: 'hidden', 
                border: '4px solid var(--card-bg)',
                backgroundColor: 'var(--nav-bg)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                zIndex: 1
              }}>
                <img 
                  src="/about-profile.jpg" 
                  alt="Vidya Profile" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback */}
                <div style={{ display: 'none', height: '100%', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', textAlign: 'center', padding: '2rem' }}>
                  <p style={{ fontSize: '0.9rem' }}>Image not found</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Staggered Text Cards */}
          <div style={{ flex: '2 1 400px', position: 'relative' }}>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', delay: 0.3 }}
              style={{ position: 'relative', zIndex: 2, marginBottom: '-2rem', marginRight: '2rem' }}
            >
              <Card style={{ margin: 0, borderLeft: '4px solid #a855f7', backgroundColor: 'rgba(168, 85, 247, 0.12)' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: 'var(--text-color)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--accent-color)' }}>✦</span> Personal Profile
                </h3>
                <p style={{ lineHeight: '1.8', fontSize: '1.05rem', color: 'var(--text-muted)' }}>
                  I am a 15 years old enthusiastic and dedicated individual with a passion for continuous learning.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', delay: 0.4 }}
              style={{ position: 'relative', zIndex: 1, marginLeft: '2rem' }}
            >
              <Card style={{ margin: 0, borderRight: '4px solid #a855f7', backgroundColor: 'rgba(168, 85, 247, 0.12)' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: 'var(--text-color)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--accent-color)' }}>✦</span> Career Objective
                </h3>
                <p style={{ lineHeight: '1.8', fontSize: '1.05rem', color: 'var(--text-muted)' }}>
                  To obtain a suitable position in a reputed organization where I can utilize my skills and knowledge to grow professionally and contribute to the company's success, and to make a meaningful contribution to the organization with the best of my abilities.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>

        <motion.h2 
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Education Journey
        </motion.h2>
        
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card style={{ position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', gap: '2rem', padding: '2rem' }}>
              <div style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100px', height: '100px', borderRadius: '50%', border: '2px dashed var(--accent-color)', color: 'var(--accent-color)' }}>
                <span style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>3</span>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Years</span>
              </div>
              
              <div style={{ flex: 1, borderLeft: '1px solid var(--border-color)', paddingLeft: '2rem' }}>
                <h3 style={{ color: 'var(--text-color)', fontSize: '1.6rem', marginBottom: '0.25rem' }}>BCA Graduation</h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Vidya First Grade College</p>
                <div style={{ display: 'flex', gap: '2rem' }}>
                  <span style={{ backgroundColor: 'var(--bg-color)', padding: '0.4rem 1rem', borderRadius: '1rem', fontSize: '0.9rem', color: 'var(--accent-color)' }}>Year: 2026</span>
                  <span style={{ backgroundColor: 'var(--bg-color)', padding: '0.4rem 1rem', borderRadius: '1rem', fontSize: '0.9rem', color: 'var(--accent-color)' }}>Score: 8.5 CGPA</span>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Card style={{ position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', gap: '2rem', padding: '2rem' }}>
              <div style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100px', height: '100px', borderRadius: '50%', border: '2px dashed var(--accent-color)', color: 'var(--accent-color)' }}>
                <span style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>2</span>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Years</span>
              </div>
              
              <div style={{ flex: 1, borderLeft: '1px solid var(--border-color)', paddingLeft: '2rem' }}>
                <h3 style={{ color: 'var(--text-color)', fontSize: '1.6rem', marginBottom: '0.25rem' }}>Pre-University Course (PUC)</h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>GGJC College Gubbi</p>
                <div style={{ display: 'flex', gap: '2rem' }}>
                  <span style={{ backgroundColor: 'var(--bg-color)', padding: '0.4rem 1rem', borderRadius: '1rem', fontSize: '0.9rem', color: 'var(--accent-color)' }}>Year: 2023</span>
                  <span style={{ backgroundColor: 'var(--bg-color)', padding: '0.4rem 1rem', borderRadius: '1rem', fontSize: '0.9rem', color: 'var(--accent-color)' }}>Score: 73% (425 Marks)</span>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Card style={{ position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', gap: '2rem', padding: '2rem' }}>
              <div style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100px', height: '100px', borderRadius: '50%', border: '2px dashed var(--accent-color)', color: 'var(--accent-color)' }}>
                <span style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>10</span>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Years</span>
              </div>
              
              <div style={{ flex: 1, borderLeft: '1px solid var(--border-color)', paddingLeft: '2rem' }}>
                <h3 style={{ color: 'var(--text-color)', fontSize: '1.6rem', marginBottom: '0.25rem' }}>SSLC</h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>GGJC High School in Gubbi</p>
                <div style={{ display: 'flex', gap: '2rem' }}>
                  <span style={{ backgroundColor: 'var(--bg-color)', padding: '0.4rem 1rem', borderRadius: '1rem', fontSize: '0.9rem', color: 'var(--accent-color)' }}>Year: 2021</span>
                  <span style={{ backgroundColor: 'var(--bg-color)', padding: '0.4rem 1rem', borderRadius: '1rem', fontSize: '0.9rem', color: 'var(--accent-color)' }}>Score: 84% (525 Marks)</span>
                </div>
              </div>
            </Card>
          </motion.div>

        </div>
      </div>
    </PageTransition>
  );
};

export default About;
