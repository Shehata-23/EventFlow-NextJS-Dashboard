import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ImageCarousel from "./ImageCarousel";

function ProjectCard({ work, index }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { 
    once: true, 
    amount: 0.1,
    rootMargin: "100px 0px"
  });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay: index * 0.05,
        duration: 0.5
      }}
      className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-200 hover:shadow-2xl border border-gray-200"
    >
      <ImageCarousel images={work.images} />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-blue-600">
          {work.title}
        </h3>
        <p className="text-sm text-gray-500 mb-4">{work.category}</p>
        <p className="text-gray-700">{work.description}</p>
      </div>
    </motion.div>
  );
}

export default ProjectCard;