import PageTransition from '../components/PageTransition';
import { Award, ExternalLink } from 'lucide-react';
import Card from '../components/Card';
import { motion } from 'framer-motion';

const Certificates = () => {
  const certificates = [
    {
      title: "Java Programming",
      provider: "Great Learning Academy",
      date: "Nov 2024",
      image: "/java-cert.png" // Place 'java-cert.png' in the public folder
    },
    {
      title: "Database Management System",
      provider: "Great Learning Academy",
      date: "Nov 2024",
      image: "/db-cert.png" // Place 'db-cert.png' in the public folder
    },
    {
      title: "SQL and Data Science",
      provider: "Great Learning Academy",
      date: "2024",
      image: null
    },
    {
      title: "Python fundamentals for beginners",
      provider: "Great Learning Academy",
      date: "2024",
      image: null
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' } }
  };

  return (
    <PageTransition>
      <div className="page-container">
        <h2 className="section-title">Courses & Certificates</h2>
        
        <motion.div 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginTop: '2rem' }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {certificates.map((cert, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
                
                {/* Image Placeholder Area */}
                <div style={{ width: '100%', height: '200px', backgroundColor: 'var(--bg-color)', position: 'relative', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  {cert.image ? (
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  
                  {/* Fallback Icon if no image or image fails to load */}
                  <div style={{ display: cert.image ? 'none' : 'flex', color: 'var(--text-muted)' }}>
                    <Award size={48} opacity={0.5} />
                  </div>
                </div>

                {/* Details Area */}
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-color)' }}>
                    {cert.title}
                  </h3>
                  <p style={{ color: 'var(--accent-color)', fontWeight: '500', marginBottom: '0.25rem' }}>
                    {cert.provider}
                  </p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                    Issued: {cert.date}
                  </p>
                  
                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>
                    <Award size={16} /> Certificate of Completion
                  </div>
                </div>

              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Certificates;
