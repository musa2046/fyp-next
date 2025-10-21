"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function ExecutiveSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full bg-gray-900 text-white py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/home/bg.jpg"
            alt="Programs"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-5xl mx-auto px-6 text-center" data-aos="zoom-in">
          <p className="text-green-400 font-semibold tracking-wide uppercase mb-4">
            Federal Youth Parliament
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Meet Our Leaders
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            The Executive Members of Federal Youth Parliament are visionary
            changemakers, dedicated to{" "}
            <span className="text-green-400 font-semibold">
              youth empowerment
            </span>
            ,{" "}
            <span className="text-green-400 font-semibold">leadership</span>, and
            building a brighter future for Pakistan.
          </p>
        </div>
      </section>

      {/* Executive Members Section */}
      <section className="w-full py-20 bg-linear-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-center font-extrabold text-4xl md:text-5xl text-green-800 mb-16"
            data-aos="fade-up"
          >
            Executive Members
          </h2>

          {/* Member 1 */}
          <div
            className="grid md:grid-cols-2 gap-10 items-center mb-20"
            data-aos="fade-up"
          >
            <div className="flex justify-center">
              <Image
                src="/images/executives/president.jpg"
                alt="President"
                width={300}
                height={300}
                className="w-72 h-72 object-cover rounded-3xl shadow-xl border-4 border-green-600"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800">
                Muhammad Ibrar Khilji
              </h3>
              <p className="text-green-700 font-semibold mb-4">
                President / Chairman
              </p>
              <blockquote className="text-xl italic text-gray-700 leading-relaxed border-l-4 border-green-600 pl-4">
                “As President, I envision building a community where every voice
                matters and innovation drives meaningful change.”
              </blockquote>
              <div className="flex gap-5 mt-6">
                <a
                  href="#"
                  className="text-gray-500 hover:text-green-700 transition text-2xl"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-green-700 transition text-2xl"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Member 2 */}
          <div
            className="grid md:grid-cols-2 gap-10 items-center mb-20 md:flex-row-reverse"
            data-aos="fade-up"
          >
            <div className="flex justify-center md:order-2">
              <Image
                src="/images/executives/vice-president.jpg"
                alt="Vice President"
                width={300}
                height={300}
                className="w-72 h-72 object-cover rounded-3xl shadow-xl border-4 border-green-600"
              />
            </div>
            <div className="md:order-1">
              <h3 className="text-3xl font-bold text-gray-800">
                Salah Uddin Khan
              </h3>
              <p className="text-green-700 font-semibold mb-4">Vice President</p>
              <blockquote className="text-xl italic text-gray-700 leading-relaxed border-l-4 border-green-600 pl-4">
                “My mission is to empower youth through knowledge and
                opportunities, fostering innovation and leadership.”
              </blockquote>
              <div className="flex gap-5 mt-6">
                <a
                  href="#"
                  className="text-gray-500 hover:text-green-700 transition text-2xl"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-green-700 transition text-2xl"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Member 3 */}
          <div
            className="grid md:grid-cols-2 gap-10 items-center mb-20"
            data-aos="fade-up"
          >
            <div className="flex justify-center">
              <Image
                src="/images/executives/general-sect2.jpg"
                alt="General Secretary"
                width={300}
                height={300}
                className="w-72 h-72 object-cover rounded-3xl shadow-xl border-4 border-green-600"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800">Saqib Ali</h3>
              <p className="text-green-700 font-semibold mb-4">
                General Secretary
              </p>
              <blockquote className="text-xl italic text-gray-700 leading-relaxed border-l-4 border-green-600 pl-4">
                “I believe in collaboration and teamwork, ensuring smooth
                communication and effective organizational growth.”
              </blockquote>
              <div className="flex gap-5 mt-6">
                <a
                  href="#"
                  className="text-gray-500 hover:text-green-700 transition text-2xl"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-green-700 transition text-2xl"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="w-full bg-[#FAF3DD] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center" data-aos="zoom-in">
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Join Us in Shaping the Future
          </h2>
          <p className="text-gray-700 mb-8">
            Be part of the movement that empowers youth, drives leadership, and
            builds communities. Whether you want to contribute or collaborate,
            we welcome you.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="/membership"
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-semibold shadow-md transition"
            >
              Join Us
            </a>
            <a
              href="/contact"
              className="bg-white border border-green-700 text-green-700 hover:bg-green-100 px-6 py-3 rounded-full font-semibold shadow-md transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
