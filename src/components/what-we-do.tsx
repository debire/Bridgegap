"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  {
    id: "financial-advisory",
    title: "Financial Advisory",
    description:
      "Expert guidance to help you make informed financial decisions. We provide personalized advice on investments, financial planning, and wealth management.",
    image: "/images/finance-bg.jpg",
  },
  {
    id: "asset-management",
    title: "Asset Management",
    description:
      "Expert guidance to help you make informed financial decisions. We provide personalized advice on investments, financial planning, and wealth management.",
    image: "/images/asset-bg.jpg",
  },
  {
    id: "micro-lending",
    title: "Micro Lending",
    description:
      "Expert guidance to help you make informed financial decisions. We provide personalized advice on investments, financial planning, and wealth management.",
    image: "/images/micro-bg.jpg",
  },
];

export function WhatWeDo() {
  const [activeId, setActiveId] = useState(services[0].id);

  return (
    <section className="w-full bg-page">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-4 md:pt-6 pb-10">
        <h2 className="font-heading text-brand text-2xl md:text-3xl font-semibold">
          What We Do
        </h2>
        <p className="mt-2 text-base md:text-lg text-neutral-800">
          Comprehensive financial solutions for every need
        </p>
      </div>
      <div className="hidden md:flex w-full h-150">
        {services.map((service) => {
          const isActive = activeId === service.id;
          return (
            <div
              key={service.id}
              onMouseEnter={() => setActiveId(service.id)}
              className={`
                relative overflow-hidden cursor-pointer
                transition-all duration-700 ease-in-out
                ${isActive ? "flex-4" : "flex-1"}
              `}
              style={{
                backgroundImage: `url('${service.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className={`
                  absolute inset-0 transition-colors duration-700
                  ${isActive ? "bg-black/40" : "bg-black/60"}
                `}
              />

              <div className="relative z-10 h-full flex flex-col justify-end p-10">
                <h3 className="font-heading text-white text-2xl font-semibold">
                  {service.title}
                </h3>

                <div
                  className={`
                    overflow-hidden transition-all duration-500
                    ${isActive ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}
                  `}
                >
                  <p className="text-white text-base max-w-2xl leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-full bg-brand-button px-6 py-2.5 text-white font-medium hover:bg-brand-button/90 transition-colors mt-6"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col md:hidden w-full">
        {services.map((service) => {
          const isActive = activeId === service.id;
          return (
            <div
              key={service.id}
              onClick={() => setActiveId(service.id)}
              className={`
                relative overflow-hidden cursor-pointer
                transition-all duration-500 ease-in-out
                bg-cover bg-center
                ${isActive ? "h-80" : "h-20"}
              `}
              style={{
                backgroundImage: `url('${service.image}')`,
              }}
            >
              <div
                className={`
                  absolute inset-0 transition-colors duration-500
                  ${isActive ? "bg-black/40" : "bg-black/70"}
                `}
              />

              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <h3
                  className={`
                    font-heading text-white font-semibold transition-all duration-300
                    ${isActive ? "text-xl" : "text-base"}
                  `}
                >
                  {service.title}
                </h3>

                <div
                  className={`
                    overflow-hidden transition-all duration-500
                    ${isActive ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"}
                  `}
                >
                  <p className="text-white text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-full bg-brand-button px-6 py-2.5 text-white font-medium hover:bg-brand-button/90 transition-colors mt-4"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}