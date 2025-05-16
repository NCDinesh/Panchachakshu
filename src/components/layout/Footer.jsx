import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
          {/* Company Info */}
          <div className="space-y-4 text-center md:text-start">
            <h3 className="text-xl font-bold text-white">PanchaChakshu</h3>
            <p className="text-white">
              Vision Beyond Boundaries in Engineering Excellence
            </p>
            <div className="space-y-2 text-center md:text-start">
  <p className="inline-flex items-center justify-center md:justify-start break-all">
    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
    info@panchachakshu.com
  </p>
  <p className="inline-flex items-center justify-center md:justify-start">
    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
    +1 (555) 123-4567
  </p>
</div>

          </div>

          {/* Quick Links */}
          <div className='text-center md:text-start'>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white">Pricing</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className='text-center md:text-start'>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services#electrical" className="text-gray-300 hover:text-white">Electrical Engineering</Link></li>
              <li><Link to="/services#civil" className="text-gray-300 hover:text-white">Civil Engineering</Link></li>
              <li><Link to="/services#computer" className="text-gray-300 hover:text-white">Computer Engineering</Link></li>
              <li><Link to="/services#architecture" className="text-gray-300 hover:text-white">Architecture</Link></li>
              <li><Link to="/services#mechanical" className="text-gray-300 hover:text-white">Mechanical Engineering</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className='text-center md:text-start'>
            <h3 className="text-lg font-semibold mb-4 text-white">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for updates and insights.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-primary-light text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button type="submit" className="w-full btn btn-secondary">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-light mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} PanchaChakshu Engineering Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 