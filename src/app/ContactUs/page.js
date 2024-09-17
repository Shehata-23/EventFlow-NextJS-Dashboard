"use client";

import React from "react";
import ContactForm from "../_components/form";
import GradientSphere from "../_components/GradientComp";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
} from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Page = () => {
  return (
    <>
      <motion.div className="bg-black flex flex-col justify-center items-center relative overflow-x-hidden min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-[100%] sm:w-[90%] p-0 sm:p-7 flex flex-col sm:flex-row flex-wrap justify-center z-10 sm:items-stretch items-center"
        >
          <div className="w-[100%] sm:w-[50%] bg-black/50 flex justify-end">
            <ContactForm />
          </div>
          <div className="w-[100%] sm:w-[50%] flex justify-center rounded-e-lg bg-white/5 relative z-20">
            <div className="text-white w-full text-center lg:text-left p-8">
              <h2 className="text-3xl font-extrabold mb-4">
                Let&apos;s Make Your Event Unforgettable!
              </h2>
              <p className="text-lg mb-4">
                Whether it’s a corporate event, birthday bash, wedding
                celebration, or any special occasion, we’re here to turn your
                dreams into reality. Fill out the form, and let’s start planning
                your perfect party.
              </p>
              <p className="text-lg mb-4">
                We take care of everything from the venue, catering, and
                entertainment to ensuring every moment is as spectacular as you
                imagined. It’s your celebration — we’ll make it shine!
              </p>
              <p className="text-lg font-bold">
                Ready to get the party started? Contact us today and let’s make
                magic happen!
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-[100%] sm:w-[90%] mt-8 p-7 bg-white/5 rounded-lg z-10"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Get in Touch
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center text-white">
              <MapPin className="w-6 h-6 mr-3 text-purple-400" />
              <div>
                <h4 className="font-semibold">Address</h4>
                <p>123 Party Lane, Eventville, EV 12345</p>
              </div>
            </div>
            <div className="flex items-center text-white">
              <Phone className="w-6 h-6 mr-3 text-purple-400" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p>(555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center text-white">
              <Mail className="w-6 h-6 mr-3 text-purple-400" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p>info@elegantevents.com</p>
              </div>
            </div>
            <div className="flex items-center text-white">
              <Clock className="w-6 h-6 mr-3 text-purple-400" />
              <div>
                <h4 className="font-semibold">Business Hours</h4>
                <p>Mon-Fri: 9AM-6PM</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="absolute">
          <GradientSphere />
        </div>
      </motion.div>
    </>
  );
};

export default Page;
