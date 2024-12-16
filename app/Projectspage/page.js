const ProjectsPage = () => {
    const projects = [
      {
        id: 1,
        title: "Modern Villa Design",
        description: "A luxurious villa with modern architecture and eco-friendly materials.",
        image: "https://via.placeholder.com/400x300",
        category: "Residential",
      },
      {
        id: 2,
        title: "Corporate Office Complex",
        description: "A state-of-the-art office building with a focus on sustainability.",
        image: "https://via.placeholder.com/400x300",
        category: "Commercial",
      },
      {
        id: 3,
        title: "Urban Park Development",
        description: "An urban park that revitalizes community spaces with greenery and modern amenities.",
        image: "https://via.placeholder.com/400x300",
        category: "Public",
      },
      {
        id: 4,
        title: "Luxury Apartment Complex",
        description: "A high-rise complex offering premium apartments with stunning city views.",
        image: "https://via.placeholder.com/400x300",
        category: "Residential",
      },
      {
        id: 5,
        title: "Art Museum Renovation",
        description: "Transforming a historic art museum into a modern cultural landmark.",
        image: "https://via.placeholder.com/400x300",
        category: "Cultural",
      },
      {
        id: 6,
        title: "Eco-friendly Resort",
        description: "An environmentally friendly resort nestled in nature.",
        image: "https://via.placeholder.com/400x300",
        category: "Hospitality",
      },
    ];
  
    return (
      <div className="bg-gray-100 text-gray-800 py-10">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-4xl font-bold text-center text-lime-500">
            Our Projects
          </h1>
          <p className="text-center text-gray-600 mt-4">
            Explore our diverse range of projects, showcasing our expertise and innovation in architectural design.
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-lime-500">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                  <div className="mt-4">
                    <span className="inline-block bg-lime-500 text-white text-sm font-medium px-3 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectsPage;
  