'use client'
import { useState } from 'react';
import ProjectsPage from '../Projectspage/page';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <header className="relative h-screen text-gray-800">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <img
            src="./home.jpg.jpg"
            alt="Header Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Navbar */}
        <nav className="flex items-center justify-between p-4 md:px-8 bg-black bg-opacity-40 text-lime-300">
          <div className="text-2xl font-bold text-lime-200 drop-shadow-lg">
            <Link href="/">CivilEngineer</Link>
          </div>
          <ul className="hidden  md:flex  space-x-6 text-lime-200 drop-shadow-lg">
            <li>
              <Link href="/" className="hover:text-lime-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/Projectspage" className="hover:text-lime-400">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/Services" className="hover:text-lime-400">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-lime-400">
                Contact
              </Link>
            </li>
          </ul>
          <div className="md:hidden">
            <button
              id="menu-button"
              className="p-2 text-lime-300 hover:text-lime-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-black bg-opacity-50 text-lime-300 md:hidden">
            <ul className="flex flex-col items-center space-y-4 p-4">
            <li>
              <Link href="/" className="hover:text-lime-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/Projectspage" className="hover:text-lime-400">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/Services" className="hover:text-lime-400">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-lime-400">
                Contact
              </Link>
            </li>
            </ul>
          </div>
        )}

        <div className="flex items-center h-full">
          <div className="w-full md:w-1/2 bg-white bg-opacity-70 p-8 md:p-12 shadow-lg">
            <h1 className="text-4xl font-bold text-lime-600">
              Let’s Make Your Dream Project
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Transforming your vision into reality with exceptional engineering solutions.
            </p>
            <button className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-lime-500 hover:bg-lime-600 rounded-md">
            <Link href={'/contact'}>            Book Appointement
            </Link>

            </button>
          </div>
          <div className="hidden md:block w-1/2"></div>
        </div>
      </header>

      {/* Experience Section */}
      <section className="bg-black text-white py-20 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-lime-500">Why Choose Me</h2>
            <p className="mt-4 text-xl text-gray-400">Certified Civil Engineer with Proven Experience</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-lime-500">5+ Years</h3>
              <p className="mt-4 text-gray-400">Years of Professional Experience in Civil Engineering</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-lime-500">Certified</h3>
              <p className="mt-4 text-gray-400">Certified Engineer with Industry-Recognized Qualifications</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-lime-500">20+ Projects</h3>
              <p className="mt-4 text-gray-400">Successfully Delivered Projects in Various Engineering Domains</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
