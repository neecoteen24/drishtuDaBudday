import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './App.css'

function SecondPage({ onBack }) {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHovering, setIsHovering] = useState(false)
  const audioRef = useRef(null)

  const pictures = [
    {
      id: 1,
      src: "/src/assets/images/IMG-20250901-WA0004.jpg",
      alt: "Beautiful Drishtu 1",
      title: "pagl"
    },
    {
      id: 2,
      src: "/src/assets/images/IMG-20250901-WA0002.jpg",
      alt: "Beautiful Drishtu 2",
      title: "peelu"
    },
    {
      id: 3,
      src: "/src/assets/images/IMG-20250901-WA0003.jpg",
      alt: "Beautiful Drishtu 3",
      title: "lovelyDebu"
    },
    {
      id: 4,
      src: "src/assets/images/WhatsApp Image 2025-09-01 at 01.40.19_51557d8b.jpg",
      alt: "Beautiful Drishtu 4",
      title: "kaalu and peelu"
    },
    {
      id: 5,
      src: "/src/assets/images/IMG-20250901-WA0001.jpg",
      alt: "Beautiful Drishtu 5",
      title: "aur naam ni hai mere paas"
    }
  ]

  useEffect(() => {
    // Auto-play music when component mounts
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log('Auto-play prevented:', e))
    }
  }, [])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  const handleSpotifyClick = () => {
    // Replace this URL with your actual Spotify album link
    window.open('https://open.spotify.com/album/your-album-id', '_blank')
  }

  return (
    <div className="second-page">
      {/* Hidden audio element */}
      <audio 
        ref={audioRef}
        src="/src/assets/music/bytesites.co.za - Malcolm Todd - Chest Pain (I Love) (320 KBps).mp3"
        loop
        onError={(e) => console.log('Audio error:', e)}
      />
      
      {/* Music Control Button */}
      <motion.div 
        className="music-control"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <motion.button
          className="music-button"
          onClick={toggleMusic}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isPlaying ? '🔊' : '🔇'}
        </motion.button>
        {isHovering && (
          <motion.div 
            className="music-tooltip"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isPlaying ? 'Click to stop music' : 'Click to play music'}
          </motion.div>
        )}
      </motion.div>

      <motion.div 
        className="second-page-container"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h1
          className="birthday-title-special"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          HAPPY BIRTHDAY DRISHTU
        </motion.h1>
        
        <motion.div 
          className="pictures-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          {pictures.map((picture, index) => (
            <motion.div
              key={picture.id}
              className="picture-item"
              initial={{ y: 50, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ 
                delay: 1.2 + (index * 0.2), 
                duration: 0.8,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)" 
              }}
            >
              <div className="picture-frame">
                <img 
                  src={picture.src} 
                  alt={picture.alt}
                  onError={(e) => {
                    console.log('Image failed to load:', picture.src);
                    e.target.src = `https://via.placeholder.com/300x400/2a2a2a/ffffff?text=${picture.title}`
                  }}
                />
                <div className="picture-overlay">
                  <h3>{picture.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="letter-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <motion.div 
            className="letter-content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
          >
            <h2 className="letter-title">A Letter For You</h2>
            <div className="letter-text">
              <p>
                Hey drishti, I know that I am such a bad influence to you, I make things so difficult for you cause everybody around you wants you to be away from me. But I hope you know what you mean to me, I think if one day I wake up and forget everything and my memory is completely gone, the world would still find a way to get me back to you, its just how it is and I am <span className="highlight">GLAD</span> that its this way.
              </p>
              <p>
                I never tried to forget you, nor will I ever think of doing so.
              </p>
              <p className="special-text">
                <span className="highlight">YOU</span> will always have a place in my heart.
              </p>
              <p className="birthday-wish">
                <span className="highlight">HAPPY BUDDAY OYE</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Minimalistic Spotify Heart Button */}
        <motion.div 
          className="spotify-section-minimal"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.8 }}
        >
          <motion.button
            className="spotify-heart-minimal"
            onClick={handleSpotifyClick}
            whileHover={{ 
              scale: 1.1, 
              boxShadow: "0 10px 25px rgba(29, 185, 84, 0.4)" 
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="heart-icon-minimal">🖤</span>
          </motion.button>
          <motion.p 
            className="spotify-text-minimal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 0.8 }}
          >
            dxrtheri + anuraG
          </motion.p>
        </motion.div>
        
        <motion.button 
          className="back-button"
          onClick={onBack}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 4.5, duration: 0.8 }}
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" 
          }}
          whileTap={{ scale: 0.98 }}
        >
          ←
        </motion.button>
      </motion.div>
    </div>
  )
}

export default SecondPage 