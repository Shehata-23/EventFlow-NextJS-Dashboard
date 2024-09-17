'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from 'next/image'

function ImageCarousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)
  
    const slideVariants = {
      hiddenRight: {
        x: "100%",
        opacity: 0,
      },
      hiddenLeft: {
        x: "-100%",
        opacity: 0,
      },
      visible: {
        x: "0",
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 30,
        },
      },
      exit: {
        opacity: 0,
        scale: 0.8,
        transition: {
          duration: 0.2,
        },
      },
    }
  
    const nextSlide = () => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }
  
    const prevSlide = () => {
      setDirection(-1)
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }
  
    return (
      <div className="relative w-full h-64 overflow-hidden rounded-t-xl">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            className="absolute w-full h-full object-cover"
            custom={direction}
            variants={slideVariants}
            initial={direction > 0 ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit="exit"
            loading="lazy"
            
          >
             <Image
                        src={images[currentIndex]}
                        alt={`Event image ${currentIndex + 1}`}
                        layout="fill"
                        objectFit="cover"
                        priority={currentIndex === 0}
                        loading={currentIndex === 0 ? "eager" : "lazy"}
                    />
          </motion.div>
        </AnimatePresence>
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    )
  }

export default ImageCarousel