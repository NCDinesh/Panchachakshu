import { motion } from 'framer-motion';

const About = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge solutions and creative thinking.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Excellence',
      description: 'Delivering superior quality in every project we undertake.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: 'Collaboration',
      description: 'Working together across disciplines for comprehensive solutions.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  const team = [
    {
      name: 'Er. Aavash Adhikari',
      role: 'Chief Executive Officer',
      image: '/images/team/CEO.jpeg',
      // description: 'With over 20 years of experience in engineering and leadership.',
    },
    {
      name: 'Er. Mahesh Raj Joshi',
      role: 'Chief Operating Officer',
      image: '/images/team/COO.jpg',
      // description: 'Expert in sustainable infrastructure development.',
    },
    {
      name: 'Lekhnath Neupane',
      role: 'Chief Technical Officer',
      image: '/images/team/electrical-head.jpg',
      // description: 'Specialist in power systems and renewable energy.',
    },
      {
      name: 'Himesh Bhattarai',
      role: 'Chief Technical Officer',
      image: '/images/team/CTO.webp',
      // description: 'Specialist in power systems and renewable energy.',
    },

    {
      name: 'Nitesh Mishra',
      role: 'Marketing Manager',
      image: '/images/team/marketing.jpg',
      // description: 'Leading innovation in software and IoT solutions.',
    },
    {
      name: 'Dinesh Nepal',
      role: 'Software Developer',
      image: '/images/team/softwaredeveloper.jpg',
      // description: 'Award-winning architect with a focus on sustainable design.',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About PanchaChakshu</h1>
            <p className="text-xl text-white">
              Discover the story behind our name and our commitment to engineering excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At PanchaChakshu Engineering Solutions, our mission is to revolutionize the engineering
                landscape by providing integrated solutions that bridge multiple disciplines. We strive
                to create sustainable, innovative, and efficient solutions that address complex
                challenges in today's rapidly evolving world.
              </p>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-600">
                To be the leading multi-disciplinary engineering firm that sets new standards in
                innovation, sustainability, and excellence across all five core engineering sectors.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  alt="Engineering team collaboration"
                  className="object-cover "
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide our approach to every project and interaction.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="text-primary mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PanchaChakshu */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why "PanchaChakshu"?</h2>
            <p className="text-gray-600 mb-8">
              "PanchaChakshu" derives from Sanskrit, meaning "five eyes" or "five visions." This name
              represents our comprehensive approach to engineering through five distinct yet
              interconnected disciplines. Just as the five senses work together to provide a complete
              understanding of the world, our five engineering departments collaborate to deliver
              holistic solutions.
            </p>
            <div className="grid grid-cols-5 gap-4 text-center">
              {['Electrical', 'Civil', 'Computer', 'Architecture', 'Mechanical'].map((discipline) => (
                <div
                  key={discipline}
                  className="p-4 bg-gray-50 rounded-lg"
                >
                  <p className="font-medium text-primary">{discipline}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our diverse team of experts brings together decades of experience across all engineering disciplines.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
  {team.map((member, index) => (
    <motion.div
      key={member.name}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center text-center"
    >
      <div className="w-32 h-32 overflow-hidden rounded-full mt-6">
        <img
          src={member.image}
          alt={member.name}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-secondary mb-2">{member.role}</p>
        <p className="text-gray-600">{member.description}</p>
      </div>
    </motion.div>
  ))}
</div>
        </div>
      </section>
    </div>
  );
};

export default About; 