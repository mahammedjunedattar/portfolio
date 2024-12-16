const ArchitectureServices = () => {
    const services = [
      {
        title: "Residential Design",
        description: "We create homes that reflect your personality and lifestyle.",
        icon: "🏠",
      },
      {
        title: "Commercial Design",
        description: "Innovative and functional spaces for your business needs.",
        icon: "🏢",
      },
      {
        title: "Interior Design",
        description: "Elegant interiors tailored to your preferences and style.",
        icon: "🛋️",
      },
      {
        title: "Landscape Design",
        description: "Beautiful outdoor spaces that complement your property.",
        icon: "🌳",
      },
      {
        title: "Renovation Projects",
        description: "Transform and modernize existing spaces with our expertise.",
        icon: "🔨",
      },
      {
        title: "Sustainable Design",
        description: "Eco-friendly designs that prioritize the environment.",
        icon: "🌱",
      },
    ];
  
    return (
      <section className="bg-white py-20" id="architecture-services">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            Our Architecture Services
          </h2>
          <p className="text-xl text-gray-500 text-center mt-4">
            Bringing your ideas to life with precision and creativity.
          </p>
  
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg"
              >
                <div className="text-5xl mb-4 text-lime-500">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center mt-2">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ArchitectureServices;
  