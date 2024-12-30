import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-16 " id="contact">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">
        {/* Contact Information */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Have a project in mind or just want to say hello? Feel free to reach
            out to me through any of the channels below or by using the contact
            form.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-gray-600 text-xl" />
              <p className="text-gray-700">+8801786335131</p>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-gray-600 text-xl" />
              <p className="text-gray-700">anikkumerroy7@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-gray-600 text-xl" />
              <p className="text-gray-700">Naogaon, Rajshahi, Bangladesh</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className=" rounded-lg shadow-md p-8"
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <form className="space-y-6">
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                required
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                id="name"
                name="name"
                placeholder="Your Name"
                type="text"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                required
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                id="email"
                name="email"
                placeholder="you@example.com"
                type="email"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                required
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                id="message"
                name="message"
                placeholder="Your Message"
              />
            </div>
            <button
              className="w-full py-3 bg-default-900 text-white font-bold rounded-lg hover:bg-default-700 transition"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
