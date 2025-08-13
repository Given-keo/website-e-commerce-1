import React from "react";
import { Star } from "lucide-react";
import Image1 from "../../assets/featured/g1.jpg";
import Image2 from "../../assets/featured/g2.jpg";
import Image3 from "../../assets/featured/g3.jpg";
import Image4 from "../../assets/featured/g4.jpg";
import { ImAttachment } from "react-icons/im";

// Contoh data produk (nanti bisa dari API)
const featuredProducts = [
  {
    id: 1,
    name: "Air Sneakers",
    price: 120000,
    image: Image1,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Classic Boots",
    price: 150000,
    image: Image2,
    rating: 4.5,
  },
  {
    id: 3,
    name: "Formal Shoes",
    price: 180000,
    image: Image3,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Summer Sandals",
    price: 90000,
    image: Image4,
    rating: 4.6,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-lg hover:shadow-xl dark:hover:shadow-gray-700 transition-shadow duration-300 cursor-pointer w-full max-w-xs">
              <img src={product.image} alt={product.name} className="w-full h-56 object-cover rounded-t-xl" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">{product.rating}</span>
                </div>
                <p className="text-xl font-bold text-gray-900 dark:text-white mb-4">Rp.{product.price}</p>
                <button className="w-full py-2  bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-xl font-semibold transition-colors duration-300">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
