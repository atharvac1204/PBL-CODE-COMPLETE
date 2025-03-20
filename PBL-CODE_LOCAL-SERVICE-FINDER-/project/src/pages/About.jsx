import { CheckCircleIcon } from '@heroicons/react/24/solid';

function About() {
  const benefits = [
    'Direct payment to service providers',
    'No middleman fees',
    'Verified professional service providers',
    'Transparent pricing',
    'Quick response times',
    'Quality guaranteed services',
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">About LocalServiceFinder</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing the way people connect with local service providers,
            ensuring fair compensation and quality service delivery.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              LocalServiceFinder is committed to transforming the service industry by creating
              a direct connection between service providers and customers. We believe in fair
              compensation for workers and affordable, quality services for customers.
            </p>
            <p className="text-gray-600">
              Our platform eliminates unnecessary intermediaries, ensuring that service
              providers receive full payment for their work while customers get the best
              value for their money.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-primary-50 rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">1000+</div>
              <div className="text-gray-600">Service Providers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">5000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">20+</div>
              <div className="text-gray-600">Service Categories</div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparency</h3>
              <p className="text-gray-600">
                Clear pricing and direct communication between providers and customers
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">
                Verified professionals delivering exceptional service
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fair Compensation</h3>
              <p className="text-gray-600">
                Direct payments ensuring service providers get their full worth
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;