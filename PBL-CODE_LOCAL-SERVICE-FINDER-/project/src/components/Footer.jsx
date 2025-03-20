import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">LocalServiceFinder</h3>
            <p className="text-gray-400">
              Connecting you with trusted local service providers for all your needs.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-white">Plumbing</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Electrical</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Carpentry</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">House Cleaning</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@localservicefinder.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Service Street</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LocalServiceFinder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;