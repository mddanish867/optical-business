
export default function AboutPage() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">About Us</h2>
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Our Mission</h3>
              <p className="text-gray-500">
                At Acme Optical, our mission is to provide exceptional eye care services and high-quality eyewear to
                enhance the vision and lives of our patients. We are committed to using the latest technology and
                techniques to ensure the best possible outcomes for every individual we serve.
              </p>
              <h3 className="text-2xl font-bold">Our Team</h3>
              <p className="text-gray-500">
                Our team of experienced optometrists and eyewear specialists are dedicated to delivering personalized
                care and expert advice. With years of experience and a passion for eye health, we're here to help you
                see the world more clearly.
              </p>
              <h3 className="text-2xl font-bold">Our Values</h3>
              <ul className="list-disc list-inside text-gray-500">
                <li>Excellence in patient care</li>
                <li>Continuous learning and innovation</li>
                <li>Integrity and transparency</li>
                <li>Community engagement</li>
              </ul>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Our team"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }