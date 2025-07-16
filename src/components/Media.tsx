"use client"

import React from "react"

export default function Media() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full opacity-50"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
      >
        <path
          d="M0,300 Q100,200 200,300 Q300,400 400,300 Q500,200 600,300 Q700,400 800,300 Q900,200 1000,300 Q1100,400 1200,300"
          stroke="white"
          strokeWidth="2"
          fill="none"
          className="animate-wave"
        />
        <path
          d="M0,300 Q100,250 200,300 Q300,350 400,300 Q500,250 600,300 Q700,350 800,300 Q900,250 1000,300 Q1100,350 1200,300"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          className="animate-wave delay-100"
        />
        <path
          d="M0,300 Q100,280 200,300 Q300,320 400,300 Q500,280 600,300 Q700,320 800,300 Q900,280 1000,300 Q1100,320 1200,300"
          stroke="white"
          strokeWidth="1"
          fill="none"
          className="animate-wave delay-200"
        />
      </svg>

      <div className="relative z-10 text-left max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Singularity Voices
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              We&apos;re working on it.
            </h1>
            <p className="text-lg text-gray-400">
              Our team is preparing.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Maybe you can have a look at our social media.
            </p>
          </div>

          <div className="hidden md:block w-1/2" />
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0% { transform: translateY(0); }
          50% { transform: translateY(5px); }
          100% { transform: translateY(0); }
        }
        .animate-wave {
          animation: wave 3s infinite ease-in-out;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  )
}