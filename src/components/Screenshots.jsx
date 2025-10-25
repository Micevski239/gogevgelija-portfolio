import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Screenshots.css'

const Screenshots = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState('light')

  const screenshots = {
    light: [
      {
        title: 'Home Screen',
        description: 'Featured content and upcoming events at a glance'
      },
      {
        title: 'Listings',
        description: 'Browse restaurants, hotels, and attractions'
      },
      {
        title: 'Event Details',
        description: 'Complete event information with join options'
      },
      {
        title: 'Promotions',
        description: 'Exclusive deals and discount codes'
      },
      {
        title: 'Profile',
        description: 'Manage your preferences and wishlist'
      }
    ],
    dark: [
      {
        title: 'Dark Mode Home',
        description: 'Beautiful dark theme for comfortable viewing'
      },
      {
        title: 'Dark Listings',
        description: 'Browse with reduced eye strain at night'
      },
      {
        title: 'Dark Events',
        description: 'Events look great in dark mode too'
      },
      {
        title: 'Dark Promotions',
        description: 'Deals that pop in dark theme'
      },
      {
        title: 'Dark Profile',
        description: 'OLED-friendly dark interface'
      }
    ]
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="screenshots" className="screenshots" ref={ref}>
      <motion.div
        className="screenshots-header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2>Beautiful Design</h2>
        <p>Experience GoGevgelija's stunning interface in both light and dark modes</p>
      </motion.div>

      <motion.div
        className="screenshots-tabs"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <button
          className={`tab-btn ${activeTab === 'light' ? 'active' : ''}`}
          onClick={() => setActiveTab('light')}
        >
          Light Mode
        </button>
        <button
          className={`tab-btn ${activeTab === 'dark' ? 'active' : ''}`}
          onClick={() => setActiveTab('dark')}
        >
          Dark Mode
        </button>
      </motion.div>

      <motion.div
        className="screenshots-grid"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        key={activeTab}
      >
        {screenshots[activeTab].map((screenshot, index) => (
          <motion.div
            key={index}
            className="screenshot-card"
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className={`screenshot-mockup ${activeTab}`}>
              <div className="mockup-notch"></div>
              <div className="mockup-content">
                <div className="placeholder-screen">
                  <div className="placeholder-header"></div>
                  <div className="placeholder-content">
                    <div className="placeholder-card"></div>
                    <div className="placeholder-card"></div>
                    <div className="placeholder-card small"></div>
                  </div>
                </div>
              </div>
            </div>
            <h3>{screenshot.title}</h3>
            <p>{screenshot.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="screenshots-note"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <p>Screenshots represent actual app screens. Download the app to experience the full interface.</p>
      </motion.div>
    </section>
  )
}

export default Screenshots
