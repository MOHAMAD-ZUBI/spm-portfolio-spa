"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import { TbSend } from "react-icons/tb";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
    contact: "",
  });

  const finalMessage = `Name: ${formData.name}\nSubject: ${formData.subject}\nMessage: ${formData.message}\nContact: ${formData.contact}`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to EmailJS
    emailjs
      .send(
        "service_m6dog7s", // Your service ID from EmailJS
        "template_eqm7gqi", // Your template ID from EmailJS
        {
          to_name: "Sauber Pro Max", // This can be dynamic if needed
          from_name: formData.name,
          message: finalMessage,
          contact_info: formData.contact,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY // Public Key from environment variables
      )
      .then(
        (response) => {
          console.log("Success:", response);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("Error:", error);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div className=" max-w-[1200px] rounded-2xl bg-white border-4 border-dashed  border-blue-700/45 text-black p-8 w-full mx-auto ">
      <div className=" flex flex-row justify-between max-md:flex-col gap-2 ">
        <div className=" w-full space-y-12">
          <div className=" flex flex-col gap-4">
            <h1 className=" text-5xl font-bold ">Get in Touch</h1>
            <p> </p>
          </div>

          <div className=" flex flex-col gap-6">
            <div>
              <HiOutlineMail className="inline-block w-6 h-6" />
              <span className="inline-block mx-2">Sauberpromax@gmail.com</span>
            </div>
            <div>
              <HiOutlinePhone className="inline-block w-6 h-6" />
              <span className="inline-block mx-2">+49 176 84234070</span>
            </div>
            <div>
              <HiOutlineLocationMarker className="inline-block w-6 h-6" />
              <span className="inline-block mx-2">Frankfurt, germany</span>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="contact-form p-6 bg-white rounded-lg shadow-lg w-full mx-auto"
        >
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-700 font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="subject"
                className="text-gray-700 font-medium mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-gray-700 font-medium mb-1"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-40 resize-none"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="contact"
                className="text-gray-700 font-medium mb-1"
              >
                Email or Phone Number
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                placeholder="Email or Phone Number"
                value={formData.contact}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message{" "}
              <TbSend className="inline-block w-6 h-6 text-white" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
