"use client";
// import { useInfiniteQuery } from "@tanstack/react-query";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { getPrograms } from "../../../config/apis";
// // import { ProgramCard } from "../../../components/programCard";
// export default function Programs() {

//    const {
//     data,
//     isLoading,
//     error,
//     fetchNextPage,
//     hasNextPage,
//     isFetchingNextPage,
//   } = useInfiniteQuery({
//     queryKey: ["programs"],
//     queryFn: ({ pageParam = 1 }) => getPrograms({ page: pageParam }),
//     getNextPageParam: (lastPage) =>
//       lastPage.page < lastPage.pages ? lastPage.page + 1 : undefined,
//     enabled: true,
//   });


//   console.log(data)

//   if(isLoading){
//     return <p>Loading...</p>
//   }

//   return (
//     <main>
//       {/* Hero Banner */}
//       <section className="relative bg-gray-900 text-white py-28 overflow-hidden">
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <Image
//             src="/images/home/bg.jpg"
//             alt="Programs"
//             fill
//             className="object-cover opacity-40"
//           />
//           <div className="absolute inset-0 bg-black/50"></div>
//         </div>

//         {/* Content */}
//         <div
//           className="relative max-w-5xl mx-auto px-6 text-center"
//           data-aos="fade-up"
//         >
//           <p className="text-green-400 font-semibold tracking-wide uppercase mb-3">
//             Empowering the Youth
//           </p>
//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
//             Our Programs
//           </h1>
//           <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
//             Federal Youth Parliament (FYP) runs{" "}
//             <span className="text-green-400 font-semibold">
//               impactful initiatives
//             </span>{" "}
//             to empower youth, address pressing{" "}
//             <span className="text-green-400 font-semibold">social issues</span>,
//             and promote{" "}
//             <span className="text-green-400 font-semibold">leadership</span>{" "}
//             across Pakistan.
//           </p>

//           {/* Buttons */}
//           <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
//             <Link
//               href="#programs"
//               className="px-8 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold shadow-lg transition duration-300"
//             >
//               Explore Programs
//             </Link>
//             <Link
//               href="/pages/contact"
//               className="px-8 py-3 rounded-full bg-transparent border border-green-400 text-green-400 hover:bg-green-500 hover:text-white font-semibold shadow-lg transition duration-300"
//             >
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Programs Section */}
//       <section className="w-full py-16 bg-green-50">
//         <div className="max-w-6xl mx-auto px-6 space-y-16">
//           {/* Youth Gathering */}
//           <div
//             className="grid md:grid-cols-2 gap-10 items-center mb-16"
//             data-aos="fade-right"
//             id="programs"
//           >
//             <div>
//               <h2 className="text-2xl font-bold text-green-800">
//                 Youth Gathering
//               </h2>
//               <p className="mt-4 text-gray-600">
//                 An engaging youth gathering where young leaders connect, share
//                 ideas, and build networks to inspire meaningful social change.
//               </p>
//             </div>
//             <Image
//               src="/images/programs/youth-gathering.jpg"
//               alt="Youth Gathering"
//               width={800}
//               height={400}
//               className="w-full h-72 object-cover rounded-lg shadow-md"
//             />
//           </div>

//           {/* Leadership Program */}
//           {/* <ProgramCard /> */}
//           {/* Skill Development */}
//           <div
//             className="grid md:grid-cols-2 gap-10 items-center mb-16"
//             data-aos="fade-right"
//           >
//             <div>
//               <h2 className="text-2xl font-bold text-green-800">
//                 Skill Development
//               </h2>
//               <p className="mt-4 text-gray-600">
//                 Specialized training sessions were organized to equip youth with
//                 modern skills in technology, communication, and entrepreneurship.
//               </p>
//             </div>
//             <Image
//               src="/images/programs/skill-development.jpg"
//               alt="Skill Development"
//               width={800}
//               height={400}
//               className="w-full h-72 object-cover rounded-lg shadow-md"
//             />
//           </div>

//           {/* Social Work */}
//           <div
//             className="grid md:grid-cols-2 gap-10 items-center mb-16"
//             data-aos="fade-left"
//           >
//             <Image
//               src="/images/programs/social-work.jpg"
//               alt="Social Work"
//               width={800}
//               height={400}
//               className="w-full h-72 object-cover rounded-lg shadow-md"
//             />
//             <div>
//               <h2 className="text-2xl font-bold text-green-800">Social Work</h2>
//               <p className="mt-4 text-gray-600">
//                 Our members actively participate in social work, uplifting
//                 communities through education support, healthcare initiatives,
//                 and skill development programs.
//               </p>
//             </div>
//           </div>

//           {/* Flood Relief */}
//           <div
//             className="grid md:grid-cols-2 gap-10 items-center mb-16"
//             data-aos="fade-right"
//           >
//             <div>
//               <h2 className="text-2xl font-bold text-green-800">
//                 Flood Relief
//               </h2>
//               <p className="mt-4 text-gray-600">
//                 Our members actively participated in flood relief activities,
//                 distributing food, shelter, and medical aid to affected
//                 communities.
//               </p>
//             </div>
//             <Image
//               src="/images/programs/flood-relief.jpg"
//               alt="Flood Relief"
//               width={800}
//               height={400}
//               className="w-full h-72 object-cover rounded-lg shadow-md"
//             />
//           </div>

//           {/* Orphanage Support */}
//           <div
//             className="grid md:grid-cols-2 gap-10 items-center mb-16"
//             data-aos="fade-left"
//           >
//             <Image
//               src="/images/programs/orphanage-support.jpg"
//               alt="Orphanage Support"
//               width={800}
//               height={400}
//               className="w-full h-72 object-cover rounded-lg shadow-md"
//             />
//             <div>
//               <h2 className="text-2xl font-bold text-green-800">
//                 Orphanage Support
//               </h2>
//               <p className="mt-4 text-gray-600">
//                 A heartwarming visit to local orphanages where members spent time
//                 with children, provided essentials, and shared messages of hope
//                 and care.
//               </p>
//             </div>
//           </div>

//           {/* Plantation Drive */}
//           <div
//             className="grid md:grid-cols-2 gap-10 items-center mb-16"
//             data-aos="fade-right"
//           >
//             <div>
//               <h2 className="text-2xl font-bold text-green-800">
//                 Plantation Drive
//               </h2>
//               <p className="mt-4 text-gray-600">
//                 A successful plantation drive organized by FYP members to promote
//                 environmental sustainability and spread awareness about climate
//                 action.
//               </p>
//             </div>
//             <Image
//               src="/images/programs/plantation-drive.jpg"
//               alt="Plantation Drive"
//               width={800}
//               height={400}
//               className="w-full h-72 object-cover rounded-lg shadow-md"
//             />
//           </div>

//           {/* Public Issues */}
//           <div
//             className="grid md:grid-cols-2 gap-10 items-center mb-16"
//             data-aos="fade-left"
//           >
//             <Image
//               src="/images/programs/public-issues.jpg"
//               alt="Public Issues"
//               width={800}
//               height={400}
//               className="w-full h-72 object-cover rounded-lg shadow-md"
//             />
//             <div>
//               <h2 className="text-2xl font-bold text-green-800">
//                 Public Issues
//               </h2>
//               <p className="mt-4 text-gray-600">
//                 Discussions and awareness sessions held on pressing public issues
//                 to empower youth in voicing solutions and contributing to policy
//                 dialogues.
//               </p>
//             </div>
//           </div>

//           {/* Political Issues */}
//           <div
//             className="grid md:grid-cols-2 gap-10 items-center mb-16"
//             data-aos="fade-right"
//           >
//             <div>
//               <h2 className="text-2xl font-bold text-green-800">
//                 Political Issues
//               </h2>
//               <p className="mt-4 text-gray-600">
//                 Constructive debates and training programs designed to help youth
//                 understand political systems, decision-making, and democratic
//                 responsibilities.
//               </p>
//             </div>
//             <Image
//               src="/images/programs/political-issues.jpg"
//               alt="Political Issues"
//               width={800}
//               height={400}
//               className="w-full h-72 object-cover rounded-lg shadow-md"
//             />
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }





////////////////////////////////////////////////////////////////////////////////////
{/* Dynamic Programs Section */}








import { useInfiniteQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getPrograms } from "../../../config/apis";
import { ProCard } from "@/components/ProCard";
export default function Programs() {

   const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["programs"],
    queryFn: ({ pageParam = 1 }) => getPrograms({ page: pageParam }),
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.pages ? lastPage.page + 1 : undefined,
    enabled: true,
  });


  console.log(data)

  if (isLoading) {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-50">
      <h2 className="text-3xl font-semibold text-green-700 animate-pulse">
        Loading...
      </h2>
    </div>
  );
}


  return (
<section className="w-full py-16 bg-green-50" id="programs">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
      Latest Programs
    </h2>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      {data?.pages?.map((page, pageIndex) =>
        page.data.map((program, index) => (
          <ProCard key={`${pageIndex}-${program.id || index}`} program={program} />
        ))
      )}
    </div>

    {hasNextPage && (
      <div className="flex justify-center mt-10">
        <button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className="px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition"
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </button>
      </div>
    )}
  </div>
</section>
  );
}
