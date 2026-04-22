import { MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>built with ❤️ by Vidya</p>
        <a 
          href="https://wa.me/9187483151?text=Hello" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="whatsapp-btn"
        >
          <MessageCircle size={24} />
          <span>Say Hello</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
