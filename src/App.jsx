import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SecondPage from './secondPage.jsx'
import './App.css'

function App() {
  const [showContent, setShowContent] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleButtonClick = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setShowContent(true)
      setIsTransitioning(false)
    }, 800)
  }

  const handleBackClick = () => {
    setShowContent(false)
  }

  if (showContent) {
    return <SecondPage onBack={handleBackClick} />
  }

  return (
    <div className="app">
      <AnimatePresence>
        {!isTransitioning && (
          <motion.div 
            className="opening-container"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ 
              y: -100, 
              opacity: 0, 
              scale: 0.8,
              transition: { duration: 0.8, ease: "easeIn" }
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <motion.h1 
              className="main-title"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            >
              HEY DRISHTU
            </motion.h1>
            
            <motion.div 
              className="button-container"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
            >
              <div className="button-text">Press here</div>
              <motion.button 
                className="arrow-button"
                onClick={handleButtonClick}
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: "0 12px 35px rgba(0, 0, 0, 0.3)" 
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="arrow-icon">↓</span>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {isTransitioning && (
        <motion.div 
          className="transition-overlay"
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="transition-content"
            initial={{ y: 0 }}
            animate={{ y: 100 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
          >
            <div className="transition-arrow">↓</div>
            <div className="transition-text">Moving to your special page...</div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default App
