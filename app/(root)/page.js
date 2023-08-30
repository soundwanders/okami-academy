import Navbar from '@components/nav/Navbar';
import Image from 'next/image';

export default function Home() {
  const concepts = [
    { title: "Asynchronous Functions", route: "async", color: "bg-purple-400" },
    { title: "Closures", route: "closures", color: "bg-blue-400" },
    { title: "Events", route: "events", color: "bg-red-400" },
    { title: "Hoisting", route: "hoisting", color: "bg-orange-400" },
    { title: "Scope", route: "scope", color: "bg-pink-400" },
    { title: "This", route: "this", color: "bg-green-400" },
  ];

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-800">
      <Navbar />

      <section className="text-slate-900">
        <header>
          <div className="container mx-auto px-12 lg:px-14 lg:pb-10 lg:-mt-4 lg:flex lg:items-center">
            <div className="lg:w-1/2">
              <h1 className="text-6xl md:text-6xl dark:text-slate-100 font-extrabold mb-6">
                Welcome to Okami Academy
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-10 text-red-400 dark:text-red-300">
                Uncover the Ancient Art of JavaScript
              </h2>

              <p className="text-lg mb-4 dark:text-slate-100 ">
                Embark on a journey to conquer various JavaScript concepts through engaging and interactive coding challenges.
              </p>

              <p className="text-lg mb-8 dark:text-slate-100 ">
                Enhance your skills, deepen your understanding, and earn your coding black belt!
              </p>

              <a
                href="#concepts"
                className="bg-[#445b8d] hover:bg-[#3c507c] text-white py-2 px-6 rounded-full font-semibold transition duration-300 ease-in-out"
              >
                Get Started
              </a>
            </div>

            <div className="hidden lg:flex lg:w-1/2 lg:p-28">
              <div className="overflow-hidden">
                {/* Image for the right half of header */}
                <Image
                  src="/assets/wiseWolf.png"
                  alt="Header Image"
                  width={1200}
                  height={800}
                  className="w-full h-auto top-0 left-0 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </header>
      </section>

      <section id="concepts" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl text-slate-900 dark:text-slate-100 font-semibold mb-14 text-center">
            Explore Concepts
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 px-8">
            {concepts.map((concept, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg text-white text-center shadow-lg ${concept.color}`}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {concept.title}
                </h3>
                <p className="text-slate-50 font-semibold">
                  Learn more about {concept.title.toLowerCase()}!
                </p>
                <a
                  href={`${concept.route.replace(/\s+/g, '-').toLowerCase()}`}
                  className="mt-4 inline-block bg-white text-gray-700 py-2 px-4 rounded-full font-semibold hover:bg-gray-100 transition duration-300 ease-in-out"
                >
                  Visit
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-full md:h-screen pb-20">
        {/* Small screens hero image */}
        <div className="lg:hidden">
          <Image
            src="/assets/dojo-hero.jpg"
            alt="Okami Academy Hero Image"
            width={1200}
            height={800}
            className="w-full h-auto top-0 left-0 object-cover"
          />
        </div>
        
        {/* Large screens hero image */}
        <div className="hidden lg:block lg:mt-20">
          <div className="w-100 lg:absolute top-0 left-0 right-0 bottom-0 opacity-80">
            <Image
              src="/assets/dojo-hero.jpg"
              alt="Okami Academy Hero Image"
              style={{objectFit:"cover"}}
              fill={true}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
