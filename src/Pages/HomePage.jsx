
import { Eye, Glasses, Heart,  } from "lucide-react";
import { Link, } from "react-router-dom";

export default function HomePage() {
    return (
      <>
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                  See the World Clearly
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Professional eye care and stylish eyewear for your perfect vision
                </p>
              </div>
              <div className="space-x-4">
                <Link to="/bookappoinment" className="bg-white text-black hover:bg-gray-200 px-4 py-2 rounded">
                  Book an Appointment
                </Link>
                <button className="text-white border border-white hover:bg-white hover:text-black px-4 py-2 rounded">
                  Our Services
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Featured Products</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={`/placeholder.svg?height=300&width=300`}
                    alt={`Product ${i}`}
                    className="object-cover w-full h-[300px] transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity opacity-0 group-hover:opacity-100 flex items-center justify-center">
                    <button className="mr-2 bg-gray-200 text-gray-800 px-3 py-1 rounded">
                      View Details
                    </button>
                    <button className="bg-blue-500 text-white px-3 py-1 rounded">
                      Add to Cart
                    </button>
                  </div>
                  <button
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-white rounded-full p-1"
                  >
                    <Heart className="h-5 w-5 text-red-500" />
                    <span className="sr-only">Add to Favorites</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Services</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Eye className="h-12 w-12 mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2">Eye Exams</h3>
                <p className="text-gray-500">Comprehensive eye exams using state-of-the-art technology</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Glasses className="h-12 w-12 mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2">Eyewear Fitting</h3>
                <p className="text-gray-500">Expert fitting for glasses and contact lenses</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Eye className="h-12 w-12 mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2">Vision Therapy</h3>
                <p className="text-gray-500">Personalized vision therapy programs for all ages</p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }