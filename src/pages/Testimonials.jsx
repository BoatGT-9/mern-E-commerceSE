import React from "react";

const Testimonials = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#fafafa] from-0% to-[#fcfcfc] to-100%">
      <div className="py-24 flex flex-col md:flex-row-reverse justify-between items-center">
        <div className="md:1/2 space-y-7 ">
          <div className="subtitle">Testimonials</div>
          <h2 className="title">
            {" "}
            What Our Customers <br></br>Say About Us
          </h2>
          <blockquote className="my-5 text-gray-700 leading-[30px]">
            " As a software developer.I'm always on the lookout for unique{" "}
            <br /> accessories to express my love for coding. the Keyboard Key
            Keychain is <br /> not only stylish but also durable. Will
            definitely be purchasing more
            <br /> items!"
          </blockquote>
          <div className="flex  items-center gap-4 flex-wrap">
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-12">
                  <img src="/images/home/testimonials/testimonial1.png" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="/images/home/testimonials/testimonial2.png" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="/images/home/testimonials/testimonial3.png" />
                </div>
              </div>
              {/* <div className="avatar placeholder">
                <div className="w-12 bg-neutral text-neutral-content">
                  <span>+99</span>
                </div>
              </div> */}
            </div>
            <div className="space-y-1">
              <h5 className="text-lg font-semibold">Custom Feedback</h5>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-semobold">4.9</span>
                <span className="text-[#907E7E]">(18.6k Reviews)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="/images/home/testimonials/testimonials.png"
            alt=""
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
