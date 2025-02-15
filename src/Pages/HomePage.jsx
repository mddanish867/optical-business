// import { Eye, Glasses, Heart } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function HomePage() {
//   return (
//     <>
//       <section className="w-full min-h-screen bg-black">
//         {/* Full height container with flex */}
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 min-h-screen flex items-center justify-center">
//           <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 text-center">
//             <div className="space-y-4 sm:space-y-6">
//               <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-white">
//                 See the World Clearly
//               </h1>
//               <p className="mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-sm sm:text-base md:text-lg lg:text-xl text-gray-300">
//                 Professional eye care and stylish eyewear for your perfect vision
//               </p>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
//               <Link
//                 to="/bookappoinment"
//                 className="w-full sm:w-auto inline-flex justify-center items-center bg-white text-black hover:bg-gray-200 px-6 py-2.5 rounded text-sm sm:text-base transition-colors duration-200"
//               >
//                 Book an Appointment
//               </Link>
//               <Link
//                 to="/services"
//                 className="w-full sm:w-auto inline-flex justify-center items-center text-white border border-white hover:bg-white hover:text-black px-6 py-2.5 rounded text-sm sm:text-base transition-colors duration-200"
//               >
//                 Our Services
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
import { Eye, Glasses, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <section className="w-full min-h-screen bg-black relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full grid grid-cols-12 gap-4">
            {[...Array(144)].map((_, i) => (
              <div
                key={i}
                className="border-t border-l border-gray-700 animate-pulse"
                style={{
                  animationDelay: `${i * 0.05}s`,
                  animationDuration: '3s'
                }}
              />
            ))}
          </div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 min-h-screen flex items-center justify-center relative z-10">
          <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 text-center animate-fade-in">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-white animate-slide-up">
                Your Perfect Vision, Our Passion
              </h1>
              <p className="mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 animate-fade-in opacity-0" 
                 style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                See the world through a new lens. Our optical store offers a wide range of eyewear options, designed to enhance your vision and style
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto animate-fade-in opacity-0"
                 style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <Link
                to="/bookappoinment"
                className="w-full sm:w-auto inline-flex justify-center items-center bg-white text-black hover:bg-gray-200 px-6 py-2.5 rounded text-sm sm:text-base transition-all duration-200 hover:scale-105"
              >
                Book an Appointment
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex justify-center items-center text-white border border-white hover:bg-white hover:text-black px-6 py-2.5 rounded text-sm sm:text-base transition-all duration-200 hover:scale-105"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <Eye 
            className="absolute top-1/4 left-1/4 text-white opacity-10 animate-float" 
            size={48}
          />
          <Glasses 
            className="absolute top-2/3 right-1/4 text-white opacity-10 animate-float" 
            size={48}
            style={{ animationDelay: '1s' }}
          />
          <Heart 
            className="absolute bottom-1/4 left-1/3 text-white opacity-10 animate-float" 
            size={48}
            style={{ animationDelay: '2s' }}
          />
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
      `}</style>
    </>
  );
}