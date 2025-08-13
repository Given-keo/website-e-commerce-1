// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero/Hero";
import Category from "../components/Category/Category";
import FeaturedProducts from "../components/featuredProducts/featuredProducts";
import PromoBanner from "../components/PromoBanner/PromoBanner";
import Testimonial from "../components/Testimonial/Testimonial";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <Hero />
      <Category/>
      <FeaturedProducts />
      <PromoBanner />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
