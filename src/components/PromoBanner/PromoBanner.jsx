import React from "react";
import Image from "../../assets/promo-banner.jpg";

const PromoBanner = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-pink-500 to-purple-600 dark:from-pink-700 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Super Sale! Diskon Hingga 50%</h2>
          <p className="text-lg text-white/90 mb-6">Dapatkan sepatu favoritmu dengan harga spesial untuk waktu terbatas. Free shipping untuk pembelian di atas Rp.100.000!</p>
          <button className="px-8 py-3 bg-white text-pink-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">Belanja Sekarang</button>
        </div>
        <div>
          <img
            src={Image}
            alt="Promo Shoes"
            className="w-full max-w-sm rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
