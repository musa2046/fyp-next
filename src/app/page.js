"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

//  swiper slider imports

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const newsItems = [
    {
      title: "Youth Summit 2025",
      desc: "Highlights from our national youth summit and future initiatives for leadership growth.",
      img: "/images/home/bg2.jpg",
      link: "/news",
    },
    {
      title: "Community Outreach Program",
      desc: "Empowering youth through community service and leadership engagement.",
      img: "/images/home/bg2.jpg",
      link: "/news",
    },
    {
      title: "Tech Innovation Workshop",
      desc: "A hands-on experience to promote digital innovation among young leaders.",
      img: "/images/home/bg2.jpg",
      link: "/news",
    },
    {
      title: "Cultural Exchange Event",
      desc: "Bringing together youth from different regions to celebrate diversity.",
      img: "/images/home/bg2.jpg",
      link: "/news",
    },
    {
      title: "Green Future Drive",
      desc: "Initiatives for environmental awareness and sustainability projects.",
      img: "/images/home/bg2.jpg",
      link: "/news",
    },
  ];
  return (
    <main>

      {/* ******************** HERO *********************** */}
      <section className="relative h-screen flex items-center justify-center text-center text-white overflow-x-hidden">
        {/* Background Slideshow */}
        <div id="slideshow" className="absolute inset-0">
          <Image src="/images/home/bg.jpg" fill alt="bg" className="object-cover opacity-100 transition-opacity duration-1000" />
          <Image src="/images/home/bg2.jpg" fill alt="bg2" className="object-cover opacity-0 transition-opacity duration-1000" />
          <Image src="/images/home/bg3.jpg" fill alt="bg3" className="object-cover opacity-0 transition-opacity duration-1000" />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/70"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center" data-aos="fade-up">
          <span className="inline-block bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium tracking-wide mb-4 animate-pulse">
            Empowering Youth • Shaping Future
          </span>
          <h1 className="font-extrabold text-4xl md:text-6xl leading-tight mb-4 drop-shadow-lg">
            Federal Youth <span className="text-green-500">Parliament</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
            A united platform where young leaders raise their voices, create impact, and lead Pakistan toward a brighter tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/membership" className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full px-6 py-3 shadow-lg transition transform hover:scale-105">
              Join FYP Now
            </Link>
            <Link href="/about" className="bg-white/90 hover:bg-white text-green-700 font-semibold rounded-full px-6 py-3 shadow-lg transition transform hover:scale-105">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ******************** ABOUT *********************** */}
      <section className="w-full py-20 bg-linear-to-r from-green-50 via-[#FAF3DD] to-green-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 flex flex-col gap-6" data-aos="fade-up">
            <span className="inline-block bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium tracking-wide w-fit">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              About <span className="text-green-600">Federal Youth Parliament</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The Federal Youth Parliament is a vibrant platform uniting young leaders to 
              address social, political, and economic challenges. Through collaboration, 
              innovation, and civic engagement, we empower youth to shape a brighter 
              and more inclusive future for Pakistan.
            </p>
            <Link href="/about" className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full px-6 py-3 shadow-lg transition transform hover:scale-105 w-fit">
              Learn More
            </Link>
          </div>

          <div className="flex-1 relative" data-aos="fade-down">
            <Image src="/images/about/about-dummy.jpg" alt="About FYP" width={600} height={400} className="w-full rounded-2xl shadow-xl object-cover border-4 border-white" />
          </div>
        </div>
      </section>

      {/* ******************** PROGRAM CARDS *********************** */}
      <section className="w-full py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Our <span className="text-green-700">Programs</span>
            </h2>
            <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
              Federal Youth Parliament runs diverse initiatives to empower youth, 
              build leadership, and create meaningful impact in communities.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                img: "/images/programs/youth-gathering.jpg",
                title: "Youth Gathering",
                desc: "An engaging space where young leaders connect, share ideas, and collaborate to inspire meaningful social change."
              },
              {
                img: "/images/programs/leadership-program.jpg",
                title: "Leadership Program",
                desc: "Training confident, ethical, and visionary leaders ready to influence the nation’s political and social landscape."
              },
              {
                img: "/images/programs/skill-development.jpg",
                title: "Skill Development",
                desc: "Equipping youth with skills in technology, communication, and entrepreneurship for a brighter future."
              }
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform transition duration-500 hover:-translate-y-2 hover:scale-[1.02]" data-aos="fade-up" data-aos-delay={(i + 1) * 100}>
                <Image src={card.img} alt={card.title} width={400} height={300} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-green-800">{card.title}</h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center" data-aos="fade-up" data-aos-delay="400">
            <Link href="/programs" className="bg-green-700 text-white font-bold rounded-full px-8 py-3 hover:bg-green-800 transition">
              See More
            </Link>
          </div>
        </div>
      </section>
            {/* ************************************************ EXECUTIVE MEMBERS ********************************* */}
<section className="w-full py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-12" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
        Our <span className="text-green-700">Executive Members</span>
      </h2>
      <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
        Meet the leadership team driving Federal Youth Parliament forward with vision, dedication, and passion for youth empowerment.
      </p>
    </div>

    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          name: "Salah Uddin Khan",
          role: "Vice President",
          img: "/images/executives/vice-president.jpg",
          delay: "100",
        },
        {
          name: "Muhammad Ibrar Khilji",
          role: "President / Chairman",
          img: "/images/executives/president.jpg",
          delay: "200",
        },
        {
          name: "Saqib Ali",
          role: "General Secretary",
          img: "/images/executives/general-sect2.jpg",
          delay: "300",
        },
      ].map((member) => (
        <div
          key={member.name}
          className="max-w-sm mx-auto shadow-xl rounded-2xl overflow-hidden relative transform transition duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl"
          data-aos="fade-up"
          data-aos-delay={member.delay}
        >
          <div className="absolute inset-0">
            <img
              src={member.img}
              alt={member.role}
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-green-50 bg-opacity-70"></div>
          </div>
          <div className="relative flex flex-col items-center p-6">
            <img
              src={member.img}
              alt={member.role}
              className="w-36 h-36 rounded-full border-4 border-green-600 shadow-lg object-cover mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
            <p className="text-green-700 font-semibold mb-3">{member.role}</p>
            <p className="text-gray-700 text-center text-sm leading-relaxed">
              Visionary leader dedicated to empowering youth through innovation, collaboration, and impactful programs.
            </p>
          </div>
          <div className="relative flex justify-center gap-6 py-4 bg-white/70 backdrop-blur-md border-t">
            <a href="#" className="text-gray-500 hover:text-green-700 transition text-xl">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-green-700 transition text-xl">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-12 flex justify-center" data-aos="fade-up" data-aos-delay="400">
      <a
        href="/pages/executive.html"
        className="bg-green-700 text-white font-bold rounded-full px-8 py-3 hover:bg-green-800 transition"
      >
        See More
      </a>
    </div>
  </div>
</section>

{/* ****************************************** UPCOMING EVENTS ******************************** */}
<section className="w-full py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-extrabold text-center text-green-700 mb-10" data-aos="fade-up">
      Upcoming <span className="text-gray-800">Events</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { date: "25 Sep 2025", place: "Nowshehra", title: "Youth Leadership Summit" },
        { date: "10 Oct 2025", place: "Bannu", title: "Community Awareness Drive" },
        { date: "05 Nov 2025", place: "Malakand", title: "Youth Policy Workshop" },
      ].map((event, i) => (
        <div
          key={i}
          className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
              {event.date}
            </span>
            <span className="text-gray-500 text-sm">{event.place}</span>
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">{event.title}</h3>
          <p className="text-gray-600 text-sm">
            A gathering of young leaders across Pakistan to share ideas, inspire change, and build networks.
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ****************************************** GALLERY ******************************** */}
<section className="py-20 bg-white">
  <div className="text-center mb-12" data-aos="fade-up">
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
      <span className="text-green-700">FYP</span> Gallery
    </h2>
    <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
      Explore memorable moments and highlights captured from our journey at the Federal Youth Parliament.
    </p>
  </div>

  <div className="flex items-center gap-2 h-[400px] w-full max-w-4xl mt-10 mx-auto">
    {[1, 2, 3, 4, 5, 6].map((num) => (
      <div
        key={num}
        className="relative group grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full"
      >
        <img
          src={`/images/gallery/gallery${num}.jpg`}
          alt={`Gallery ${num}`}
          className="h-full w-full object-cover object-center"
        />
      </div>
    ))}
  </div>

  <div className="mt-12 flex justify-center" data-aos="fade-up" data-aos-delay="200">
    <a
      href="/pages/Gallery.html"
      className="bg-green-700 text-white font-bold rounded-full px-8 py-3 hover:bg-green-800 transition"
    >
      View Gallery
    </a>
  </div>
</section>
{/* {*************************************** NEWS & UPDATES *******************************} */}
<section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            News & <span className="text-green-700">Updates</span>
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest activities, events, and initiatives from
            the Federal Youth Parliament.
          </p>
        </div>

        {/* Swiper Section */}
        <div data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper"
          >
            {newsItems.map((item, index) => (
              <SwiperSlide key={index}>
                <a
                  href={item.link}
                  className="block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
                >
                  <div className="relative">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="h-80 w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-200 text-sm mb-3">{item.desc}</p>
                      <span className="text-green-400 font-semibold hover:underline">
                        Read More →
                      </span>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
{/* ****************************************** CONTACT FORM ******************************** */}
<section className="relative bg-gray-900 text-white overflow-hidden">
  <div className="absolute inset-0">
    <img
      src="/images/home/bg2.jpg"
      alt="background"
      className="w-full h-full object-cover opacity-70"
    />
  </div>
  <div className="absolute inset-0 bg-linear-to-r from-black/70 to-green-900/50"></div>

  <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div data-aos="fade-right" className="space-y-6">
      <p className="text-green-400 font-semibold tracking-wide uppercase">Be a part of FYP</p>
      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
        Join Us Now and <span className="text-green-400">Be the Voice of Change!</span>
      </h2>
      <p className="text-gray-300 text-lg leading-relaxed">
        Step into leadership with the Federal Youth Parliament (FYP). Inspire change, connect with leaders,
        and be the force that drives Pakistan toward a brighter future. Your journey starts here!
      </p>
    </div>

    <div data-aos="fade-left" className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
      <form className="space-y-5">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-lg bg-white/80 text-gray-800 focus:ring-2 focus:ring-green-400 outline-none transition"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-lg bg-white/80 text-gray-800 focus:ring-2 focus:ring-green-400 outline-none transition"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full px-4 py-3 rounded-lg bg-white/80 text-gray-800 focus:ring-2 focus:ring-green-400 outline-none transition"
        />
        <textarea
          placeholder="Type Your Message"
          rows="4"
          className="w-full px-4 py-3 rounded-lg bg-white/80 text-gray-800 focus:ring-2 focus:ring-green-400 outline-none transition"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-linear-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-3 rounded-full shadow-lg transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>


    </main>
  );
}
