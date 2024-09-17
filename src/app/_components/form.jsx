"use client"
import React, { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const { name, phone, email, subject, message } = formData;
    setIsFormValid(name && phone && email && subject && message);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
        toast.success("Message sent successfully!");
      } else {
        setSubmitStatus("error");
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error.message);
      setSubmitStatus("error");
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-md p-8 rounded-s-lg shadow-lg w-full text-white"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>

        <label className="block mb-2">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 mb-4 bg-white/20 backdrop-blur-md rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block mb-2">Phone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full p-3 mb-4 bg-white/20 backdrop-blur-md rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block mb-2">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 mb-4 bg-white/20 backdrop-blur-md rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block mb-2">Subject:</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full p-3 mb-4 bg-white/20 backdrop-blur-md rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block mb-2">Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 mb-6 bg-white/20 backdrop-blur-md rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
        ></textarea>

        <button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className={`w-full font-semibold py-3 rounded-md transition-colors duration-300 ${
            isFormValid && !isSubmitting
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-gray-400 cursor-not-allowed text-gray-700"
          }`}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </>
  );
};

export default ContactForm;