"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Star, Zap, Heart, Rocket } from "lucide-react";

export default function AboutUs() {
  const [activeSection, setActiveSection] = useState(null);

  const services = [
    {
      title: "Corporate Events",
      icon: <Rocket className="h-8 w-8" />,
      items: [
        "Conferences & Seminars",
        "Product Launches",
        "Team-Building Retreats",
        "Corporate Dinners & Galas",
        "Workshops & Training",
      ],
    },
    {
      title: "Weddings",
      icon: <Heart className="h-8 w-8" />,
      items: [
        "Full Wedding Planning",
        "Destination Weddings",
        "Wedding Design & Styling",
        "Day-of Coordination",
        "Bridal Showers & Engagement Parties",
      ],
    },
    {
      title: "Private Parties",
      items: [
        "Birthdays",
        "Anniversaries",
        "Baby Showers & Gender Reveals",
        "Graduation Parties",
        "Holiday Parties",
      ],
    },
    {
      title: "Non-Profit Events",
      icon: <Star className="h-8 w-8" />,
      items: [
        "Fundraising Galas",
        "Charity Auctions",
        "Awareness Campaigns",
        "Walks & Runs",
      ],
    },
    {
      title: "Event Design",
      icon: <Sparkles className="h-8 w-8" />,
      items: [
        "Theme Design",
        "Lighting & Ambiance",
        "Floral Arrangements",
        "Furniture & Prop Rentals",
        "Stage & Backdrop Design",
      ],
    },
    {
      title: "Specialty Events",
      icon: <Zap className="h-8 w-8" />,
      items: ["Luxury Events", "Pop-Up Events", "Themed Experiences"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 text-white">
      <main className="container mx-auto px-6 py-12">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-bold mb-6 text-yellow-300">
            What We Do
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-white">
            At Elegant Events, we bring your wildest event dreams to life! From
            corporate bashes to fairy-tale weddings, we’ve got the magic touch
            to make every moment unforgettable. Dive into our world of
            creativity, and let’s create something extraordinary together!
          </p>
        </motion.section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.section
              key={service.title}
              id={`section-${index}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: activeSection === `section-${index}` ? 1 : 0.7,
                y: 0,
              }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg overflow-hidden transform hover:shadow-2xl"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-2xl font-semibold ml-2">
                    {service.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      className="flex items-center"
                    >
                      <Star className="h-4 w-4 mr-2 text-yellow-300" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.section>
          ))}
        </div>
      </main>

     
    </div>
  );
}
