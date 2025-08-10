import { Helmet } from "react-helmet";
import { FaBullseye, FaEye, FaHandsHelping } from "react-icons/fa";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Servora</title>
        <meta
          name="description"
          content="Learn more about Servora, our mission, vision, and values."
        />
      </Helmet>

      <section className="w-full min-h-screen pt-16 md:pt-32 pb-16 px-4 sm:px-6 lg:px-0 bg-gradient-to-b from-[#D3E1FA] to-white dark:from-[#07142F] dark:to-[#0f0e0e] text-text">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Heading */}
          <h1 className="text-center text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-brand">Us</span>
          </h1>
          <p className="text-center text-lg text-text/80 dark:text-text-muted max-w-2xl mx-auto mb-12">
            Servora connects you with trusted service providers in your area. From home repairs to
            personal care, we’re here to make your life easier.
          </p>

          {/* Mission / Vision / Values */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Mission */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 text-center">
              <FaBullseye className="text-brand text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Our Mission</h3>
              <p className="text-text/80 dark:text-text-muted">
                To make finding reliable services simple, transparent, and accessible for everyone.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 text-center">
              <FaEye className="text-brand text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Our Vision</h3>
              <p className="text-text/80 dark:text-text-muted">
                To be the most trusted platform for connecting customers with service providers
                worldwide.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 text-center">
              <FaHandsHelping className="text-brand text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Our Values</h3>
              <p className="text-text/80 dark:text-text-muted">
                Integrity, transparency, and customer-first service are at the heart of everything
                we do.
              </p>
            </div>
          </div>

          {/* Story Section */}
          <div className="mt-16 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-brand">Our Story</h2>
            <p className="text-text/80 dark:text-text-muted leading-relaxed">
              Servora began with a simple idea: to make finding trusted services as easy as possible.
              We noticed how challenging it was for people to find reliable, affordable, and skilled
              service providers in their local area. That’s when we decided to build a platform where
              quality meets convenience.
              <br />
              <br />
              Today, Servora is used by hundreds of customers and service providers, helping them
              connect quickly, communicate effectively, and complete work with confidence.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
