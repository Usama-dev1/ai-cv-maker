import React from "react";

const HomeFeature1 = () => {
  return (
    <section className="bg-white text-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Build CVs with ease,
            <br /> all within your browser.
          </h1>
          <p className="my-4 text-lg sm:text-xl">Easy-to-follow steps</p>
        </div>
        <div className="grid grid-rows-1 w-full mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
            <div className="p-6 bg-gray-100 h-80 flex flex-col justify-center rounded-lg shadow-lg">
              <h2 className="text-3xl font-extrabold mb-4">
                Multiple Templates
              </h2>
              <p className="mt-2 text-base">
                Choose from a variety of downloadable templates to make your CV
                stand out.
              </p>
            </div>
            <div className="p-6 bg-gray-100 h-80 flex flex-col justify-center rounded-lg shadow-lg">
              <h2 className="text-3xl font-extrabold mb-4">ATS Friendly</h2>
              <p className="mt-2 text-base">
                Optimize your CV to pass Applicant Tracking Systems with ease.
              </p>
            </div>
            <div className="p-6 bg-gray-100 h-80 flex flex-col justify-center rounded-lg shadow-lg">
              <h2 className="text-3xl font-extrabold mb-4">
                Customize with AI
              </h2>
              <p className="mt-2 text-base">
                Leverage AI to personalize and enhance your CV for any job
                application based on Job Description.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeature1;
