import React from "react";

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "Custom Home Designs",
      description:
        "Designing personalized homes tailored to your lifestyle and preferences with sustainable materials.",
        image: "./client.jpg3.jpg",
      },
    {
      id: 2,
      title: "Elegant Kitchen Interiors",
      description:
        "Crafting functional and stylish kitchens that blend luxury with practicality.",
      image: "./client.jpg6.jpg",
    },
    {
      id: 3,
      title: "Interior",
      description:
        "Innovative housing designs for urban communities, focusing on space optimization and sustainability.",
        image: "./client.jpg1.jpg",
      },
    {
      id: 4,
      title: "Eco-friendly Outdoor Spaces",
      description:
        "Creating serene and green outdoor environments that enhance living experiences.",
        image: "./client.jpg1.jpg",
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
          Discover the range of architectural and design solutions we provide to elevate your spaces.
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
