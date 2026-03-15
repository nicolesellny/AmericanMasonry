import React from "react";
import masonryImage from "../assets/building.jpeg";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background pt-24 px-6 pb-16">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-80">
            <img
              src={masonryImage}
              alt="Masonry work"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-secondary uppercase tracking-widest text-sm">
              About Us
            </p>
            <h2 className="text-3xl font-semibold text-primary">Who We Are</h2>
            <div className="w-12 h-px bg-primary/40" />
            <p className="text-secondary leading-relaxed text-lg">
              American Masonry text about us and what we do
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
