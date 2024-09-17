import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function VideoBackground() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play(); 
    }
  }, []); 

  return (
    <div className="relative overflow-hidden h-screen">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="https://videos.pexels.com/video-files/3582892/3582892-hd_1920_1080_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-raleway text-6xl font-bold mb-4 text-white"
          >
            Create Unforgettable Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl mb-8 text-white"
          >
            From concept to execution, we bring your vision to life
          </motion.p>
        </div>
      </div>
    </div>
  );
}
