import Navbar from '@components/nav/Navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-800">
      <Navbar />

      <section className="text-slate-900">
        <header>
          <div className="container mx-auto px-12 lg:px-14 lg:pb-10 lg:-mt-4 lg:flex lg:items-center">
            <div className="lg:w-1/2">
              <h1 className="text-6xl md:text-6xl dark:text-slate-100 font-extrabold mb-6">
                Welcome to Mojo Dojo
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-10 text-red-400 dark:text-red-300">
                Decipher the Ancient Language of JavaScript 
              </h2>

              <p className="text-lg mb-4 dark:text-slate-100 ">
                Translate code between multiple popular JavaScript frameworks like React, Vue, Svelte.
              </p>

              <p className="text-lg mb-8 dark:text-slate-100 ">
                Enhance your skills, broaden your horizons, and earn your coding black belt!
              </p>

              <Link
                href="/translate/react"
                className="bg-[#445b8d] hover:bg-[#3c507c] text-white py-2 px-6 rounded-full font-semibold transition duration-300 ease-in-out"
              >
                Get Started
              </Link>
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

    </div>
  );
};
