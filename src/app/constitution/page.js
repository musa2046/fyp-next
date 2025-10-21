"use client";

import React from "react";

export default function ConstitutionPage() {
  return (
    <main>
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Constitution of Federal Youth Parliament
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            The Federal Youth Parliament (FYP) is guided by its constitution, ensuring
            transparency, inclusivity, and leadership development among youth.
            Explore the details below or download the complete document.
          </p>

          {/* Constitution Content */}
          <div className="bg-white shadow-lg rounded-2xl p-8 text-left border border-gray-200">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Preamble</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We, the youth of Pakistan, united under the Federal Youth Parliament,
              commit ourselves to promoting leadership, social responsibility,
              innovation, and progress for a brighter future.
            </p>

            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Article I: Membership
            </h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Membership is open to youth across Pakistan aged 18–30 years.</li>
              <li>Each member shall adhere to the vision, mission, and values of FYP.</li>
              <li>Members shall actively participate in events, discussions, and initiatives.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Article II: Structure
            </h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>
                The Parliament shall be divided into committees for governance, education,
                technology, and community development.
              </li>
              <li>Each committee shall elect representatives democratically.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Article III: Objectives
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The primary objectives of the Federal Youth Parliament are to empower youth
              voices, develop leadership, foster innovation, and encourage participation in
              national progress.
            </p>

            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Article IV: Amendments
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Amendments to this constitution may be proposed by members and shall require
              approval by a two-thirds majority.
            </p>

            {/* Download Button */}
            <div className="mt-8 text-center">
              <a
                href="/docs/FYP-Constitution.pdf"
                download
                className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-green-700 transition"
              >
                📄 Download Constitution (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
