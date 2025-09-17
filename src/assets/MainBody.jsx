import React from "react";

const Main = () => {
  return (
  <div class="bg-gray-50 font-sans antialiased text-gray-900">
  
  <div class="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-4 sm:px-8 py-12 md:py-24">
    
    <div class="flex-1 max-w-full md:max-w-xl text-center md:text-left mt-12 md:mt-0 md:mr-16 animate-fade-in">
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
        Hi, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">M Taha Khan</span>
      </h1>
      <h2 class="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
        Full Stack Developer &amp; UI/UX Enthusiast
      </h2>
      <p class="text-gray-600 text-base sm:text-lg mb-8 max-w-xl">
        I craft beautiful, functional web experiences that solve real-world problems. Passionate about clean code, user experience, and bringing ideas to life.
      </p>
    </div>
    
    <div class="flex justify-center items-center mt-8 md:mt-0">
      <div class="w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 rounded-full overflow-hidden 
                  relative bg-white/20 backdrop-blur-md border border-white/30 
                  shadow-lg hover:scale-105 hover:shadow-xl
                  focus:outline-none focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-50
                  transform transition duration-300 ease-in-out">
        <img
          src="/download.png"
          alt="Taha Khan Profile"
          class="object-cover w-full h-full"
        />
      </div>
    </div>
  </div>
  
  <div class="py-12 px-4 sm:px-8">
    <h1 class="text-3xl sm:text-4xl md:text-4xl font-extrabold text-center mt-6">
      What I Bring To The Table...
    </h1>
    <h3 class="text-lg sm:text-xl md:text-2xl text-center font-light text-gray-700 mb-12">
      A blend of technical expertise and creative problem-solving
    </h3>
  
    <div class="flex flex-col md:flex-row flex-wrap gap-6 justify-center max-w-6xl mx-auto">
      
      <div class="p-6 w-full sm:w-80 md:w-96 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
        <div class="p-4 flex justify-center text-4xl">💻</div>
        <h1 class="p-1 flex justify-center font-bold text-lg sm:text-xl text-center">
          Front-End Development
        </h1>
        <p class="p-2 flex justify-center text-sm sm:text-base text-center text-gray-600">
          HTML, TailwindCSS, JS, React
        </p>
      </div>
      
      <div class="p-6 w-full sm:w-80 md:w-96 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
        <div class="p-4 flex justify-center text-4xl">💾</div>
        <h1 class="p-1 flex justify-center font-bold text-lg sm:text-xl text-center">
          Back-End Development
        </h1>
        <p class="p-2 flex justify-center text-sm sm:text-base text-center text-gray-600">
          Node.js, Express.js, MongoDB
        </p>
      </div>
      
      <div class="p-6 w-full sm:w-80 md:w-96 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
        <div class="p-4 flex justify-center text-4xl">🎨</div>
        <h1 class="p-1 flex justify-center font-bold text-lg sm:text-xl text-center">
          UI/UX Design
        </h1>
        <p class="p-2 flex justify-center text-sm sm:text-base text-center text-gray-600">
          Figma, Prototyping
        </p>
      </div>
      
    </div>
  </div>
</div>
  );
};

export default Main;
