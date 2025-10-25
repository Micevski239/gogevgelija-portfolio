import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTag,
  FaNewspaper,
  FaHeart,
  FaLanguage,
  FaMoon,
  FaUserCircle,
  FaBell,
  FaShieldAlt,
  FaSearch,
  FaMobileAlt
} from 'react-icons/fa'
import './Features.css'

const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Discover Listings',
      description: 'Explore restaurants, hotels, attractions, and local businesses with detailed information, amenities, and working hours.'
    },
    {
      icon: <FaCalendarAlt />,
      title: 'Local Events',
      description: 'Stay updated with concerts, festivals, exhibitions, and cultural events happening in Gevgelija. Join events and track your attendance.'
    },
    {
      icon: <FaTag />,
      title: 'Exclusive Promotions',
      description: 'Access special offers, discount codes, and deals from local businesses. Never miss a great promotion again.'
    },
    {
      icon: <FaNewspaper />,
      title: 'Travel Blog',
      description: 'Read curated articles, travel guides, local stories, and event recaps to plan your perfect Gevgelija experience.'
    },
    {
      icon: <FaHeart />,
      title: 'Wishlist System',
      description: 'Save your favorite listings, events, promotions, and articles. Access them anytime with cloud synchronization.'
    },
    {
      icon: <FaLanguage />,
      title: 'Bilingual Support',
      description: 'Full English and Macedonian language support with seamless switching. Choose your preferred language anytime.'
    },
    {
      icon: <FaMoon />,
      title: 'Dark Mode',
      description: 'Beautiful light and dark themes with automatic system preference detection. Easy on the eyes, day or night.'
    },
    {
      icon: <FaUserCircle />,
      title: 'Guest Mode',
      description: 'Browse and explore without creating an account. Quick access to all content with optional authentication for personalization.'
    },
    {
      icon: <FaSearch />,
      title: 'Smart Search',
      description: 'Filter content by categories, tags, and locations. Find exactly what you\'re looking for with powerful search capabilities.'
    },
    {
      icon: <FaBell />,
      title: 'Real-time Updates',
      description: 'Get instant updates on new events, promotions, and featured content. Stay connected with what\'s happening.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Secure & Private',
      description: 'Your data is protected with industry-standard security. Passwordless authentication via email verification codes.'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Cross-Platform',
      description: 'Available on iOS and Android with a beautiful, native mobile experience. Access Gevgelija from anywhere.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="features" className="features" ref={ref}>
      <motion.div
        className="features-header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2>Everything You Need</h2>
        <p>Comprehensive features to discover and explore Gevgelija like never before</p>
      </motion.div>

      <motion.div
        className="features-grid"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="features-tech"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h3>Built with Modern Technology</h3>
        <div className="tech-stack">
          <span className="tech-badge">React Native</span>
          <span className="tech-badge">Expo</span>
          <span className="tech-badge">TypeScript</span>
          <span className="tech-badge">Django REST</span>
          <span className="tech-badge">PostgreSQL</span>
          <span className="tech-badge">JWT Auth</span>
          <span className="tech-badge">React Query</span>
          <span className="tech-badge">i18next</span>
        </div>
      </motion.div>
    </section>
  )
}

export default Features
