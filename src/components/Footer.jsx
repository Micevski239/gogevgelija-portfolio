import React from 'react'
import { FaHeart, FaApple, FaGooglePlay, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <img src="/logo.png" alt="GoGevgelija" />
            <h3>GoGevgelija</h3>
          </div>
          <p className="footer-description">
            Your complete guide to discovering the best of Gevgelija. Explore attractions, events, promotions, and more.
          </p>
           <div className="social-icons">
                       <a href="https://www.facebook.com/profile.php?id=61583165964764" className="social-icon facebook">
                         <FaFacebook />
                       </a>
                       <a href="https://www.instagram.com/gogevgelija/" className="social-icon instagram">
                         <FaInstagram />
                       </a>
                     
                     </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#screenshots">Screenshots</a></li>
            <li><a href="#download">Download</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Download App</h4>
          <div className="footer-download-buttons">
            <a href="https://apps.apple.com/mk/app/gogevgelija/id6753878546" target="_blank" rel="noopener noreferrer" className="footer-download-btn">
              <FaApple size={20} />
              <span>App Store</span>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.micevski239.gogevgelija&hl=en" target="_blank" rel="noopener noreferrer" className="footer-download-btn">
              <FaGooglePlay size={18} />
              <span>Google Play</span>
            </a>
          </div>
          <div className="footer-info">
            <p><strong>Version:</strong> 1.2</p>
            <p><strong>Platform:</strong> iOS & Android</p>
            <p><strong>Languages:</strong> EN / MK</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} GoGevgelija. All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
