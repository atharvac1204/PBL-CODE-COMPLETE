import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthMenuOpen, setIsAuthMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary-600">LocalServiceFinder</span>
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
              Services
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
            
            {/* Auth Menu */}
            <div className="relative">
              <button
                onClick={() => setIsAuthMenuOpen(!isAuthMenuOpen)}
                className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
              >
                Login/Signup
              </button>
              
              {/* Dropdown menu */}
              {isAuthMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <div className="px-4 py-2 text-xs text-gray-500">Customer</div>
                    <Link
                      to="/auth/customer/login"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsAuthMenuOpen(false)}
                    >
                      Customer Login
                    </Link>
                    <Link
                      to="/auth/customer/signup"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsAuthMenuOpen(false)}
                    >
                      Customer Signup
                    </Link>
                    <div className="px-4 py-2 text-xs text-gray-500">Service Provider</div>
                    <Link
                      to="/auth/provider/login"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsAuthMenuOpen(false)}
                    >
                      Provider Login
                    </Link>
                    <Link
                      to="/auth/provider/signup"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsAuthMenuOpen(false)}
                    >
                      Provider Signup
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            
            {/* Mobile Auth Links */}
            <div className="border-t border-gray-200 pt-4">
              <div className="px-3 py-2 text -xs text-gray-500">Customer</div>
              <Link
                to="/auth/customer/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                Customer Login
              </Link>
              <Link
                to="/auth/customer/signup"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                Customer Signup
              </Link>
              <div className="px-3 py-2 text-xs text-gray-500">Service Provider</div>
              <Link
                to="/auth/provider/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                Provider Login
              </Link>
              <Link
                to="/auth/provider/signup"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                Provider Signup
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;