"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPageWithImage() {
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 via-purple-500 to-pink-500 p-4">
      <div className="flex w-full max-w-6xl bg-white rounded-2xl shadow-lg overflow-hidden gap-8">
        
    
        <div className="flex-[1.4] hidden md:block">
          <Image
            src="/13.jpg" 
            alt="Login Image"
            width={800}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>

    
        <div className="flex-[0.8] p-8 bg-gradient-to-r from-blue-500 to-teal-400 bg-opacity-90">
          <h2 className="text-2xl font-semibold text-center text-white mb-1">GameVerse</h2>
          <p className="text-center text-white text-sm mb-4">
            Please log in with your phone number or email
          </p>

          <div className="flex border-b border-white mb-4">
            <button
              onClick={() => setIsEmailLogin(false)}
              className={`flex-1 py-2 text-sm font-medium ${
                !isEmailLogin ? "border-b-2 border-white text-white" : "text-white/70"
              }`}
            >
              Log in with phone
            </button>
            <button
              onClick={() => setIsEmailLogin(true)}
              className={`flex-1 py-2 text-sm font-medium ${
                isEmailLogin ? "border-b-2 border-white text-white" : "text-white/70"
              }`}
            >
              Email login
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isEmailLogin ? (
              <div>
                <label className="block text-white text-sm mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Please enter your email"
                  className="w-full border border-white/50 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-white outline-none bg-white bg-opacity-20 text-white"
                />
              </div>
            ) : (
              <div>
                <label className="block text-white text-sm mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Please enter your phone number"
                  className="w-full border border-white/50 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-white outline-none bg-white bg-opacity-20 text-white"
                />
              </div>
            )}

            <div>
              <label className="block text-white text-sm mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Please enter password"
                className="w-full border border-white/50 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-white outline-none bg-white bg-opacity-20 text-white"
              />
            </div>

            <div className="flex items-center justify-between text-sm text-white">
              <label className="flex items-center gap-1">
                <input type="checkbox" className="accent-white" />
                Remember password
              </label>
              <a href="#" className="hover:underline">
                Forgot password
              </a>
            </div>
<button
  type="submit"
  className="w-full bg-gradient-to-r from-yellow-400 to-red-600 text-white py-2 rounded-lg hover:opacity-90 transition"
>
  Log in
</button>

<button
  onClick={() => router.push("./register")}
  className="w-full border border-white text-white py-2 rounded-lg hover:bg-white/10 transition"
>
  Register
</button>

          </form>
        </div>
      </div>
    </div>
  );
}
