import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Products = () => {
  const products = [
    {
      id: "ecommerce",
      title: "E-Commerce Websites",
      description: "Custom online stores with payment integration and product management features.",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18l-1 8H4L3 3z M5 21h14M9 17h6" />
        </svg>
      ),
      image:"./images/products/ecommerce1.png",
        features: [
        "Secure Payment Gateway",
        "User Account Management",
        "Product Catalog & Inventory",
        "Admin Dashboard",
        "Responsive Design",
        "SEO Friendly",
      ],
      link:"https://ecommerce-phi-amber-49.vercel.app/"
    },

    {
  id: "gym",
  title: "Gym & Fitness Websites",
  description: "Modern websites for gyms and fitness centers with class schedules, membership plans, and trainer profiles.",
  icon: (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6h12M6 18h12M6 6v12M18 6v12" />
    </svg>
  ),
  image: "./images/products/gym.png", // Replace with your local image path or use an Unsplash URL
  features: [
    "Online Membership Registration",
    "Class Schedule & Booking",
    "Trainer Profiles",
    "Photo & Video Gallery",
    "Mobile-Responsive Design",
    "Contact & Location Map",
  ],
  link: "https://gym-website-psi-vert.vercel.app/" // Replace with your actual link if available
},



    {
      id: "portfolio",
      title: "Portfolio Websites",
      description: "Personal and business portfolios designed to impress.",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
      ),
      image:
      "https://images.unsplash.com/photo-1677530410699-f692c94cf806?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbmFsJTIwcG9ydGZvbGlvJTIwd2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
      features: [
        "Modern UI/UX",
        "Fast Loading",
        "Interactive Layouts",
        "Project Showcases",
        "Contact & Inquiry Forms",
        "Custom Domain Support",
      ],
    },
    {
      id: "graphics",
      title: "Graphics Design",
      description: "Creative design services tailored for your brand.",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
      ),
      image:
      "./images/products/graphics.jpeg",
      features: [
        "Logo Design",
        "Brand Identity",
        "Marketing Collateral",
        "Social Media Creatives",
        "Print Ready Files",
        "Custom Illustration",
      ],
    },
    {
      id: "socialmedia",
      title: "Social Media Management",
      description: "Grow your audience with strategic and engaging content.",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h6m1 8H10a1 1 0 01-1-1v-1H7a1 1 0 01-1-1V7a1 1 0 011-1h2V5a1 1 0 011-1h4a1 1 0 011 1v1h2a1 1 0 011 1v10a1 1 0 01-1 1h-2v1a1 1 0 01-1 1z" />
        </svg>
      ),
      image:
      "https://images.unsplash.com/photo-1745848413099-13adc3aaf308?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNvY2lhbCUyMG1lZGlhJTIwaGFuZGVsaW5nfGVufDB8fDB8fHww",
      features: [
        "Content Planning",
        "Creative Post Design",
        "Hashtag Strategy",
        "Performance Analytics",
        "Platform Optimization",
        "Client Reporting",
      ],
    },
  ];

  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = location.hash.replace("#", "");
    if (id) {
      const index = products.findIndex((product) => product.id === id);
      if (index !== -1) setCurrentIndex(index);
    }
  }, [location]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentProduct = products[currentIndex];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Products</h1>
            <p className="text-xl text-white">
              Explore digital solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-16">
        <div className="container relative">
          <motion.div
            key={currentProduct.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-24 items-center"
          >
            {/* Product Content */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-secondary mb-6">{currentProduct.icon}</div>
              <h2 className="text-3xl font-bold mb-4 text-primary">{currentProduct.title}</h2>
              <p className="text-neutral-600 mb-6">{currentProduct.description}</p>
              <ul className="space-y-3">
                {currentProduct.features.map((feature) => (
                  <li key={feature} className="flex items-center text-neutral-700">
                    <svg
                      className="w-5 h-5 text-accent mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            <a
  href={currentProduct.link}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-8 px-6 py-3 bg-secondary hover:bg-secondary-light text-white rounded-md transition-all duration-300"
>
  View Product
</a>
            </div>

            {/* Image */}
            <div>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl mr-4">
                <img
                  src={currentProduct.image}
                  alt={currentProduct.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 rounded-full shadow hover:bg-gray-100 transition bg-gray-500 text-white hover:text-black"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 bg-gray-500 text-white hover:text-black rounded-full shadow hover:bg-gray-100 transition"
          >
            →
          </button>
        </div>
      </section>
    </div>
  );
};

export default Products;
