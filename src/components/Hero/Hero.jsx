import React, { useState, useEffect } from "react";
import { ShoppingBag, Star, Sparkles, TrendingUp, Award, Users } from "lucide-react";
import Image from "../../assets/hero-shoes.png";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 overflow-hidden py-16" onMouseMove={handleMouseMove} id="home">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/4 animate-bounce delay-300">
          <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg"></div>
        </div>
        <div className="absolute bottom-1/3 left-1/4 animate-bounce delay-700">
          <div className="w-6 h-6 bg-gradient-to-r from-pink-400 to-red-500 rounded-full shadow-lg"></div>
        </div>
        <div className="absolute top-1/3 left-1/6 animate-bounce delay-1000">
          <Star className="w-6 h-6 text-yellow-500 fill-current animate-spin" style={{ animationDuration: "3s" }} />
        </div>
      </div>

      {/* Interactive Mouse Follower */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.1), transparent 40%)`,
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-screen lg:min-h-[80vh]">
          {/* Text Section */}
          <div className={`flex-1 text-center lg:text-left mb-12 lg:mb-0 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full mb-6 border border-blue-200/50 dark:border-blue-700/50">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-sm font-semibold text-blue-800 dark:text-blue-300">New Collection 2024</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 dark:text-white leading-tight mb-6">
              Temukan Sepatu
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">Favorit</span>
              <br />
              Anda
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Koleksi terbaru sepatu dengan desain <span className="font-bold text-blue-600 dark:text-blue-400">stylish</span> dan nyaman dipakai sehari-hari. Dapatkan diskon hingga{" "}
              <span className="font-bold text-red-500 text-2xl">50%</span> sekarang juga!
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">1000+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400">4.9</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                  <Star className="w-3 h-3 text-yellow-500 fill-current mr-1" />
                  Rating
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400">150+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Products</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8">
              <button
                onClick={() => scrollToSection("shop")}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 font-semibold text-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="relative flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Belanja Sekarang
                </div>
              </button>

              <button
                onClick={() => scrollToSection("about")}
                className="group px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-gray-200 rounded-2xl shadow-xl hover:shadow-2xl border border-gray-200/50 dark:border-gray-700/50 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 font-semibold text-lg"
              >
                <div className="flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Pelajari Lebih Lanjut
                </div>
              </button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-2 text-yellow-500" />
                Premium Quality
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-green-500" />
                Trusted by 1000+
              </div>
              <div className="flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-blue-500" />
                Latest Design
              </div>
            </div>
          </div>

          {/* Image Section Hidden on Tablet & Mobile */}
          <div className={`flex-1 relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"} hidden lg:block`}>
            <div className="relative group max-w-full lg:max-w-none mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500 scale-110"></div>

              <div>
                <div className="relative group-hover:scale-105 transition-transform duration-500 w-full h-96">
                  <img src={Image} alt="Hero Shoes" className="absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-500" />
                </div>

                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
                  <button className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full shadow-xl hover:scale-110 transform transition-all duration-300 flex items-center justify-center">
                    <Star className="w-5 h-5 fill-current" />
                  </button>
                  <button className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full shadow-xl hover:scale-110 transform transition-all duration-300 flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 320" className="w-full h-20 lg:h-32" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.1" />
              <stop offset="50%" stopColor="rgb(147, 51, 234)" stopOpacity="0.1" />
              <stop offset="100%" stopColor="rgb(236, 72, 153)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          <path
            fill="white"
            fillOpacity="0.8"
            d="M0,192L48,208C96,224,192,256,288,256C384,256,480,224,576,208C672,192,768,192,864,208C960,224,1056,256,1152,256C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
