"use client";

import React from "react";
import { useInView } from "react-intersection-observer";

const EducationalBlog = () => {
  const { ref: introRef, inView: introInView } = useInView({ triggerOnce: true });
  const { ref: disposalRef, inView: disposalInView } = useInView({ triggerOnce: true });
  const { ref: effectsRef, inView: effectsInView } = useInView({ triggerOnce: true });
  const { ref: tipsRef, inView: tipsInView } = useInView({ triggerOnce: true });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white">
      <header className="text-center mb-12 transition-opacity duration-[1500ms] ease-in-out opacity-100">
        <h1 className="text-4xl font-bold mb-2">Educational Blog on Waste Management</h1>
        <p className="text-lg text-gray-600">
          Discover how responsible waste management contributes to a healthier environment.
        </p>
      </header>

      {/* Introduction Section */}
      <section
        ref={introRef}
        className={`mb-12 transition-transform duration-[1500ms] ease-in-out ${
          introInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      >
        <h2 className="text-3xl font-semibold mb-4">Understanding Waste Management</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Waste management involves responsibly handling waste from its creation to disposal, minimizing environmental and health risks. Effective waste management conserves resources, protects ecosystems, and promotes community health.
        </p>
        <img
          src="/waste1.jpg"
          alt="Waste Management Introduction"
          className="w-full rounded-md shadow-md h-[300px] object-cover"
        />
      </section>

      {/* Effects of Waste on Health and Environment */}
      <section
        ref={effectsRef}
        className={`mb-12 transition-transform duration-[1500ms] ease-in-out ${
          effectsInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        <h2 className="text-3xl font-semibold mb-6">Impact of Waste on Health and the Environment</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Waste can have a profound impact on human health and the environment. Improper waste management contributes to air and water pollution, land degradation, and climate change, directly affecting communities and individuals:
        </p>
        <ul className="list-disc pl-5 text-gray-700 space-y-3 leading-relaxed">
          <li><strong>Air Pollution:</strong> Harmful gases released from landfills contribute to respiratory diseases and climate change.</li>
          <li><strong>Water Contamination:</strong> Chemicals from waste leach into water sources, posing health risks for people and aquatic life.</li>
          <li><strong>Soil Degradation:</strong> Hazardous waste disrupts soil nutrients, affecting plant growth and food quality.</li>
          <li><strong>Pests and Disease:</strong> Accumulated waste attracts pests like rats and mosquitoes, spreading diseases such as malaria and cholera.</li>
        </ul>
      </section>

      {/* Types of Waste Disposal Methods */}
      <section
        ref={disposalRef}
        className={`mb-12 transition-opacity duration-[3000ms] ease-in-out ${
          disposalInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl font-semibold mb-6">Types of Waste Disposal Methods</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-2">Landfills</h3>
            <p className="text-gray-700 leading-relaxed">
              Landfills are designated areas where waste is isolated from the environment to prevent contamination. While effective for non-recyclable waste, landfills take up land space and can produce harmful gases like methane.
            </p>
            <img
              src="/land.jpg"
              alt="Landfill Waste Disposal"
              className="w-full rounded-md shadow-md mt-3"
            />
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Recycling</h3>
            <p className="text-gray-700 leading-relaxed">
              Recycling repurposes waste materials into new products. By recycling, we conserve resources and reduce pollution, greenhouse gases, and the need for additional landfill space.
            </p>
            <img
              src="/recycle.jpg"
              alt="Recycling Waste"
              className="w-full rounded-md shadow-md mt-3"
            />
          </div>
        </div>
      </section>

      {/* Tips for Reducing Waste */}
      <section
        ref={tipsRef}
        className={`mb-12 transition-transform duration-[4000ms] ease-in-out ${
          tipsInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      >
        <h2 className="text-3xl font-semibold mb-4">Practical Tips to Reduce Waste</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Reducing waste starts with small steps that contribute to a healthier environment. Here are some tips:
        </p>
        <ul className="list-disc pl-5 text-gray-700 space-y-3 leading-relaxed">
          <li>Compost organic waste to reduce landfill contributions and enrich soil.</li>
          <li>Use reusable containers instead of single-use plastics.</li>
          <li>Buy products with minimal packaging to reduce plastic waste.</li>
          <li>Donate items you no longer need instead of discarding them.</li>
          <li>Educate others on the importance of waste reduction and sustainable practices.</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center mt-12">
        <p className="text-gray-600">
          By embracing responsible waste management, we can foster a cleaner, healthier environment for future generations.
        </p>
      </footer>
    </div>
  );
};

export default EducationalBlog;
