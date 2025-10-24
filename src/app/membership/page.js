"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MembershipForm = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);


  const [form, setForm] = React.useState({  
    name: "",
    email: "",
    phone: "",
    cnic: "",
    gender : "",
    age: "",
    dob: "",
    province: "",
    education: "",
    reason: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

     const message = `
📝 *New Membership Request*
----------------------------
 Name: ${form.name}
 Email: ${form.email}
 Phone: ${form.phone}
 CNIC: ${form.cnic}
 Gender: ${form.gender}
 Age: ${form.age}
 Date of Birth: ${form.dob}
 Province: ${form.province}
 Education: ${form.education}
 Reason: ${form.reason}

    `;
    const whatsappUrl = `https://wa.me/923335825437?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
    setForm({
    name: "",
    email: "",
    phone: "",
    cnic: "",
    gender : "",
    age: "",
    dob: "",
    province: "",
    education: "",
    reason: ""  });
  }
  return (
    <section className="min-h-screen flex items-center justify-center p-6 bg-gray-100">
      <main
        className="w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden"
        data-aos="fade-up"
      >
        <div className="p-8 md:p-12">
          {/* Heading */}
          <h1
            className="text-3xl md:text-4xl font-extrabold  mb-3 text-center text-green-700"
            data-aos="fade-down"
          >
            Join Federal Youth Parliament
          </h1>
          <p
            className="text-gray-600 text-center mb-8 max-w-2xl mx-auto"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Fill in the form below to apply for membership. We welcome energetic
            and motivated youth who want to make a change in society.
          </p>

          {/* Success message */}
          <div
            id="success1"
            className="hidden mb-6 p-4 rounded-lg bg-green-100 border border-green-300 text-green-800 text-center font-medium"
          >
            ✅ Thank you for applying! We will contact you soon.
          </div>

          {/* Membership Form */}
          <form id="joinForm" className="space-y-6" onSubmit={handleSubmit} noValidate>
            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col" data-aos="fade-right">
                <span className="text-sm font-medium text-gray-700">
                  Full Name <span className="text-red-500">*</span>
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="mt-2 p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                />
              </label>

              <label className="flex flex-col" data-aos="fade-left">
                <span className="text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="mt-2 p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col" data-aos="fade-right" data-aos-delay="100">
                <span className="text-sm font-medium text-gray-700">
                  Phone <span className="text-red-500">*</span>
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="03XX-XXXXXXX"
                  className="mt-2 p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                />
              </label>

              <label className="flex flex-col" data-aos="fade-left" data-aos-delay="100">
                <span className="text-sm font-medium text-gray-700">
                  CNIC <span className="text-red-500">*</span>
                </span>
                <input
                  type="text"
                  name="cnic"
                  value={form.cnic}
                  onChange={handleChange}
                  required
                  placeholder="12345-1234567-1"
                  pattern="^\d{5}-\d{7}-\d{1}$"
                  className="mt-2 p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                />
              </label>
            </div>

            {/* Gender & Age */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col" data-aos="fade-right">
                <span className="text-sm font-medium text-gray-700">
                  Gender <span className="text-red-500">*</span>
                </span>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  required
                  className="mt-2 p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                >
                  <option value="">— Select Gender —</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </label>

              <label className="flex flex-col" data-aos="fade-left">
                <span className="text-sm font-medium text-gray-700">
                  Age <span className="text-red-500">*</span>
                </span>
                <input
                  type="number"
                  name="age"
                  value={form.age}
                  onChange={handleChange}
                  required
                  min="15"
                  max="35"
                  placeholder="Your age"
                  className="mt-2 p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                />
                <small className="text-xs text-gray-500 mt-1">
                  Must be between 15–35 years
                </small>
              </label>
            </div>

            {/* Date of Birth */}
            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-700">
                Date of Birth *
              </span>
              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                required
                className="mt-2 p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-green-500"
              />
            </label>

            {/* Province */}
            <label className="flex flex-col" data-aos="fade-up">
              <span className="text-sm font-medium text-gray-700">
                Province / Region <span className="text-red-500">*</span>
              </span>
              <select
                name="province"
                value={form.province}
                onChange={handleChange}
                required
                className="mt-2 p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
              >
                <option value="">— Select Province —</option>
                <option>Punjab</option>
                <option>Sindh</option>
                <option>Khyber Pakhtunkhwa</option>
                <option>Balochistan</option>
                <option>Gilgit Baltistan</option>
                <option>Azad Jammu & Kashmir</option>
                <option>Islamabad Capital Territory</option>
              </select>
            </label>

            {/* Education */}
            <label className="flex flex-col" data-aos="fade-up" data-aos-delay="100">
              <span className="text-sm font-medium text-gray-700">Education</span>
              <input
                type="text"
                name="education"
                value={form.education}
                onChange={handleChange}
                placeholder="Your education level"
                className="mt-2 p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
              />
            </label>

            {/* Motivation */}
            <label className="flex flex-col" data-aos="fade-up" data-aos-delay="200">
              <span className="text-sm font-medium text-gray-700">
                Why do you want to join? <span className="text-red-500">*</span>
              </span>
              <textarea
                name="reason"
                value={form.reason}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Write briefly why you want to join..."
                className="mt-2 p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
              ></textarea>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition"
              data-aos="zoom-in"
            >
              Submit Application
            </button>
          </form>
        </div>
      </main>
    </section>
  );
};

export default MembershipForm;
