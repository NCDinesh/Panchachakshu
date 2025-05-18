import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: '3 Months subscription',
      price: '70K',
      description: 'Perfect for small projects and initial consultations',
      features: [
        'Occasion/Information Post',
        'Social Medai Handeling',
        'Analytics and Reports every 3 days',
        '2 paid Advertisement per month',
        'Video Shoot and editing (2 videos per month)',
      ],
      recommended: false,
    },
    {
      name: '1 Year Subscription',
      price: '240K',
      description: 'Tailored for large-scale and complex engineering projects',

      features: [
        'Occasion/Information Post',
        'Social Medai Handeling',
        'Analytics and Reports every 3 days',
        '2 paid Advertisement per month',
        'Video Shoot and editing (2 videos per month)',
      ],
      recommended: true,
    },
    {
      name: '6 Months Subscription',
      price: '130K',
      description: 'Ideal for medium-sized projects and detailed engineering solutions',
     features: [
        'Occasion/Information Post',
        'Social Medai Handeling',
        'Analytics and Reports every 3 days',
        '2 paid Advertisement per month',
        'Video Shoot and editing (2 videos per month)',
      ],
      recommended: false,
    },
  ];

  const additionalServices = [
    {
      category: 'Technical Documentation',
      services: [
        { name: 'Detailed Technical Specifications', price: '299' },
        { name: 'CAD Drawing Package', price: '499' },
        { name: '3D Modeling & Rendering', price: '799' },
      ],
    },
    {
      category: 'Consultation Services',
      services: [
        { name: 'Expert Consultation (per hour)', price: '150' },
        { name: 'Site Visit & Assessment', price: '399' },
        { name: 'Feasibility Study', price: '999' },
      ],
    },
    {
      category: 'Project Management',
      services: [
        { name: 'Project Coordination (per week)', price: '599' },
        { name: 'Quality Assurance Review', price: '799' },
        { name: 'Risk Assessment Report', price: '699' },
      ],
    },
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Transparent Pricing</h1>
            <p className="text-xl text-white">
              Choose the right package for your engineering needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                  plan.recommended ? 'ring-2 ring-secondary' : ''
                }`}
              >
                {plan.recommended && (
                  <div className="bg-secondary text-white text-center py-2">
                    <p className="text-sm font-medium">Recommended</p>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">
                      {typeof plan.price === 'string' && plan.price !== 'Custom' ? 'Rs.' : ''}
                      {plan.price}
                    </span>
                    {/* {typeof plan.price === 'string' && plan.price !== 'Custom' && (
                      <span className="text-gray-600">/project</span>
                    )} */}
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-700">
                        <svg
                          className="w-5 h-5 text-secondary mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`btn w-full text-center ${
                      plan.recommended ? 'btn-secondary' : 'btn-primary'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Customize your package with our additional services to meet your specific project requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h3 className="text-xl font-bold mb-6">{category.category}</h3>
                <ul className="space-y-4">
                  {category.services.map((service) => (
                    <li key={service.name} className="flex justify-between items-center">
                      <span className="text-gray-700">{service.name}</span>
                      <span className="font-medium">${service.price}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">How do I choose the right package?</h3>
                <p className="text-gray-600">
                  Our team can help assess your project needs and recommend the most suitable package.
                  Contact us for a free consultation to discuss your requirements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Are there any hidden costs?</h3>
                <p className="text-gray-600">
                  No, we believe in complete transparency. All costs are clearly outlined in our
                  proposals, and any additional requirements will be discussed and agreed upon before
                  implementation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Can I customize my package?</h3>
                <p className="text-gray-600">
                  Yes, we offer flexible solutions. You can start with a base package and add specific
                  services from our additional services list to create a customized solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Pricing; 