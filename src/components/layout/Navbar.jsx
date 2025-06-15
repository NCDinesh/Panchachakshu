import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'About',
      dropdown: [
        { name: 'About Panchachakshu', path: '/about#panchachakshu' },
        { name: 'Our Products', path: '/products' },
        { name: 'Our Team', path: '/about#ourteam' },
      ],
    },
    {
      name: 'Services',
      dropdown: [
        { name: 'Civil Engineering', path: '/services/#civil' },
        { name: 'Computer Engineering', path: '/services/#computer' },
        { name: 'Architecture', path: '/services/#architecture' },
        { name: 'Electrical Engineering', path: '/services/#electrical' },
        { name: 'Mechanical Engineering', path: '/services/#mechanical' },
      ],
    },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="shadow-md fixed w-full z-50 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img src="./images/logo.png" alt="Logo" className="size-14" />
            <div className="name">
              <span className="text-2xl font-bold block md:hidden lg:block">Panchachakshu</span>
              <p className="block md:hidden lg:block">Engineering Solution Pvt. Ltd.</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 relative">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative group">
                  <button className="text-gray-300 hover:text-white transition">
                    {link.name}
                  </button>
                  <div className="absolute left-0 mt-2 bg-primary text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 w-72">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-4 py-2 hover:bg-white hover:text-primary transition"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-300 hover:text-white transition"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 pt-2 space-y-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="px-4">
                  <p className="text-white font-semibold mt-2">{link.name}</p>
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2 text-white hover:bg-white hover:text-primary transition"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-4 py-2 text-white hover:bg-white hover:text-primary transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
