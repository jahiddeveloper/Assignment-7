import React, { use } from "react";
import TicketCard from "../TicketCard/TicketCard";

const TicketsCard = ({ fetchTicket, handleTicket }) => {
  let ticket = use(fetchTicket);
    
  return (
    <div className="md:w-11/12 mx-auto mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="col-span-9">
        <h2 className="font-bold text-2xl mx-2 md:mx-auto">Customer Tickets</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 mx-2 md:mx-auto">
          {ticket.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} handleTicket={handleTicket}></TicketCard>
          ))}
        </div>
      </div>

      <div className="col-span-3 justify-items-center md:justify-items-start mt-5 md:mt-0">
        {/* Task status */}
        <div className="w-full p-4 rounded-lg">
          <h2 className="text-2xl font-bold">Task Status</h2>
          <div>
            <p className="text-[#627382] mt-4">
              Select a ticket to add to Task Status
            </p>
          </div>
        </div>
        {/* Resolve task */}
        <div className="w-full p-4 rounded-lg">
          <h2 className="text-2xl font-bold">Resolved Task</h2>
          <div>
            <p className="text-[#627382] mt-4">
              No resolved tasks yet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsCard;
