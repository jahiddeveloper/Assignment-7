import { Suspense } from 'react'
import './App.css'
import Footer from './Component/Footer'
import Hero from './Component/Hero'
import Navbar from './Component/Navbar'
import TicketsCard from './Component/TicketsCard/TicketsCard'

let fetchTicket = fetch("/Tickets.json")
.then(res => res.json())

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>

      <Suspense fallback = {<h3>Just a sec</h3>}>
      <TicketsCard fetchTicket = {fetchTicket}></TicketsCard>
      </Suspense>

      <Footer></Footer>
    </>
  )
}

export default App
