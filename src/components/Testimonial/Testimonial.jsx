import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 2,
    name: "Rizky Pratama",
    role: "University Student",
    location: "Bandung",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    feedback: "Harga terjangkau dan kualitasnya bagus. Sangat direkomendasikan! Perfect untuk mahasiswa seperti saya.",
    rating: 5,
    product: "Canvas Sneakers",
  },
  {
    id: 3,
    name: "Siti Nurhaliza",
    role: "UI/UX Designer",
    location: "Surabaya",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    feedback: "Desainnya modern dan pas di kaki. Saya suka banget! Cocok banget buat ke kantor dan acara formal.",
    rating: 5,
    product: "Oxford Leather Shoes",
  },
  {
    id: 4,
    name: "David Chen",
    role: "Software Engineer",
    location: "Medan",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    feedback: "Kualitas premium dengan harga yang reasonable. Customer service juga sangat responsif dan helpful.",
    rating: 5,
    product: "Running Shoes",
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center justify-center mb-4">
      {[...Array(5)].map((_, index) => (
        <svg key={index} className={`w-5 h-5 ${index < rating ? "text-yellow-400" : "text-gray-300"} transition-colors duration-200`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, isPaused]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden" id="testimoni">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Don't just take our word for it. Here's what our satisfied customers have to say about their experience.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative max-w-4xl mx-auto" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl dark:shadow-purple-900/20 p-8 md:p-12 border border-gray-100 dark:border-gray-700 relative overflow-hidden">
            {/* Quote Decoration */}
            <div className="absolute top-6 left-8 text-6xl text-blue-500/20 dark:text-blue-400/20 font-serif leading-none">"</div>
            <div className="absolute bottom-6 right-8 text-6xl text-purple-500/20 dark:text-purple-400/20 font-serif leading-none rotate-180">"</div>

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Profile Image with Animation */}
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto relative">
                  <img
                    src={testimonials[currentIndex].photo}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-xl transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
                </div>
                {/* Status Badge */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">Verified</div>
              </div>

              {/* Star Rating */}
              <StarRating rating={testimonials[currentIndex].rating} />

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 font-medium mb-8 leading-relaxed max-w-3xl mx-auto">{testimonials[currentIndex].feedback}</blockquote>

              {/* Customer Info */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{testimonials[currentIndex].name}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">{testimonials[currentIndex].role}</p>
                <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {testimonials[currentIndex].location}
                  <span className="mx-2">•</span>
                  <span className="text-purple-600 dark:text-purple-400 font-medium">{testimonials[currentIndex].product}</span>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-center space-x-4 mb-6">
                <button
                  onClick={prevTestimonial}
                  className="group bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full w-12 h-12 flex items-center justify-center hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-600"
                >
                  <svg className="w-5 h-5 transform group-hover:-translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="group bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full w-12 h-12 flex items-center justify-center hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-600"
                >
                  <svg className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Dot Indicators */}
              <div className="flex justify-center space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-gradient-to-r from-blue-500 to-purple-600 scale-125 shadow-lg" : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { label: "Happy Customers", value: "10,000+", icon: "👥" },
            { label: "5-Star Reviews", value: "98%", icon: "⭐" },
            { label: "Products Sold", value: "50,000+", icon: "📦" },
            { label: "Years Experience", value: "15+", icon: "🏆" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-gray-700">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
