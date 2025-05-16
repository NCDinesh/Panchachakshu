import { motion } from 'framer-motion';
import { useState } from 'react';

const Testimonials = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      role: 'Project Manager',
      company: 'BuildTech Solutions',
      category: 'civil',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      quote: "PanchaChakshu's civil engineering team delivered exceptional results on our commercial building project. Their attention to detail and innovative solutions helped us overcome complex structural challenges.",
      rating: 5,
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Chief Technology Officer',
      company: 'InnovateTech',
      category: 'computer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      quote: 'The computer engineering division at PanchaChakshu helped us develop a cutting-edge IoT solution that revolutionized our manufacturing process. Their expertise in both hardware and software integration was invaluable.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Lead Architect',
      company: 'DesignCraft Studios',
      category: 'architecture',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      quote: "Working with PanchaChakshu's architectural team was a pleasure. They brought our vision to life while incorporating sustainable design principles and innovative space utilization.",
      rating: 4,
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      role: 'Operations Director',
      company: 'PowerGrid Solutions',
      category: 'electrical',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      quote: 'The electrical engineering team provided excellent solutions for our power distribution challenges. Their expertise in smart grid technology and renewable energy integration was impressive.',
      rating: 5,
    },
    {
      id: 5,
      name: 'David Park',
      role: 'Manufacturing Head',
      company: 'AutoTech Industries',
      category: 'mechanical',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      quote: "PanchaChakshu's mechanical engineering team helped us optimize our production line with innovative automation solutions. Their expertise in CAD and thermal analysis was crucial to our success.",
      rating: 5,
    },
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'civil', name: 'Civil Engineering' },
    { id: 'electrical', name: 'Electrical Engineering' },
    { id: 'computer', name: 'Computer Engineering' },
    { id: 'architecture', name: 'Architecture' },
    { id: 'mechanical', name: 'Mechanical Engineering' },
  ];

  const filteredTestimonials = activeCategory === 'all'
    ? testimonials
    : testimonials.filter(t => t.category === activeCategory);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-primary-light' : 'text-neutral-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Client Testimonials</h1>
            <p className="text-xl text-neutral-200">
              Discover what our clients say about their experience working with PanchaChakshu
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-neutral-100">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-neutral-600 hover:bg-neutral-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8 border border-neutral-200"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900">{testimonial.name}</h3>
                    <p className="text-neutral-600">{testimonial.role}</p>
                    <p className="text-primary font-medium">{testimonial.company}</p>
                  </div>
                </div>
                <div className="mb-4 flex">
                  {renderStars(testimonial.rating)}
                </div>
                <blockquote className="text-neutral-700 italic">"{testimonial.quote}"</blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Satisfied Clients', value: '500+' },
              { label: 'Projects Completed', value: '1000+' },
              { label: 'Years of Experience', value: '15+' },
              { label: 'Expert Engineers', value: '50+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-neutral-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    
    </div>
  );
};

export default Testimonials;