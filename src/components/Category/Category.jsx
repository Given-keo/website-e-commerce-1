import React from "react";
import Image1 from "../../assets/category/c1.jpg";
import Image2 from "../../assets/category/c2.jpg";
import Image3 from "../../assets/category/c3.jpg";
import Image4 from "../../assets/category/c4.jpg";

// Data kategori (bisa nanti diganti dari API)
const categories = [
  { id: 1, name: "Sneakers", image: Image1 },
  { id: 2, name: "Boots", image: Image2 },
  { id: 3, name: "Formal", image: Image3 },
  { id: 4, name: "Sandals", image: Image4 },
];

const Category = () => {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900" id="shop">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md dark:shadow-lg hover:shadow-xl dark:hover:shadow-gray-800 transition-shadow duration-300 cursor-pointer">
              <img src={cat.image} alt={cat.name} className="w-full h-40 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
