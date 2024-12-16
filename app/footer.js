import React from 'react'

const Footer = () => {
  return (
    <div>
              <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold text-lime-500">About Us</h3>
          <p className="mt-4">
            We are dedicated to creating innovative architectural solutions and 
            delivering exceptional projects tailored to our clients' dreams.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-lime-500">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="/Services" className="hover:text-white">
                Our Services
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-white">
                Recent Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-lg font-semibold text-lime-500">Contact Us</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <span className="text-white">Phone:</span> +91 98765 43210
            </li>
            <li>
              <span className="text-white">Email:</span>{" "}
              <a href="mailto:info@yourdomain.com" className="hover:text-white">
                info@yourdomain.com
              </a>
            </li>
            <li>
              <span className="text-white">Address:</span> 123 Dream Street, 
              New Delhi, India
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <div className="flex justify-center space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <i className="fab fa-facebook-f text-xl"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <i className="fab fa-linkedin-in text-xl"></i>
          </a>
        </div>
        <p className="mt-6 text-sm">
          &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
        </p>
      </div>
    </footer>


      
    </div>
  )
}

export default Footer
