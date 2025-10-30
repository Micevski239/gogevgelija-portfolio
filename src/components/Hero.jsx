import React from 'react'
import { motion } from 'framer-motion'
import { FaApple, FaGooglePlay } from 'react-icons/fa'
import logo from '../assets/gogevgelija-logo.png'
import './Hero.css'

const Hero = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.div className="hero-logo" variants={fadeIn}>
          <img src={logo} alt="GoGevgelija Logo" />
        </motion.div>

        <motion.h1 variants={fadeIn}>
          Discover the Best of Gevgelija
        </motion.h1>

        <motion.p className="hero-subtitle" variants={fadeIn}>
          Your local guide to events, promotions, listings, and activities in the beautiful city of Gevgelija, North Macedonia
        </motion.p>

        <motion.div className="hero-features" variants={fadeIn}>
          <div className="feature-badge">
            <span className="icon">🏛️</span>
            <span>Explore Attractions</span>
          </div>
          <div className="feature-badge">
            <span className="icon">🎉</span>
            <span>Find Events</span>
          </div>
          <div className="feature-badge">
            <span className="icon">🎫</span>
            <span>Get Promotions</span>
          </div>
          <div className="feature-badge">
            <span className="icon">📰</span>
            <span>Read Stories</span>
          </div>
        </motion.div>

        <motion.div className="hero-buttons" variants={fadeIn}>
          <a href="https://apps.apple.com/mk/app/gogevgelija/id6753878546" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <FaApple size={20} />
            Download on App Store
          </a>
          <a href="#" className="btn btn-secondary">
            <FaGooglePlay size={18} />
            Get it on Google Play
          </a>
        </motion.div>

        <motion.div className="hero-stats" variants={fadeIn}>
          <div className="stat">
            <h3>20+</h3>
            <p>Local Listings</p>
          </div>
          <div className="stat">
            <h3>10+</h3>
            <p>Events Monthly</p>
          </div>
          <div className="stat">
            <h3>2</h3>
            <p>Languages</p>
          </div>
          <div className="stat">
            <h3>24/7</h3>
            <p>Access</p>
          </div>
        </motion.div>
      </motion.div>

      <div className="hero-gradient"></div>
    </section>
  )
}

export default Hero
