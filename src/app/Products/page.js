'use client'

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useAnimation, useInView, } from "framer-motion"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"
import ProjectCard from "../_components/ProjectCard"



export default function DynamicPortfolioGallery() {
  const [filter, setFilter] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects"); 
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchProjects();
  }, []);

  
  const filteredWorks = projects.filter(
    (work) =>
      (filter === "All" || work.category.toLowerCase() === filter.toLowerCase()) &&
      work.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (loading) return (
    <div className="min-h-screen bg-white text-gray-800 overflow-hidden flex justify-center items-center">
      <div className="text-2xl font-bold ">Loading...</div>;
    </div>
  )


  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-hidden">
      <main className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="flex justify-center items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={` font-dancing  text-5xl md:text-6xl font-bold text-center mb-12 mx-auto text-blue-600 pb-5 border-b-4 border-blue-200`}
          >
            Our Masterpieces
          </motion.h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex space-x-2 mb-4 md:mb-0"
          >
            {["All", "Wedding", "Corporate", "Party"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`text-sm ${
                  filter === category
                    ? "bg-blue-500 text-white"
                    : "text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
                } px-3 py-2 rounded-md transition duration-300 ease-in-out`}
              >
                {category}
              </button>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 placeholder-gray-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </motion.div>
        </div>

        <div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredWorks.map((work, index) => (
              <ProjectCard key={work.id} work={work} index={index} />
            ))}
        </div>
      </main>
    </div>
  )
}




