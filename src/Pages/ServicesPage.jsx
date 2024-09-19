import { Eye, Glasses,  Clock,  } from "lucide-react";

export default function ServicesPage() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Services</h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <Eye className="h-12 w-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-bold mb-2">Comprehensive Eye Exams</h3>
              <p className="text-gray-500">Thorough eye health and vision assessments using advanced technology</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Glasses className="h-12 w-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-bold mb-2">Eyewear Fitting and Styling</h3>
              <p className="text-gray-500">Expert fitting for glasses and contact lenses with personalized style advice</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Eye className="h-12 w-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-bold mb-2">Vision Therapy</h3>
              <p className="text-gray-500">Customized programs to improve visual skills and processing</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Clock className="h-12 w-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-bold mb-2">Emergency Eye Care</h3>
              <p className="text-gray-500">Prompt attention for unexpected eye injuries or conditions</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Glasses className="h-12 w-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-bold mb-2">Specialty Contact Lenses</h3>
              <p className="text-gray-500">Fitting for hard-to-fit eyes and complex prescriptions</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Eye className="h-12 w-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-bold mb-2">Pediatric Eye Care</h3>
              <p className="text-gray-500">Specialized care for children's visual development and eye health</p>
            </div>
          </div>
        </div>
      </section>
    );
  }