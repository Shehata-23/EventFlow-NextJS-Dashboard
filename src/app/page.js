"use client"
import { motion, AnimatePresence } from 'framer-motion'
import ContactForm from "./_components/form";
import  VideoBackground from "./_components/VideoBg"

export default function TrendyLandingPage() {
  return (
      <>
       <section id="home" className="relative h-screen">
        
          < VideoBackground />
        </section>

    <div className="relative min-h-screen bg-gradient-to-br from-purple-700 via-pink-500 to-red-500 text-white overflow-hidden">

      <main>
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-fjalla text-4xl font-bold mb-8 text-center"
            >
              About Us
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-lg mb-4">
                  EventMasters is a premier event planning company dedicated to creating extraordinary experiences. 
                  With our passion for perfection and attention to detail, we transform your ideas into unforgettable moments.
                </p>
                <p className="text-lg">
                  Our team of experienced professionals works tirelessly to ensure that every aspect of your event 
                  is meticulously planned and flawlessly executed.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg transform rotate-3"></div>
                <img
                  src="https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Event planning team"
                  className="relative z-10 rounded-lg shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="services" className="min-h-screen flex items-center justify-center py-20 bg-black bg-opacity-30">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-fjalla text-4xl font-bold mb-12 text-center"
            >
              Our Services
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {  title: "Wedding Planning", description: "Create the wedding of your dreams with our expert planners." },
                {  title: "Corporate Events", description: "Impress your clients and team with professionally organized corporate events." },
                {   title: "Social Gatherings", description: "From birthdays to anniversaries, we make every celebration special." }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-fjalla text-4xl font-bold mb-8 text-center"
            >
              Get in Touch
            </motion.h2>
            <div className="max-w-md mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
               <motion.div initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }} 
              className="w-[100%]">

               <ContactForm />
               </motion.div>
              
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      
    </div>
      
      </>
   
  )
}