// "use client";

// import Image from "next/image";
// import React,{useEffect} from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// const Achievements = () => {
//    useEffect(() => {
//       AOS.init({ duration: 1000, once: true });
//     }, []);
 
//   return (
//     <main>

//       {/* Hero Section */}
//       <section className="relative w-full h-[80vh] flex items-center justify-center">
//         {/* Background */}
//         <div className="absolute inset-0">
//           <Image
//             src="/images/home/bg2.jpg"
//             alt="Achievements Background"
//             fill
//             className="object-cover"
//           />
//           <div className="absolute inset-0 bg-black/70"></div>
//         </div>

//         {/* Content */}
//         <div
//           className="relative max-w-5xl mx-auto px-6 text-center text-white"
//           data-aos="fade-up"
//         >
//           <p className="text-green-400 font-semibold tracking-wide uppercase mb-3">
//             Celebrating Success
//           </p>
//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
//             Our <span className="text-green-400">Achievements</span>
//           </h1>
//           <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
//             Over the years, Federal Youth Parliament has earned remarkable{" "}
//             <span className="text-green-400 font-semibold">milestones</span> through community service,
//             youth empowerment, and impactful programs. These{" "}
//             <span className="text-green-400 font-semibold">achievements</span>{" "}
//             reflect our dedication to shaping a better tomorrow for Pakistan.
//           </p>
//         </div>
//       </section>

//       {/* Journey Section */}
//       <section className="max-w-7xl mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center" data-aos="fade-up">
//           {/* Text */}
//           <div>
//             <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
//               <span className="text-gray-900">Our</span>{" "}
//               <span className="text-green-600">Journey</span>
//             </h2>
//             <p className="text-gray-700 leading-relaxed text-justify">
//               Federal Youth Parliament (FYP) has made significant strides in youth empowerment and national development.
//               FYP has organized{" "}
//               <span className="text-green-600 font-semibold">
//                 500+ events, conferences, and campaigns
//               </span>
//               , engaging thousands of young individuals across Pakistan.
//             </p>
//             <p className="text-gray-700 leading-relaxed mt-4 text-justify">
//               Through initiatives like the{" "}
//               <span className="text-green-600 font-semibold">Green Movement</span>, FYP launched plantation drives.
//               The Legal Forum has trained young lawyers through workshops and moot courts,
//               while the Youth Parliament has promoted democracy and leadership.
//             </p>
//             <p className="text-gray-700 leading-relaxed mt-4 text-justify">
//               These achievements reflect FYP’s commitment to building an informed,
//               capable, and globally connected youth community dedicated to sustainable development.
//             </p>
//           </div>

//           {/* Image */}
//           <div className="flex justify-center md:justify-end">
//             <div className="relative w-full max-w-md h-[400px]" data-aos="fade-left">
//               <Image
//                 src="/images/home/bg3.jpg"
//                 alt="Achievements Image"
//                 fill
//                 className="rounded-xl shadow-lg object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Achievements by Sectors */}
//       <section className="max-w-7xl mx-auto px-6 py-16">
//         <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
//           <span className="text-gray-900">Achievements by</span>{" "}
//           <span className="text-green-600">Sectors</span>
//         </h2>
//         <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
//           FYP’s impact spans across multiple sectors, creating lasting change through healthcare,
//           education, community development, and youth empowerment programs.
//         </p>

//         {/* Cards */}
//         <div className="grid md:grid-cols-3 gap-8" data-aos="zoom-in">
//           {[
//             {
//               title: "Medical Camps",
//               desc: "Free medical camps served 2000+ patients, providing medicines, equipment, and treatment to the poor and needy.",
//               img: "/images/home/bg2.jpg",
//             },
//             {
//               title: "Sports Events",
//               desc: "Engaging youth through healthy activities, tournaments, and awareness campaigns across Pakistan.",
//               img: "/images/home/bg2.jpg",
//             },
//             {
//               title: "Vocational Training",
//               desc: "Workshops and skill programs empowering youth leaders and strengthening democracy.",
//               img: "/images/home/bg2.jpg",
//             },
//           ].map((card, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:-translate-y-2"
//             >
//               <Image
//                 src={card.img}
//                 alt={card.title}
//                 width={500}
//                 height={300}
//                 className="h-48 w-full object-cover"
//               />
//               <div className="p-5">
//                 <h3 className="text-xl font-bold text-green-700 mb-2">{card.title}</h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Awards Section */}
//       <section className="relative py-20">
//         {/* Background */}
//         <div className="absolute inset-0">
//           <Image
//             src="/images/home/bg2.jpg"
//             alt="Awards Background"
//             fill
//             className="object-cover"
//           />
//           <div className="absolute inset-0 bg-green-900/70"></div>
//         </div>

//         {/* Content */}
//         <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
//           <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
//             <span className="text-white">Awards &</span>{" "}
//             <span className="text-green-400">Recognitions</span>
//           </h2>
//           <p className="max-w-2xl mx-auto mb-12 text-gray-200">
//             Federal Youth Parliament has been honored with multiple awards for{" "}
//             <span className="text-green-400 font-semibold">
//               leadership, sustainability, and community impact
//             </span>.
//           </p>

//           {/* Awards Grid */}
//           <div
//             className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
//             data-aos="fade-up"
//           >
//             {[
//               {
//                 title: "Youth Leadership Award",
//                 desc: "Recognized for outstanding youth leadership programs nationwide.",
//                 img: "/images/achievements/awards/award1.jpg",
//               },
//               {
//                 title: "Sustainability Excellence",
//                 desc: "Awarded for the Green Movement and plantation drives.",
//                 img: "/images/achievements/awards/award2.jpg",
//               },
//               {
//                 title: "Global Youth Forum",
//                 desc: "Honored for representing Pakistani youth at international forums.",
//                 img: "/images/achievements/awards/award3.jpg",
//               },
//               {
//                 title: "Community Impact",
//                 desc: "For medical camps, relief work, and outreach programs.",
//                 img: "/images/achievements/awards/award1.jpg",
//               },
//             ].map((award, i) => (
//               <div
//                 key={i}
//                 className="bg-white/90 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:-translate-y-2"
//               >
//                 <Image
//                   src={award.img}
//                   alt={award.title}
//                   width={500}
//                   height={300}
//                   className="h-40 w-full object-cover"
//                 />
//                 <div className="p-4 text-gray-800">
//                   <h3 className="text-lg font-semibold text-green-700">{award.title}</h3>
//                   <p className="text-sm mt-2">{award.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//     </main>
//   );
// };

// export default Achievements;


//////////////////////////////////////////////////



"use client";
import { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getAchievements } from "@/config/apis";
import AchievementCard from "@/components/AchievementCard";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Achievements() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["achievements"],
    queryFn: ({ pageParam = 1 }) => getAchievements({ pageParam }),
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.pages ? lastPage.page + 1 : undefined,
  });

  if (isLoading)
    return  <div className="flex justify-center items-center w-full h-screen bg-gray-50">
      <h2 className="text-3xl font-semibold text-green-700 animate-pulse">
        Loading...
      </h2>
    </div>
  if (error)
    return <div className="text-center py-10 justify-center items-center w-full h-screen text-red-500">Failed to load achievements.</div>;

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/home/bg2.jpg"
            alt="Achievements Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div
          className="relative max-w-5xl mx-auto px-6 text-center text-white"
          data-aos="fade-up"
        >
          <p className="text-green-400 font-semibold tracking-wide uppercase mb-3">
            Celebrating Success
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Our <span className="text-green-400">Achievements</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Over the years, Federal Youth Parliament has earned remarkable{" "}
            <span className="text-green-400 font-semibold">milestones</span> through community service,
            youth empowerment, and impactful programs.
          </p>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-4"
          data-aos="fade-up"
        >
          <span className="text-gray-900">Our</span>{" "}
          <span className="text-green-600">Achievements</span>
        </h2>

        <p
          className="text-center text-gray-600 max-w-2xl mx-auto mb-10"
          data-aos="fade-up"
        >
          Explore our journey of impact and leadership in different sectors of Pakistan.
        </p>

        <div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10"
          data-aos="fade-up"
        >
          {data?.pages?.map((page) =>
            page.data.map((achievement, i) => (
              <AchievementCard key={i} achievement={achievement} />
            ))
          )}
        </div>

        {hasNextPage && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              className="px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition"
            >
              {isFetchingNextPage ? "Loading..." : "Load More"}
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

