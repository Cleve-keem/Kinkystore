import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black  border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold tracking-tighter text-white uppercase">
              Kinky<span className="text-pink-600">.</span>
            </h2>
            <p className="text-gray-50 text-sm leading-relaxed max-w-xs">
              Curating premium experiences and high-end essentials for the
              modern lifestyle. Quality you can feel, style you can see.
            </p>
            <div className="flex gap-4 text-gray-200">
              <Link href="#" className="hover:text-pink-600 transition-colors">
                <FaInstagram size={20} />
              </Link>
              <Link href="#" className="hover:text-pink-600 transition-colors">
                <FaXTwitter size={20} />
              </Link>
              <Link href="#" className="hover:text-pink-600 transition-colors">
                <FaFacebookF size={20} />
              </Link>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-100 mb-6">
              Shop
            </h3>
            <ul className="space-y-4 text-sm text-gray-200">
              <li>
                <Link
                  href="/products"
                  className="hover:text-black transition-colors"
                >
                  All Collections
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=new"
                  className="hover:text-black transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=best"
                  className="hover:text-black transition-colors"
                >
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link
                  href="/sale"
                  className="hover:text-pink-600 transition-colors font-medium"
                >
                  Flash Sale
                </Link>
              </li>
            </ul>
          </div>
          {/* Support */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-200 mb-6">
              Support
            </h3>
            <ul className="space-y-4 text-sm text-gray-200">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-black transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="hover:text-black transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-black transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-black transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact info */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-black mb-6">
              Connect
            </h3>
            <div className="space-y-4 text-sm text-gray-200">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-gray-200" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gray-200" />
                <span>+234 800 000 0000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gray-200" />
                <span>hello@hackhim.com</span>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-200">
            &copy; {currentYear} Hackhim Academy. Built with passion in Lagos.
          </p>
          {/* <div className="flex gap-6">
            Optional Payment Icons
            <div className="h-6 w-10 bg-gray-100 rounded animate-pulse" />
            <div className="h-6 w-10 bg-gray-100 rounded animate-pulse" />
            <div className="h-6 w-10 bg-gray-100 rounded animate-pulse" />
          </div> */}
        </div>
      </div>
    </footer>
  );
}
