import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Popup from '../components/Popup/Popup';
import Popup1 from '../components/Popup1/Popup1';



const Home = () => {
  const services = [
    {
      title: 'Electrical Engineering',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: 'Power systems, wiring, automation solutions for modern infrastructure.',
      hash: "electrical"
    },
    {
      title: 'Civil Engineering',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      description: 'Structural design, construction management, and surveying expertise.',
       hash: "civil"
    },
    {
      title: 'Computer Engineering',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      description: 'Software development, IoT solutions, and embedded systems.',
       hash: "computer"
    },
    {
      title: 'Architecture',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      description: 'Innovative design, sustainable planning, and architectural excellence.',
       hash: "architecture"
    },
    {
      title: 'Mechanical Engineering',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      description: 'Product design, CAD modeling, and thermal analysis solutions.',
     hash: "mechanical"
    },
  ];

  return (
    <div>

      <Popup1></Popup1>
      <Popup></Popup>
      
    <section className="relative text-white py-32 mt-24 overflow-hidden">
  {/* Background Zoom + Fade */}
  <motion.div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{ backgroundImage: `url('./images/background.png')` }}
    initial={{ scale: 1.2, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 5, ease: "easeInOut" }}
  />

  {/* Optional: Dark overlay for better contrast */}
  <div className="absolute inset-0 bg-black/50 z-10" />

  {/* Content */}
  <div className="container relative z-20">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="max-w-3xl"
    >
    </motion.div>
  </div>
</section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
  className="text-center mb-16"
  initial={{ opacity: 0, y: 60 }}        // Starts off 60px lower
  animate={{ opacity: 1, y: 0 }}         // Moves to original position
  transition={{ duration: 2, ease: "easeOut" }} // Slow transition
>
  <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Engineering Expertise</h2>
  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
    Discover our comprehensive range of engineering services designed to meet your project needs
    with precision and innovation.
  </p>
</motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className='flex flex-col items-center justify-center'>
                <div className="text-primary mb-4 ">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <Link
                  to={`/services#${service.hash}`}
                  className="inline-block mt-4 text-secondary hover:text-secondary-light font-medium"
                >
                  Learn more →
                </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=" text-black py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's bring your engineering vision to life with our expertise and innovative solutions.
          </p>
          <Link to="/contact" className="btn bg-white text-secondary hover:bg-gray-100">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 