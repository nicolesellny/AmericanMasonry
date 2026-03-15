import React from "react";
import brick from "../assets/brick.jpg";

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div
        className="pt-36 relative flex items-center justify-center h-[calc(100vh-4rem)] bg-cover bg-center"
        style={{ backgroundImage: `url(${brick})` }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-background/60 via-background/50 to-background" />
        <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl font-semibold">American Masonry</h1>
            <div className="w-1/2 h-px bg-primary/40 mx-auto my-4" />
            <p className="tracking-tight text-xl">American Masonry Text</p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <button className="px-8 py-3 rounded-lg font-semibold bg-background-3/80 border border-primary/20 text-primary hover:bg-background-3 hover:border-primary/80 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all shadow-lg">
                Contact Us
              </button>
              <button className="px-8 py-3 rounded-lg font-semibold border border-primary/20 text-primary hover:border-primary/80 hover:bg-primary/5 transition-all">
                Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
