import PageBuilder from "@/components/ui/page-builder";
import PageBuilderFooter from "@/components/ui/page-builder/template-builder/footer-template";
import Image from "next/image";
import { clubFeatures } from "@/app/data";
import FeatureCard from "@/components/cards/feature-card";
import React from "react";

export default function Home() {
  const HomePage = new PageBuilderFooter();
  HomePage.setTitle("Coding United");
  HomePage.setDescription("Coding United");
  HomePage.setFooter(
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p>&copy; 2024 Coding United. All rights reserved.</p>
    </footer>,
  );

  return (
    <>
      <title>{HomePage.getTitle()}</title>
      <section className="relative h-[70vh] overflow-hidden">
        <div className="relative w-full h-full group">
          {/* <!-- Background Image --> */}
          <img
            src="/images/hero.jpg"
            alt="Default"
            className="absolute inset-0 w-full h-full object-cover object-bottom transition-opacity duration-300 group-hover:opacity-0 z-10"
          />

          {/* <!-- Hover Image --> */}
          <img
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGR5b3hzZmgzemRxNWF2c2ZqOXQ5anN0NXhndGN0aHVhcXI5dXQybCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WoD6JZnwap6s8/giphy.gif"
            alt="Hover Img"
            className="absolute inset-0 w-full h-full object-cover object-bottom opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
          />
        </div>
        {/* <!-- Content Container --> */}
        <div className="absolute pt-2 lg:pt-0 lg:top-1/12 lg:left-10 lg:right-auto z-10 bg-blue-800/80 p-2 lg:p-6 lg:rounded-lg max-w-4xl lg:max-w-2xl text-center">
          <h1 className="font-mono text-gray-300 font-bold text-lg md:text-3xl mb-4">
            Welcome to Coding United
          </h1>
          <hr className="border-gray-500 mb-4" />
          <p className="text-purple-300 text-sm sm:text-lg md:text-xl">
            A student-led tech club dedicated to building real-world projects,
            supporting academic success, and growing together through hands-on
            coding, curiosity, and collaboration. We are not here to fit in. We
            are here to build, to learn, and to become.
          </p>
        </div>
      </section>
      <section className="text-2xl my-8">
        <div className="relative text-center">
          <h1 className="text-black text-5xl font-bold">Mission Statement</h1>
          <hr className="h-1 bg-black" />
          <p className="text-purple-300 text-sm sm:text-lg md:text-xl" />
          <p className="mx-auto px-8 py-5 font-medium w-2/3 text-4xl font-serif text-black">
            Our mission is to foster a vibrant and inclusive community of
            student developers, empowering everyone with the skills and
            experience to succeed in the world of technology.
          </p>

          <div className="flex flex-wrap justify-center p-2">
           
              
               {clubFeatures.map((row, rowIndex) => (
                <section className="flex flex-row"key={rowIndex}> 
                  {row.map((feature, index) => (
                    <FeatureCard key={index} title={feature.title} bgColor={feature.bgColor} items={feature.items} />
                  ))} 
                </section>
              )
              )
              }

            
          </div>
        </div>
      </section>
    </>
  );
}
