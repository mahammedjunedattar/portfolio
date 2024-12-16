const OngoingProjects = () => {
    const projects = [
      {
        title: "Modern Residential Complex",
        location: "New Delhi, India",
        description: "A state-of-the-art residential complex with eco-friendly features.",
        image: "https://via.placeholder.com/600x400",
        status: "In Progress",
      },
      {
        title: "Commercial Plaza",
        location: "Mumbai, India",
        description: "A high-rise commercial plaza with smart office spaces.",
        image: "https://via.placeholder.com/600x400",
        status: "In Progress",
      },
      {
        title: "Luxury Villa",
        location: "Bangalore, India",
        description: "An exclusive luxury villa with cutting-edge architecture.",
        image: "https://via.placeholder.com/600x400",
        status: "In Progress",
      },
      {
        title: "Urban Park Development",
        location: "Hyderabad, India",
        description: "A sprawling urban park with sustainable landscaping.",
        image: "https://via.placeholder.com/600x400",
        status: "In Progress",
      },
    ];
  
    return (
      <section className="bg-gray-900 text-white py-20" id="ongoing-projects">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-lime-500 text-center">
            Our Ongoing Projects
          </h2>
          <p className="text-xl text-gray-400 text-center mt-4">
            Witness the projects we are currently bringing to life.
          </p>
  
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-lime-500">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">{project.location}</p>
                  <p className="text-gray-300 mt-4">{project.description}</p>
                  <span className="inline-block bg-yellow-500 text-black text-sm font-semibold py-1 px-3 rounded mt-4">
                    {project.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default OngoingProjects;
  