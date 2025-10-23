import React from 'react'
import Image from 'next/image';
export const ExecutiveCard = (props) => {
  return (
    <div
     className="grid md:grid-cols-2 gap-10 items-center mb-20"
     data-aos="fade-up"
     >
    <div className="flex justify-center">
        <Image
        src={props.image}
        alt={props.name}
        width={300}
        height={300}
        className="w-72 h-72 object-cover rounded-3xl shadow-xl border-4 border-green-600"
        />
    </div>
    <div>
        <h3 className="text-3xl font-bold text-gray-800">
        {props.name}
        </h3>
        <p className="text-green-700 font-semibold mb-4">
        {props.role}
        </p>
        <blockquote className="text-xl italic text-gray-700 leading-relaxed border-l-4 border-green-600 pl-4">
        {props.bio}
        </blockquote>
        <div className="flex gap-5 mt-6">
        <a
            href={props.facebook}
            className="text-gray-500 hover:text-green-700 transition text-2xl"
        >
            <i className="fab fa-facebook-f"></i>
        </a>
        <a
            href={props.instagram}
            className="text-gray-500 hover:text-green-700 transition text-2xl"
        >
            <i className="fab fa-instagram"></i>
        </a>
        </div>
    </div>
    </div>

    )
    }
