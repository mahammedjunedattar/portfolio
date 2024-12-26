const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      description: "A spacious and luxurious villa designed with modern aesthetics and premium materials.",
      image: "./client.jpg1.jpg",
      category: "Residential",
    },
    {
      id: 2,
      title: "Cozy Suburban Home",
      description: "A comfortable family home with a contemporary touch and practical design.",
      image: "./client.jpg2.jpg",
      category: "Residential",
    },
    {
      id: 3,
      title: "Elegant Urban Townhouse",
      description: "An elegantly crafted townhouse featuring a blend of traditional and modern elements.",
      image: "./client.jpg3.jpg",
      category: "Residential",
    },
    {
      id: 4,
      title: "Luxury High-Rise Apartments",
      description: "A modern apartment complex offering premium living spaces with stunning views.",
      image: "./client.jp4.jpg",
      category: "Residential",
    },
    {
      id: 5,
      title: "Stylish Dining Kitchen",
      description: "A beautifully designed kitchen featuring a modern dining table and exquisite interiors.",
      image: "./client.jpg5.jpg",
      category: "Kitchen",
    },
    {
      id: 6,
      title: "Eco-friendly Modern Kitchen",
      description: "An environmentally conscious kitchen design with sleek and sustainable features.",
      image: "./client.jpg6.jpg",
      category: "Kitchen",
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-800 py-10">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-4xl font-bold text-center text-lime-500">
          Our Residential Projects
        </h1>
        <p className="text-center text-gray-600 mt-4">
          Discover our range of exquisite residential projects, tailored to meet the highest standards of comfort and design.
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
