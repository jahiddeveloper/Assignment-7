import React from "react";
import ellips from "../../assets/Ellipse.png";
import calender from "../../assets/calender.png";

const TicketsCard = () => {
  return (
    <div className="md:w-11/12 mx-auto mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="col-span-8">
        <h2 className="font-bold text-2xl">Customer Tickets</h2>
        <div className="mt-4">
          <div className="bg-white shadow-sm rounded-lg p-4">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-xl">
                Login Issues - Can't Access Account
              </h2>
              <p
                className="flex items-center gap-2 px-5 py-2 font-semibold"
              >
                <img
                  className="w-4 h-4 rounded-5xl"
                  src={ellips}
                  alt=""
                />
                Open
              </p>
            </div>
            <p className="mt-3 text-[#627382]">
              Customer is unable to log in to their account. They've tried
              resetting their password multiple times but still...
            </p>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center gap-4">
                <p className="text-[#627382] font-semibold">#1001</p>
                <p>HIGH PRIORITY</p>
              </div>
              <div className="flex items-center gap-4">
                <p>Nmae</p>
                <div className="flex items-center gap-3">
                  <img src={calender} alt="" />
                  <p>1/15/2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-4 bg-green-200">j</div>
    </div>
  );
};

export default TicketsCard;
