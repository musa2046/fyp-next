import React from 'react'

export const AdvisorCard = (props) => {
  return (
    <>
    <div
                key={props.name}
                className="group max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden relative transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                data-aos="fade-up"
                data-aos-delay={props.delay}
              >
                {/* Background Image with overlay */}
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={props.img}
                    alt={props.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
        <div className="absolute inset-0 bg-linear-to-t from-green-900/60 via-green-800/30 to-transparent"></div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col items-center text-center">
        {/* Profile Image */}
        <div className="relative -mt-14 w-28 h-28 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
          <img
            src={props.img}
            alt={props.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name & Role */}
        <h3 className="mt-6 text-2xl font-bold text-gray-800">
          {props.name}
        </h3>
        <p className="text-green-700 font-semibold">{props.role}</p>

        {/* Description */}
        <p className="mt-4 text-gray-600 text-sm leading-relaxed max-w-xs">
          {props.bio}
        </p>
      </div>
        </div>
    </>
  )
}
