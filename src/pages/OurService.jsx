import React from "react";
import Footer from "../components/Footer";
const serviceList = [
  {
    id: 1,
    title: "High-Quality Product",
    description: "---",
    image: "/images/home/services/assurance.png",
  },
  {
    id: 2,
    title: "High-Quality Product",
    description: "---",
    image: "/images/home/services/fast-delivery.png",
  },
  {
    id: 3,
    title: "High-Quality Product",
    description: "---",
    image: "/images/home/services/order.png",
  },
  {
    id: 4,
    title: "High-Quality Product",
    description: "---",
    image: "/images/home/services/gift.png",
  },
];
const OurService = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#fafafa] from-0% to-[#fcfcfc] to-100%">
      <div className="py-24 flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2">
          <div className="subtitle"> OUR Story & SERVICES</div>
          <h2 className="title">Our journey And Services</h2>
          <blockquote className="my-5 text-gray-700 leading-[30px]">
            " We provide a curated selection of high-quality tech-inspired
            product backed by fast shipping and exceptional customer service.
            Our mission is to empower and inspire tech enthusiasts through our
            carefully chosen merchandise and community engagement initiatives"
          </blockquote>
          <button className="btn bg-red-700 text-white">Explore</button>
        </div>
        <div className="md: w-1/2">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 item-center">
            {serviceList.map((service) => (
              <div
                key={service.id}
                className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-red-700 cursor-pointer hover:border hover:border-indigo-600 transition-all duration-200"
              >
                <img src={service.image} alt="" className="mx-auto h-16" />
                <h5 className="pt-3 font-semibold">{service.title}</h5>
                <p className="text-[#bd9098]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
            <Footer/>
    </div>
  );
};

export default OurService;
