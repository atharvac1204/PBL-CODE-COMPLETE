import { Link } from 'react-router-dom';
import { 
  WrenchScrewdriverIcon, 
  BoltIcon, 
  HomeModernIcon, 
  UserGroupIcon 
} from '@heroicons/react/24/outline';

function Home() {
  const services = [
    {
      title: 'Plumbing',
      icon: WrenchScrewdriverIcon,
      description: 'Expert plumbing services for all your needs',
    },
    {
      title: 'Electrical',
      icon: BoltIcon,
      description: 'Professional electrical repairs and installations',
    },
    {
      title: 'Carpentry',
      icon: HomeModernIcon,
      description: 'Quality carpentry and woodworking services',
    },
    {
      title: 'House Cleaning',
      icon: UserGroupIcon,
      description: 'Thorough and reliable cleaning services',
    },
  ];

  return (

    <div>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Trusted Local Service Providers
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Connect directly with skilled professionals for all your home service needs
            </p>
            <Link
              to="/services"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Find Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.title} className="card hover:shadow-lg transition-shadow">
                <service.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose a Service</h3>
              <p className="text-gray-600">Browse through our wide range of professional services</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Book a Professional</h3>
              <p className="text-gray-600">Select a trusted service provider and schedule your service</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get it Done</h3>
              <p className="text-gray-600">Enjoy professional service with direct payment to providers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Find the perfect service provider for your needs today</p>
          <Link
            to="/services"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Browse Services
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;