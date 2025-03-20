import { useState } from 'react';

function Services() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'plumbing', name: 'Plumbing' },
    { id: 'electrical', name: 'Electrical' },
    { id: 'carpentry', name: 'Carpentry' },
    { id: 'cleaning', name: 'Cleaning' },
  ];

  const services = [
    {
      id: 1,
      category: 'plumbing',
      name: 'Pipe Repair',
      description: 'Fix leaky pipes and plumbing issues',
      price: 'Starting from 100 rupees',
      image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 2,
      category: 'electrical',
      name: 'Electrical Wiring',
      description: 'Installation and repair of electrical systems',
      price: 'Starting from rupees 60',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 3,
      category: 'carpentry',
      name: 'Furniture Repair',
      description: 'Restore and repair wooden furniture',
      price: 'Starting from rupees 45',
      image: 'https://images.unsplash.com/photo-1611137884576-1304692c5b73?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 4,
      category: 'cleaning',
      name: 'House Cleaning',
      description: 'Complete home cleaning services',
      price: 'Starting from rupees 80',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    },
    
    // Add more services here
  ];

  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => (
            <div key={service.id} className="card overflow-hidden">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-primary-600 font-semibold">{service.price}</p>
                <button className="mt-4 w-full btn-primary">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;