import Image from "next/image";
import React from "react";

export default function News() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Latest News &amp; Updates</h1>
        <p className="mt-4 text-lg">
          Stay updated with the latest happenings at the Federal Youth
          Organization
        </p>
      </section>

      {/* Main Content */}
      <main className="w-full bg-gray-50">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          {/* Article 1 */}
          <article className="relative bg-white shadow-lg rounded-2xl overflow-hidden group">
            <Image
              src="/images/home/about-img.jpg"
              alt="Youth Parliament Initiative"
              width={1200}
              height={500}
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>
            <div className="absolute bottom-0 p-8 text-white">
              <span className="text-sm opacity-80">September 15, 2025</span>
              <h2 className="text-4xl font-bold mt-2">
                Youth Parliament Launches New Initiative
              </h2>
              <p className="mt-3 text-gray-200 max-w-3xl">
                The Federal Youth Organization has launched a new nationwide
                initiative aimed at empowering young leaders through skill
                development, leadership training, and networking opportunities.
              </p>
            </div>
          </article>

          {/* Article 2 */}
          <article className="relative bg-white shadow-lg rounded-2xl overflow-hidden group">
            <Image
              src="/images/home/bg2.jpg"
              alt="Annual Youth Conference 2025"
              width={1200}
              height={500}
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>
            <div className="absolute bottom-0 p-8 text-white">
              <span className="text-sm opacity-80">August 30, 2025</span>
              <h2 className="text-4xl font-bold mt-2">
                Annual Youth Conference 2025 Announced
              </h2>
              <p className="mt-3 text-gray-200 max-w-3xl">
                The upcoming Annual Youth Conference 2025 will be held in
                Islamabad, featuring speakers, workshops, and networking sessions
                to inspire the next generation of leaders.
              </p>
            </div>
          </article>

          {/* Article 3 */}
          <article className="relative bg-white shadow-lg rounded-2xl overflow-hidden group">
            <Image
              src="/images/home/bg2.jpg"
              alt="Federal Youth Parliament Meeting"
              width={1200}
              height={500}
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>
            <div className="absolute bottom-0 p-8 text-white">
              <span className="text-sm opacity-80">July 20, 2025</span>
              <h2 className="text-4xl font-bold mt-2">
                Federal Youth Parliament Meets Policy Makers
              </h2>
              <p className="mt-3 text-gray-200 max-w-3xl">
                Youth representatives met with government officials to discuss
                the importance of youth-led policy making, education reforms,
                and sustainable development initiatives.
              </p>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
