import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import scr1 from '../assets/scr1.jpg'
import scr2 from '../assets/scr2.jpg'
import scr3 from '../assets/scr3.jpg'
import scr4 from '../assets/scr4.jpg'
import scr5 from '../assets/scr5.jpg'
import './Screenshots.css'

const Screenshots = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const screenshots = [
    {
      image: scr1,
      title: 'Home Screen',
      description: 'Featured content and upcoming events at a glance'
    },
    {
      image: scr2,
      title: 'Listings',
      description: 'Browse restaurants, hotels, and attractions'
    },
    {
      image: scr3,
      title: 'Event Details',
      description: 'Complete event information with join options'
    },
    {
      image: scr4,
      title: 'Promotions',
      description: 'Exclusive deals and discount codes'
    },
    {
      image: scr5,
      title: 'Profile',
      description: 'Manage your preferences and wishlist'
    }
  ]

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
        <p>Experience GoGevgelija's stunning and intuitive interface</p>
      </motion.div>

      <motion.div
        className="screenshots-grid"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {screenshots.map((screenshot, index) => (
          <motion.div
            key={index}
            className="screenshot-card"
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="screenshot-image">
              <img src={screenshot.image} alt={screenshot.title} />
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
