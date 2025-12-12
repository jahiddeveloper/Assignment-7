import { Suspense } from 'react'
import './App.css'
import Footer from './Component/Footer'
import Hero from './Component/Hero'
import Navbar from './Component/Navbar'
import TicketsCard from './Component/TicketsCard/TicketsCard'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      
      <Suspense fallback = {<h3>Just a sec</h3>}>
      <TicketsCard></TicketsCard>
      </Suspense>
      
      <Footer></Footer>
    </>
  )
}

export default App
