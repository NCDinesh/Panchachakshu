import { useEffect } from "react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";


const Services = () => {
  const services = [
    {
      id: 'electrical',
      title: 'Electrical Engineering',
      description: 'Comprehensive electrical solutions for modern infrastructure.',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      image: 'https://media.istockphoto.com/id/637589830/photo/electrical-engineer-while-working-laptopl.webp?a=1&b=1&s=612x612&w=0&k=20&c=wiZnx5j6NPYgVrJ48QqQU5ni5RcaPFUOJY7us4NGn_o=',
      features: [
        'Power Systems Design & Analysis',
        'Industrial Automation',
        'Energy Management Solutions',
        'Electrical Safety Consulting',
        'Smart Grid Integration',
        'Renewable Energy Systems',
      ],
    },
    {
      id: 'civil',
      title: 'Civil Engineering',
      description: 'Building the foundation for sustainable development.',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      image: 'https://media.istockphoto.com/id/1944772735/photo/closeup-of-team-of-industrial-engineers-meeting-analyze-machinery-blueprints-consult-project.webp?a=1&b=1&s=612x612&w=0&k=20&c=3L6GzV-g6fSfZrrhudYguwCTSpQV84hrvlY3FhWpx9E=',
      features: [
        'Structural Engineering',
        'Construction Management',
        'Geotechnical Services',
        'Transportation Planning',
        'Environmental Impact Studies',
        'Urban Infrastructure Design',
      ],
    },
    {
      id: 'computer',
      title: 'Computer Engineering',
      description: 'Digital solutions for the modern world.',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      image: 'https://plus.unsplash.com/premium_photo-1661331911412-330f2e99cf53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29tcHV0ZXIlMjBlbmdpbmVlcmluZ3xlbnwwfHwwfHx8MA%3D%3D',
      features: [
        'Software Development',
        'IoT Solutions',
        'Embedded Systems',
        'Network Architecture',
        'Cybersecurity Services',
        'Cloud Integration',
      ],
    },
    {
      id: 'architecture',
      title: 'Architecture',
      description: 'Creating spaces that inspire and endure.',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      image: 'https://media.istockphoto.com/id/1351472483/photo/house-project-in-virtual-reality.webp?a=1&b=1&s=612x612&w=0&k=20&c=P2wOCz3ihP9QW45VJPui5brfxgdu5wTgTpisqJVWeF8=',
      features: [
        'Architectural Design',
        'Sustainable Planning',
        'Interior Design',
        'Landscape Architecture',
        '3D Visualization',
        'Heritage Conservation',
      ],
    },
    {
      id: 'mechanical',
      title: 'Mechanical Engineering',
      description: 'Innovative mechanical solutions for complex challenges.',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      image: 'https://media.istockphoto.com/id/1422090283/photo/real-life-young-female-aircraft-engineer-apprentice-at-work.webp?a=1&b=1&s=612x612&w=0&k=20&c=_xB0dP7BhxouaVAh56ubB_W0l_5jh-n_FEbPX5tuWcY=',
      features: [
        'Product Design',
        'CAD/CAM Services',
        'Thermal Analysis',
        'Manufacturing Solutions',
        'Quality Control',
        'Automation Systems',
      ],
    },
  ];

  const location = useLocation();

  useEffect(() => {
    const id = location.hash.replace("#", "");
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);


  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Services</h1>
            <p className="text-xl text-white">
              Comprehensive engineering solutions across five core disciplines
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="grid md:grid-cols-2 gap-24 items-center"
              >
<div className={index % 2 === 0 ? 'order-1 flex flex-col items-center justify-center text-center' : 'order-1 md:order-2 flex flex-col items-center justify-center text-center'}>
                
                  <div className="text-secondary mb-6">{service.icon}</div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">{service.title}</h2>
                  <p className="text-neutral-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-neutral-700">
                        <svg
                          className="w-5 h-5 text-accent mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-block mt-8 px-6 py-3 bg-secondary hover:bg-secondary-light text-white rounded-md transition-all duration-300"
                  >
                    Inquire About {service.title}
                  </Link>
              
                </div>
               
                <div className={index % 2 === 0 ? 'order-2' : 'order-2 md:order-1'}>
                
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="object-cover w-full h-full "
                      
                    />
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services; 