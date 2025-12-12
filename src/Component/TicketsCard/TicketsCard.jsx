import React, { use } from "react";
import TicketCard from "../TicketCard/TicketCard";


const TicketsCard = ({fetchTicket}) => {
    let ticket = use(fetchTicket)
  return (
    <div className="md:w-11/12 mx-auto mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="col-span-8">
        <h2 className="font-bold text-2xl">Customer Tickets</h2>
        <div className="mt-4">
          {
            ticket.map(ticket => <TicketCard key={ticket.id} ticket = {ticket}></TicketCard>)
          }
        </div>
      </div>

      <div className="col-span-4 bg-green-200">j</div>
    </div>
  );
};

export default TicketsCard;
