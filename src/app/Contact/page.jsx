"use client"; // Only keep if using App Router

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white py-20 px-4">
      <div className="max-w-3xl mx-auto bg-slate-900 p-10 rounded-2xl shadow-2xl border border-rose-700">
       <div className="mb-8 text-center">
  <h1 className="text-4xl font-bold text-rose-500 mb-4">
    Get in Touch
  </h1>
  <p className="text-white text-lg max-w-md mx-auto">
    Please make sure your ID is correct and connect with us!
  </p>
</div>


        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Full Name</label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Email Address</label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              placeholder="example@domain.com"
              className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Subject</label>
            <input
              type="text"
              name="subject"
              required
              onChange={handleChange}
              placeholder="What's your message about?"
              className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              onChange={handleChange}
              placeholder="Write your message here..."
              className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
            ></textarea>
          </div>

         
   
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-8 rounded-md transition shadow-md"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
