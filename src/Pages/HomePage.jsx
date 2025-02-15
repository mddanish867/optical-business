import { Eye, Glasses, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <section className="w-full min-h-screen bg-black">
        {/* Responsive padding that increases with screen size */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32">
          <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 text-center h-full">
            <div className="space-y-4 sm:space-y-6">
              {/* Responsive text sizing */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-white">
                See the World Clearly
              </h1>
              {/* Responsive paragraph width and text size */}
              <p className="mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-sm sm:text-base md:text-lg lg:text-xl text-gray-300">
                Professional eye care and stylish eyewear for your perfect vision
              </p>
            </div>
            {/* Responsive button layout */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
              <Link
                to="/bookappoinment"
                className="w-full sm:w-auto inline-flex justify-center items-center bg-white text-black hover:bg-gray-200 px-6 py-2.5 rounded text-sm sm:text-base transition-colors duration-200"
              >
                Book an Appointment
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex justify-center items-center text-white border border-white hover:bg-white hover:text-black px-6 py-2.5 rounded text-sm sm:text-base transition-colors duration-200"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}