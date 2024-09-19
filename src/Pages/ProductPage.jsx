import { Heart,  } from "lucide-react";

export default function ProductsPage() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Products</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
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
    );
  }