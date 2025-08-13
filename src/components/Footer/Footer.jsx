import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Kontak */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Contact</h3>
          <p>Email: support@Gabut.com</p>
          <p>Phone: +62 812 3456 7890 sisanya kapan-kapan</p>
          <p>Address: Jl. Jalanan No. 123, Jakarta</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-pink-500 dark:hover:text-pink-400">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-400 dark:hover:text-blue-300">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-700 dark:hover:text-blue-500">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* FAQ / Help */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">FAQ / Help</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                How to Order
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                Payment Methods
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                Shipping Info
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                Return Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Policy */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Policy</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                Return & Refund
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} ShoeStore. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
