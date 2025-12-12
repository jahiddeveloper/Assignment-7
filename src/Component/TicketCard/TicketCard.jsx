import React from "react";
import ellips from "../../assets/Ellipse.png";
import calender from "../../assets/calender.png";

const TicketCard = ({ ticket }) => {
  return (
    <div>
      <div className="bg-white shadow-sm rounded-lg p-4 cursor-pointer hover:shadow-2xl hover:transition duration-350 hover:scale-101">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-xl">{ticket.title}</h2>
          <p className="flex items-center gap-2 px-5 py-2 font-semibold">
            <img className="w-4 h-4 rounded-5xl" src={ellips} alt="" />
            {ticket.status}
          </p>
        </div>
        <p className="mt-3 text-[#627382] md:w-125">{ticket.description}</p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2 md:gap-4">
            <p className="text-[#627382] font-semibold">{ticket.id}</p>
            <p>{ticket.priority}</p>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <p className="text-[#627382] font-semibold">{ticket.customer}</p>
            <div className="flex items-center gap-1 md:gap-3">
              <img src={calender} alt="" />
              <p>{ticket.date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
