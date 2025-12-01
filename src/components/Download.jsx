import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaApple, FaGooglePlay, FaQrcode } from 'react-icons/fa'
import './Download.css'

const Download = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="download" className="download" ref={ref}>
      <motion.div
        className="download-content"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="download-text">
          <h2>Get Started Today</h2>
          <p>Download GoGevgelija now and start discovering the best of Gevgelija. Available on iOS and Android devices.</p>

          <div className="download-buttons">
            <motion.a
              href="#"
              className="download-btn apple"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaApple size={32} />
              <div className="btn-text">
                <span className="small">Download on the</span>
                <span className="large">App Store</span>
              </div>
            </motion.a>

            <motion.a
              href="https://play.google.com/store/apps/details?id=com.micevski239.gogevgelija&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn google"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGooglePlay size={28} />
              <div className="btn-text">
                <span className="small">GET IT ON</span>
                <span className="large">Google Play</span>
              </div>
            </motion.a>
          </div>

          <div className="download-info">
            <div className="info-item">
              <span className="info-label">Version:</span>
              <span className="info-value">1.2</span>
            </div>
            <div className="info-item">
              <span className="info-label">Size:</span>
              <span className="info-value">~25 MB</span>
            </div>
            <div className="info-item">
              <span className="info-label">Compatibility:</span>
              <span className="info-value">iOS 13.4+ / Android 7.0+</span>
            </div>
          </div>
        </div>

        <motion.div
          className="download-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="screen-header">
                <div className="status-bar"></div>
                <div className="app-icon">
                  <img src="/logo.png" alt="GoGevgelija Icon" />
                </div>
                <h3>GoGevgelija</h3>
                <p>Discover the Best of Gevgelija</p>
              </div>
              <div className="screen-content">
                <div className="content-bar large"></div>
                <div className="content-row">
                  <div className="content-bar medium"></div>
                  <div className="content-bar medium"></div>
                </div>
                <div className="content-bar small"></div>
                <div className="content-bar small"></div>
              </div>
            </div>
          </div>

          <motion.div
            className="qr-code"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <FaQrcode size={100} />
            <p>Scan to Download</p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="download-stats"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="stat-box">
          <h4>Free Download</h4>
          <p>No hidden fees or subscriptions</p>
        </div>
        <div className="stat-box">
          <h4>Regular Updates</h4>
          <p>New features and content added frequently</p>
        </div>
        <div className="stat-box">
          <h4>Local Support</h4>
          <p>Dedicated team for Gevgelija</p>
        </div>
        <div className="stat-box">
          <h4>Offline Access</h4>
          <p>Browse saved content without internet</p>
        </div>
      </motion.div>
    </section>
  )
}

export default Download
