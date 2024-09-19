import { Phone, Mail, MapPin,Clock  } from "lucide-react";

export default function ContactPage() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Contact Us</h2>
          <div className="grid gap-6 lg:grid-cols-2 items-start">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Get in Touch</h3>
              <p className="text-gray-500">
                Have questions or want to book an appointment? Reach out to us using the form or contact details below.
              </p>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-500" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-500" />
                <span>info@acmeoptical.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span>123 Vision Street, Eye City, EC 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-500" />
                <span>Mon-Fri: 9am-6pm, Sat: 10am-4pm</span>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 py-2 border rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 border rounded"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full px-3 py-2 border rounded"
              />
              <textarea
                className="w-full h-32 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                placeholder="Your Message"
              ></textarea>
              <button className="w-full bg-green-500 text-white py-2 rounded">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    );
  }