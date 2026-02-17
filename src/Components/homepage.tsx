import React from 'react';

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
            American Masonry
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            American Masonry Text
          </p>
          <div className="mt-8">
            <button className="bg-slate-800 text-white px-8 py-3 rounded-lg hover:bg-slate-700 transition-colors shadow-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
