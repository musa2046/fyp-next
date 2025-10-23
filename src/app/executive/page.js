"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { AdvisorCard } from "../../components/AdvisorCard";
import advisors from "../../data/advisors";
import { ExecutiveCard } from "../../components/ExecutiveCard";
import {executives} from "../../data/executives";

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

          {executives.map((executive) => (
            <ExecutiveCard
              key={executive.name}
              name={executive.name}
              role={executive.role}
              image={executive.image}
              bio={executive.bio}
              facebook={executive.facebook}
              instagram={executive.instagram}
            />
          ))}

        </div>
      </section>
      {/* Patron In Chief Section */}
      <section className="w-full py-20 bg-linear-to-b from-green-50 to-white">
  <div className="max-w-7xl mx-auto px-6">
    {/* Heading */}
    <h2
      className="text-center font-extrabold text-4xl md:text-5xl text-green-800 mb-16"
      data-aos="fade-up"
    >
      Patron In Chief
    </h2>

    <div
      className="flex flex-col items-center text-center"
      data-aos="fade-up"
    >
      {/* Image (Horizontal landscape style) */}
      <div className="relative w-[480px] h-[280px] sm:w-[600px] sm:h-[350px] overflow-hidden rounded-2xl shadow-2xl border-4 border-green-600">
        <Image
          src="/images/executives/president.jpg" 
          alt="Patron in Chief"
          fill
          className="object-cover object-center transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Name & Designation */}
      <h2 className="mt-8 text-3xl font-bold text-gray-800">
        Muhammad Zahir Shah
      </h2>
      <p className="text-green-700 font-semibold text-lg">
        Patron-in-Chief
      </p>

      {/* Message */}
      <div className="max-w-2xl mt-8 text-gray-700 leading-relaxed">
        <blockquote className="text-xl italic text-gray-700 leading-relaxed border-l-4 border-green-600 pl-4">
          “It gives me immense pleasure to see the young generation stepping up
          as changemakers, thinkers, and leaders of tomorrow. The Federal Youth
          Parliament stands as a platform for empowerment, inclusion, and
          innovation — a voice for the future we are building together.”
        </blockquote>
      </div>
    </div>
  </div>
</section>


      {/* Legal Advisors Section */}

      <section className="w-full py-20 bg-linear-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-center font-extrabold text-4xl md:text-5xl text-green-800 mb-16"
            data-aos="fade-up"
          >
            Advisors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
            {advisors.map((advisor) => (
              <AdvisorCard 
                key={advisor.name}
                img={advisor.img}
                name={advisor.name}
                role={advisor.role}
                bio={advisor.bio}
                delay={advisor.delay}
              />
            ))}
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
