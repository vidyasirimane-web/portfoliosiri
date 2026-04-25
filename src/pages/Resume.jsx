import PageTransition from '../components/PageTransition';
import Card from '../components/Card';
import { Download } from 'lucide-react';

const Resume = () => {
  return (
    <PageTransition>
      <div className="page-container" style={{ maxWidth: '800px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 className="section-title" style={{ marginBottom: 0 }}>My Resume</h2>
          <a href="/resume.png" download className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>
            <Download size={16} /> Download Resume
          </a>
        </div>
        
        <Card style={{ padding: '3rem 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem', borderBottom: '2px solid var(--border-color)', paddingBottom: '2rem' }}>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>VIDYASHREE P C</h1>
            <p style={{ color: 'var(--text-muted)' }}>Tumkur Karnataka-572222 | 7411141839 / 9743116877 | vvidyasirimane@gmail.com</p>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>CAREER OBJECTIVE</h3>
            <p style={{ lineHeight: '1.6' }}>
              To obtain a suitable position in a reputed organization where I can utilize my skills and knowledge to grow professionally and contribute to the company's success and To make contribution in the organization with best of my ability.
            </p>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>ACADEMIC QUALIFICATION</h3>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: '500' }}>BCA Graduation in Vidya First Grade College</span>
                <span>2026</span>
                <span style={{ color: 'var(--text-muted)' }}>8.5 CGPA</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: '500' }}>PUC in GGJC College Gubbi</span>
                <span>2023</span>
                <span style={{ color: 'var(--text-muted)' }}>425 Marks (73%)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: '500' }}>SSLC in GGJC High School in Gubbi</span>
                <span>2021</span>
                <span style={{ color: 'var(--text-muted)' }}>525 Marks (84%)</span>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>TECHNICAL SKILLS</h3>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>Tools: Visual Studio</li>
              <li>SQL, Python</li>
            </ul>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>WORK EXPERIENCE & PROJECTS</h3>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>Online course project and working on automatic projects</li>
              <li>Internship with 1 month of experience in AikShetra Tech Solutions Pvt Ltd</li>
            </ul>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>COURSES & CERTIFICATES</h3>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>Database Management System in Great Learning</li>
              <li>SQL and Data Science in Great Learning</li>
              <li>Python fundamentals for beginners in Great Learning</li>
            </ul>
          </div>

        </Card>
      </div>
    </PageTransition>
  );
};

export default Resume;
