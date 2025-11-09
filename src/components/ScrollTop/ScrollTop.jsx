import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

import './ScrollTop.css'

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  function handleScroll() {
    setIsVisible(window.scrollY > 300)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    })
  }

  return (
    <button className={`btn scrollToTop flex-center ${isVisible ? "active" : ""}`} onClick={scrollUp} > 
      <FaArrowUp/>
    </button>
  )
}

export default ScrollTop