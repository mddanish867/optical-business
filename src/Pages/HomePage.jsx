
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
                <Link to="#" className="text-white border border-white hover:bg-white hover:text-black px-4 py-2 rounded">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
        
       
      </>
    );
  }