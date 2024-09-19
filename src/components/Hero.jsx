import React from 'react'
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <>
      <section className="bg-indigo-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              AI-Powered CV Maker
            </h1>
            <p className="my-4 text-xl text-white">
              Create a personalized CV tailored to the job you want, leveraging
              the power of AI for the best results.
            </p>
            <button
              type="button"
              className="px-14 text-md hover:bg-green-500 hover:text-white text-2xl shad font-extrabold text-white py-6 bg-green-600 shadow-md rounded-md">
              <Link to="/dash">Generate Your CV</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero