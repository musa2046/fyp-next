"use client";
import React from 'react'
import Image from "next/image";
export function NewsCard({ program }) {
  return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg overflow-hidden transition-all duration-300">
        <Image
          src={program.image || "/images/default.jpg"}
          alt={program.title}
          width={600}
        height={300}
        className="w-full h-60 object-cover"
      />
      {console.log(program.image)}
      <div className="p-5">
        <h3 className="text-xl font-bold text-green-800 mb-2">
          {program.title}
        </h3>
        <Image
          src={program.image || "/images/default.jpg"}
          alt={program.title}
          width={600}
          height={300}
          className="w-full h-60 object-cover"
        />
      {console.log(program.image)}
      <div className="p-5">
        <h3 className="text-xl font-bold text-green-800 mb-2">
          {program.title}
        </h3>
        <p className="text-gray-600 line-clamp-3">{program.description}</p>
      </div>
    </div>
    </div>
  );
};

