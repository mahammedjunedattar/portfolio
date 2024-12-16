import React from "react";

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "Architectural Design",
      description:
        "Innovative and sustainable architectural solutions tailored to meet your vision and requirements.",
      image: "https://via.placeholder.com/400x300",
    },
    {
      id: 2,
      title: "Interior Design",
      description:
        "Creating beautiful, functional, and inspiring interior spaces that reflect your style and needs.",
      image: "https://via.placeholder.com/400x300",
    },
    {
      id: 3,
      title: "Urban Planning",
      description:
        "Comprehensive urban planning services to shape vibrant, sustainable, and livable communities.",
      image: "https://via.placeholder.com/400x300",
    },
    {
      id: 4,
      title: "Landscape Design",
      description:
        "Transforming outdoor spaces into aesthetically pleasing and eco-friendly landscapes.",
      image: "https://via.placeholder.com/400x300",
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-800 py-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading Section */}
        <h1 className="text-4xl font-bold text-center text-lime-500">
          Our Services
        </h1>
        <p className="text-center text-gray-600 text-lg mt-4">
          Explore the wide range of architectural and design services we offer.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-lime-500">
                  {service.title}
                </h2>
                <p className="text-gray-600 mt-2">{service.description}</p>
                <button className="mt-4 px-4 py-2 bg-lime-500 text-white font-semibold rounded-md hover:bg-lime-600 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
