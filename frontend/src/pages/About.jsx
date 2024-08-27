const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl mb-6">
            Learn more about our company, our mission, and the dedicated team behind our success.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Company Overview</h2>
          <p className="text-gray-600 mb-6">
            Our company has been a leader in the industry for over a decade, providing top-notch solutions to clients around the world. 
            We are committed to excellence and innovation, ensuring that every project we undertake meets the highest standards.
          </p>
          <p className="text-gray-600">
            With a team of dedicated professionals and a passion for technology, we strive to exceed expectations and deliver exceptional results.
          </p>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
              <p className="mt-2">
                John is the visionary behind our company, with over 20 years of experience in the industry.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
              <p className="text-gray-600">Chief Operating Officer</p>
              <p className="mt-2">
                Jane oversees our daily operations and ensures that everything runs smoothly.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Emily Johnson</h3>
              <p className="text-gray-600">Lead Developer</p>
              <p className="mt-2">
                Emily leads our development team, ensuring high-quality and timely delivery of projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            Our mission is to provide innovative solutions that drive success for our clients. We are dedicated to fostering a collaborative environment, where creativity and technology come together to solve complex challenges.
          </p>
          <p className="text-gray-600">
            We believe in the power of technology to transform businesses and improve lives, and we are committed to delivering results that exceed expectations.
          </p>
        </div>
      </section>

      
    </div>
  );
};

export default About;
