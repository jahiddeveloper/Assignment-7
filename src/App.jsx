import { Suspense, useState } from "react";
import "./App.css";
import Footer from "./Component/Footer";
import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";
import TicketsCard from "./Component/TicketsCard/TicketsCard";
import { ToastContainer, toast } from "react-toastify";

let fetchTicket = fetch("/Tickets.json").then((res) => res.json());

function App() {
  let [card, setCard] = useState([]);

  let handleTicket = (ticket) => {
    // console.log(ticket);
    let isExist = card.find((item) => item.id == ticket.id);

    if (isExist) {
      return;
    }
    toast.success("Hello wrold");

    let newCard = [...card, ticket];
    setCard(newCard);
  };

  let [compleat, setCompleat] = useState([]);

  let handleCompleat = (ticket) => {
    // console.log(Ticket)
    let Exist = compleat.find((item) => item.id == ticket.id);

    if (Exist) {
      return;
    }

    let newCompleat = [...compleat, ticket];
    setCompleat(newCompleat);
  };
  // console.log(compleat)

  return (
    <>
      <Navbar></Navbar>
      <Hero cardTotal={card.length} compleatTotal={compleat.length}></Hero>

      <Suspense fallback={<h3>Just a sec</h3>}>
        <TicketsCard
          fetchTicket={fetchTicket}
          handleTicket={handleTicket}
          card={card}
          handleCompleat={handleCompleat}
          compleat={compleat}
        ></TicketsCard>
      </Suspense>

      <Footer></Footer>

      <ToastContainer />
    </>
  );
}

export default App;
