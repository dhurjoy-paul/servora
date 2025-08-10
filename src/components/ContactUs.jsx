import { Helmet } from "react-helmet";
import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // Integrate EmailJS, Formspree, or backend API here
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Servora</title>
        <meta name="description" content="Get in touch with the Servora team" />
      </Helmet>

      <section className="w-full min-h-screen pt-16 md:pt-32 pb-16 px-4 sm:px-6 lg:px-0 bg-gradient-to-b from-[#D3E1FA] to-white dark:from-[#07142F] dark:to-[#0f0e0e] text-text">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Heading */}
          <h1 className="text-center text-3xl md:text-4xl font-bold mb-4">
            Contact <span className="text-brand">Us</span>
          </h1>
          <p className="text-center text-lg text-text/80 dark:text-text-muted max-w-2xl mx-auto mb-12">
            Have a question or need help? Fill out the form and our team will get back to you as soon as possible.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-text dark:text-white bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-text dark:text-white bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-text dark:text-white bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-brand"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand text-white py-3 rounded-xl font-semibold hover:bg-brand/90 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 flex flex-col justify-center gap-6">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-brand text-xl" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-text/80 dark:text-text-muted">+880 1234-567890</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-brand text-xl" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-text/80 dark:text-text-muted">support@servora.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-brand text-xl" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-text/80 dark:text-text-muted">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
