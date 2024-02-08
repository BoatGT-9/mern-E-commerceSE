import React from "react";

const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#fafafa] from-0% to-[#fcfcfc] to-100%">
      <div className="py-24 flex flex-col md:flex-row-reverse justify-between items-center">
        <div className="md:w-1/2">
          <img src="/images/home/banner.png" alt="" />
          <div className=" flex flex-col md:flex-row items-center justify-around -mt-16 gap-4">
            <div className="bg-white px-3 py-2 rounded-2xl flex items-center gap-2 shadow-sm w-64">
              <img
                src="/images/home/gamingkeyboard.png"
                alt=""
                className="rounded-2xl w-20"
              />

              <div className="space-y-1">
                <h5> Keybord</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <p className="text-red-700">300.00฿</p>
              </div>
            </div>
            <div className="bg-white px-3 py-2 rounded-2xl flex items-center gap-2 shadow-sm w-64">
              <img
                src="/images/home/headphone.png"
                alt=""
                className="rounded-2xl w-20"
              />

              <div className="space-y-1">
                <h5> headphone</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <p className="text-red-700">200.00฿</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:1/2 space-y-7 px-4">
          <h2 className="md:text-4xl text-4xl font-bold md:leading-snug leading-snug">
            {" "}
            DisCover Uique{" "}
            <span className="text-red-700"> Sofetware Swage</span> for Every
            Coding Enthusiat!
          </h2>
          <p className="text-xl text-[#4a4a4a]">
            Our mission: To merge fashion with functionality in the world of Software Engineering
          </p>
          <button className="btn bg-red-700 px-8 py-3 font-semibold text-white rounded-full">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
