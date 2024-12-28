import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">
        {/* Contact Information */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Have a project in mind or just want to say hello? Feel free to reach out to me through any
            of the channels below or by using the contact form.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-gray-600 text-xl">
                📞
              </span>
              <p className="text-gray-700">+880-123-456-7890</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600 text-xl">
                📧
              </span>
              <p className="text-gray-700">anik@example.com</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600 text-xl">
                📍
              </span>
              <p className="text-gray-700">Naogaon, Rajshahi, Bangladesh</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className=" rounded-lg shadow-md p-8"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                placeholder="Your Message"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-default-900 text-white font-bold rounded-lg hover:bg-default-700 transition"
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
