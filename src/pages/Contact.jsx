import PageTransition from '../components/PageTransition';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import Card from '../components/Card';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        alert("Success! Your message has been sent.");
        form.reset();
      })
      .catch((error) => alert("Error: " + error));
  };

  return (
    <PageTransition>
      <div className="page-container">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="contact-layout">
          <div className="contact-info">
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: '800' }}>Let's Talk</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: '1.8', fontSize: '1.1rem' }}>
              Feel free to reach out for collaborations, project inquiries, or just to say hello. I'm always open to discussing new opportunities.
            </p>

            <div className="info-item">
              <div className="info-icon">
                <MapPin size={24} />
              </div>
              <div>
                <h4 style={{ color: 'var(--text-color)' }}>Location</h4>
                <p>Tumkur, Karnataka - 572222</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <Phone size={24} />
              </div>
              <div>
                <h4 style={{ color: 'var(--text-color)' }}>Phone</h4>
                <p>7411141839 / 9743116877</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <Mail size={24} />
              </div>
              <div>
                <h4 style={{ color: 'var(--text-color)' }}>Email</h4>
                <p>vvidyasirimane@gmail.com</p>
              </div>
            </div>
          </div>

          <Card style={{ padding: '2.5rem', margin: '0' }}>
            <form 
              className="contact-form" 
              name="contact" 
              method="POST" 
              data-netlify="true"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Write your message here..." required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                <Send size={20} />
                Send Message
              </button>
            </form>
          </Card>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
