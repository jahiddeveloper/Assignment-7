import { Suspense, useState } from "react";
import "./App.css";
import Footer from "./Component/Footer";
import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";
import TicketsCard from "./Component/TicketsCard/TicketsCard";

let fetchTicket = fetch("/Tickets.json").then((res) => res.json());

function App() {
  let [card, setCard] = useState([]);

  let handleTicket = (ticket) => {
    console.log(ticket);
    let newCard = [...card, ticket];
    setCard(newCard);
  };
  console.log(card);

  return (
    <>
      <Navbar></Navbar>
      <Hero cardTotal = {card.length}></Hero>

      <Suspense fallback={<h3>Just a sec</h3>}>
        <TicketsCard fetchTicket={fetchTicket} handleTicket={handleTicket}></TicketsCard>
      </Suspense>

      <Footer></Footer>
    </>
  );
}

export default App;
