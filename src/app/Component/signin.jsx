"use client";
import { useState } from "react";

export default function LoginForm() {
  const [isEmailLogin, setIsEmailLogin] = useState(true);
  const [formData, setFormData] = useState({ email: "", phone: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-700 to-green-500 p-4">
      <div className="bg-white w-full max-w-sm rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-center text-green-700 mb-1">BG678</h2>
        <p className="text-center text-gray-500 text-sm mb-4">
          Please log in with your phone number or email
        </p>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-4">
          <button
            onClick={() => setIsEmailLogin(false)}
            className={`flex-1 py-2 text-sm font-medium ${
              !isEmailLogin ? "border-b-2 border-green-600 text-green-700" : "text-gray-400"
            }`}
          >
            Log in with phone
          </button>
          <button
            onClick={() => setIsEmailLogin(true)}
            className={`flex-1 py-2 text-sm font-medium ${
              isEmailLogin ? "border-b-2 border-green-600 text-green-700" : "text-gray-400"
            }`}
          >
            Email login
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {isEmailLogin ? (
            <div>
              <label className="block text-gray-600 text-sm mb-1">Mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Please enter the email"
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
          ) : (
            <div>
              <label className="block text-gray-600 text-sm mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Please enter your phone number"
                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
          )}

          <div>
            <label className="block text-gray-600 text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Please enter password"
              className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-1">
              <input type="checkbox" className="accent-green-600" />
              Remember password
            </label>
            <a href="#" className="text-green-600 hover:underline">
              Forgot password
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Log in
          </button>

          <button
            type="button"
            className="w-full border border-green-600 text-green-600 py-2 rounded-lg hover:bg-green-50 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
