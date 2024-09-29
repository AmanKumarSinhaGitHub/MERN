import { useAuth } from "../store/auth";

const Home = () => {
  const { loggedInUser } = useAuth();
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to Our Website {loggedInUser?.user?.username && `${loggedInUser.user.username}!`}
          </h1>
          <p className="text-xl mb-6">
            We provide innovative solutions and exceptional services tailored to your needs.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Feature One</h3>
              <p className="text-gray-600">
                Description of the first feature, highlighting its benefits and uniqueness.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Feature Two</h3>
              <p className="text-gray-600">
                Description of the second feature, focusing on its advantages and functionality.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Feature Three</h3>
              <p className="text-gray-600">
                Description of the third feature, explaining its key aspects and impact.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Feature Four</h3>
              <p className="text-gray-600">
                Description of the fourth feature, emphasizing its unique selling points.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Service One</h3>
              <p className="text-gray-600">
                Overview of the first service, detailing what it offers and how it benefits customers.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Service Two</h3>
              <p className="text-gray-600">
                Overview of the second service, explaining its features and advantages.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Service Three</h3>
              <p className="text-gray-600">
                Overview of the third service, highlighting its key benefits and offerings.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Service Four</h3>
              <p className="text-gray-600">
                Overview of the fourth service, focusing on its unique aspects and value.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Service Five</h3>
              <p className="text-gray-600">
                Overview of the fifth service, detailing its features and how it serves customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">What Our Clients Say</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
              <p className="text-gray-600 mb-4">
                &quot;Amazing service! The team was professional and the results exceeded our expectations.&quot;
              </p>
              <p className="font-semibold text-gray-800">Client Name</p>
              <p className="text-gray-600">Company Name</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
              <p className="text-gray-600 mb-4">
                &quot;A fantastic experience from start to finish. Highly recommended for anyone looking for quality.&quot;
              </p>
              <p className="font-semibold text-gray-800">Client Name</p>
              <p className="text-gray-600">Company Name</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
              <p className="text-gray-600 mb-4">
                &quot;Professional, reliable, and efficient. The team delivered exactly what we needed.&quot;
              </p>
              <p className="font-semibold text-gray-800">Client Name</p>
              <p className="text-gray-600">Company Name</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">What services do you offer?</h3>
              <p className="text-gray-600">
                We offer a wide range of services including web development, app development, and digital marketing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How can I contact you?</h3>
              <p className="text-gray-600">
                You can contact us through our contact page, or reach out to us via email or phone.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">What is your pricing structure?</h3>
              <p className="text-gray-600">
                Our pricing depends on the specific requirements of each project. Please contact us for a detailed quote.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Do you offer support after project completion?</h3>
              <p className="text-gray-600">
                Yes, we offer post-project support to ensure everything runs smoothly and to address any issues that may arise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Latest News</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">News Title One</h3>
              <p className="text-gray-600 mb-4">
                Brief description of the latest news, including key points and highlights.
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                Read More
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">News Title Two</h3>
              <p className="text-gray-600 mb-4">
                Brief description of another news item, with essential details and takeaways.
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                Read More
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">News Title Three</h3>
              <p className="text-gray-600 mb-4">
                Brief description of recent updates or events, with a focus on important aspects.
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-6">
            Contact us today to learn more about how we can help you achieve your goals.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>

      
    </div>
  );
};

export default Home;
